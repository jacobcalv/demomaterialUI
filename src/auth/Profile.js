import React, {useEffect, useState} from 'react'

import { connect } from "react-redux";

import {getUser} from '../actions/auth'

function Profile(props) {
    const userToken = localStorage.getItem('token');
    console.log(userToken)
    const user = getUser(userToken)
    console.log(user)
    console.log(props)
    return (
        <div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      user: state.auth.user
    };
  }
  
  const mapDispatchToProps = {
    getUser
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
