import React from 'react'
import config from '../aws-exports'
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react'
import Amplify from 'aws-amplify'
import HomePage from './Views/HomePage'
import { LoginForm } from './Auth'
import aws_exports from '../aws-exports'

Amplify.configure(aws_exports)

const AppWithAuth = props => <HomePage />

export default withAuthenticator(AppWithAuth, {
  signUpConfig: {
    hiddenDefaults: ['phone_number'],
    signUpFields: [
      { label: 'Name', key: 'name', required: true, type: 'string' }
    ],
    includeGreetings: true
  }
})
