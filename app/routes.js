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

const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
    </Route>
  </Route>
)

export default routes
