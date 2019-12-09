import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

PrivateRoute.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
  component: PropTypes.func.isRequired
}

export default PrivateRoute
