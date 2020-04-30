import GeneralInfo from "./GeneralInfo"
import {Switch, Route, Redirect} from "react-router-dom"



import React, { Component } from 'react'
import { push } from "connected-react-router"


export const FormCombiner = () => {
   
    const handleChange = (event) => {
        event.preventDefault();
        this.setState({...this.state, [event.target.name]: event.target.value})
    }
    const submitHandler = (event) => {
        event.preventDefault()
        this.setState({...this.state, [event.target.name]: event.target.value})
        push('/forms/education')
    }
    return (
      <div className="App">
        <h1>Simple Form Flow</h1>

        <Switch>
          {/* <Redirect from="/" exact to="/form/general" /> */}
          <Route path="/general" component={()=> <GeneralInfo handleChange={this.handleChange} props={this.props} submitHandler={this.submitHandler} />} />
          {/* <Route path="/form/education" component={Education} />
          <Route path="/form/work" component={WorkHistory} /> */}
        </Switch>
      </div>
    )
  
}

