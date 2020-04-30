import { push } from "connected-react-router";
import API from "../utils/API";

export const LOGOUT_USER='LOGOUT_USER'

export function logoutUser () {
  return dispatch =>{
    dispatch({type: LOGOUT_USER});
    localStorage.removeItem('token')
    dispatch(push('/login'))
  }
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function authenticateUser (userData , props) {

  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });

  API().post("/users/login", userData)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem("userID", response.data.id)
      localStorage.setItem("username", response.data.username)
      dispatch({type: LOGIN_SUCCESS, payload: response.data})
      dispatch(push("/profile"));
    })
    .catch(error =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: error
      })
    );
}};

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = (userData) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  API().post("/users/register", userData)
    .then(response => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      dispatch(push("/login"));
    })
    .catch(error =>
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: error.response.data.message
      })
    );
};

export const addData = (userData) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  console.log(userData)
  if(userData){
    dispatch({ type: REGISTER_SUCCESS, payload: {data: userData} });
    dispatch(push("/education"))
  } else{
    dispatch({
      type: REGISTER_FAILURE
    })
  }
};

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUser = (token) => dispatch => {
  dispatch({ type: GET_USER_REQUEST });

  API().get("/users/me",{ headers:{token: token}})
    .then(response => {
      dispatch({ type: GET_USER_SUCCESS, payload: response.data });
    })
    .catch(error =>
      dispatch({
        type: GET_USER_FAILURE,
        errorMessage: error.response.data.message
      })
    );
};

const ID = localStorage.getItem("userID");

export const UPDATE_PHONE_REQUEST = "UPDATE_PHONE_REQUEST";
export const UPDATE_PHONE_SUCCESS = "UPDATE_PHONE_SUCCESS";
export const UPDATE_PHONE_FAILURE = "UPDATE_PHONE_FAILURE";

export const updatePhone = (phone, props) => dispatch => {
  dispatch({ type: UPDATE_PHONE_REQUEST });

  API().put(`/dashboard/${ID}/user_settings`, phone)
    .then(response => {
      dispatch({ type: UPDATE_PHONE_SUCCESS, payload: response.data });
      dispatch(push('/'));
    })
    .catch(error => {
      dispatch({
        type: UPDATE_PHONE_FAILURE,
        errorMessage: error.response.data.message
      });
    });
};
