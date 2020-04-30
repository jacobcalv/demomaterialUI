import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './auth/Login'
import Signup from './auth/Signup'
import PrivateRoute from './utils/PrivateRoute'
import Profile from './auth/Profile'
import Step1 from './auth/Step1'
import FormCombiner from "./resumeForm/FormCombiner"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path='/signup' component={Signup}/>
        <PrivateRoute path='/profile' component={Profile}/>
        <Route path='/step1' component={Step1}/>
        <FormCombiner/>
      </Switch>
    </div>
  );
}

export default App;
