import React from 'react'
import { SignIn, SignUp } from 'aws-amplify-react'
import { LoginForm, SignUpForm } from '../Auth'
import HomePage from './HomePage'

const App = props => {
  console.log(props)
  return (
    <>
      <div>
        {props.authState === 'signIn' && (
          <LoginForm override={SignIn} {...props} />
        )}
      </div>
      <div>
        {props.authState === 'signUp' && (
          <SignUpForm override={SignUp} {...props} />
        )}
      </div>
      <div>{props.authState === 'signedIn' && <HomePage {...props} />}</div>
    </>
  )
}

export default App
