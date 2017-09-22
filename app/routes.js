/**
 *  Created by daiwenjuan on 17/9/21 下午5:29.
 */
import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'
import App from './containers/App'

import Welcome from './pages/welcome'

function isLogin (nextState, replaceState) {
  const token = sessionStorage.getItem('token')
  if (!token) {
    replaceState('/login')
  }
}
const Login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/App/login').default)
  }, 'login')
}

const routes = (
  <Route>
    <Route path="/" component={App} onEnter={isLogin}>
      <IndexRoute component={Welcome}/>
    </Route>
    <Route path='/login' getComponent={Login}/>
  </Route>
)

export default routes
