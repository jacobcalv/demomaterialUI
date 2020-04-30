import * as actions from "../actions";

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/auth'

const initalState = {
  errorMessage: "",
  token: "",
  user: null,
  formData: {
    general:{
      firstName: "",
      lastName: "",
      email: ""  
  },
  education: {
      type: "",
      schoolName: "",
      yearIn: "",
      yearOut: "",
      certificateName: ""
  },
  work: {
      jobTitle: "",
      companyName: "",
      startYear: "",
      endYear: "",
      jobDescription: "",
  }
}
};

export const authReducer = (state = initalState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMessage: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case actions.REGISTER_REQUEST:
      return {
        ...state,
        errorMessage: ""
      };

    case actions.REGISTER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        formData: action.payload,
        errorMessage: action.payload
      };

    case actions.REGISTER_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };

    case action.LOGOUT_USER:
      return{
        ...state,
        user:action.payload
      };
    
    
    case actions.GET_USER_REQUEST:
      return {
        ...state,
        errorMessage: ""
      };

    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case actions.GET_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    
    default:
      return state;
  }
};
