/**
 *  Created by daiwenjuan on 17/9/21 下午5:26.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configure from './store/configureStore'
import myhistory from './history'

const store = configure({config: global.$GLOBALCONFIG})
const history = syncHistoryWithStore(myhistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)