import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './auth/Login'
import Signup from './auth/Signup'
import PrivateRoute from './utils/PrivateRoute'
import Profile from './auth/Profile'
import Step1 from './auth/Step1'
import {FormCombiner} from "./resumeForm/FormCombiner"
import {connect} from "react-redux"
import GeneralInfo from "./resumeForm/GeneralInfo"

function App() {
  const [setFormData, formData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    education: {
      type: "",
      schoolName: "",
      yearIn: "",
      yearOut: "",
      certificateName: "",
    },
    work: {
      jobTitle: "",
      companyName: "",
      startYear: "",
      endYear: "",
      jobDescription: "",
    }
  })
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path='/signup' component={Signup}/>
        <PrivateRoute path='/profile' component={Profile}/>
        <Route path='/step1' component={Step1}/>
        <Route path='/general' component={GeneralInfo}/>
        <Route path='/form' component={FormCombiner}/>
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    formData: state.formData
  };
}

export default connect(
  mapStateToProps,
)(App);
