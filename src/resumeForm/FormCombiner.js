import GeneralInfo from "./GeneralInfo"
import {Switch, Route, Redirect} from "react-router-dom"



import React, { Component } from 'react'
import { push } from "connected-react-router"


export default class FormCombiner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
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
        }
      }
      handleChange = (event) => {
        event.preventDefault();
        this.setState({...this.state, [event.target.name]: event.target.value})
      }
      submitHandler = (event) => {
        event.preventDefault()
        this.setState({...this.state, [event.target.name]: event.target.value})
        push('/forms/education')
      }
      render() {
        return (
          <div className="App">
            <h1>Simple Form Flow</h1>
    
            <Switch>
              {/* <Redirect from="/" exact to="/form/general" /> */}
              <Route path="/form/general" component={()=> <GeneralInfo handleChange={this.handleChange} props={this.props} submitHandler={this.submitHandler} />} />
              {/* <Route path="/form/education" component={Education} />
              <Route path="/form/work" component={WorkHistory} /> */}
            </Switch>
          </div>

      )};
}

