import React from 'react'
import HomePage from './Views/HomePage'
import { LoginForm, SignUpForm } from './Auth'
import PrivateRoute from './Routes/PrivateRoute'
import { Route, Switch } from 'react-router-dom'
import Amplify from 'aws-amplify'
import aws_exports from '../aws-exports'

import '../App.css'
Amplify.configure(aws_exports)

const AppWithAuth = props => (
  <div>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <PrivateRoute path="/" component={HomePage} />
    </Switch>
  </div>
)

export default AppWithAuth
