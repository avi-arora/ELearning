import {Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react'

const fakeAuth = false;

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth === true ? 
        <Component {...props} /> :
        <Redirect to="/login" />
    )} />
);

export default PrivateRoute;