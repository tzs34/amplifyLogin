import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css'
import App from './components/App'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
)
