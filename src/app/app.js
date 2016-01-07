import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import { createHistory, useBasename } from 'history'
import configureStore from './redux/store/configureStore'
import index from './pages/index'

const store = configureStore()

const history = useBasename(createHistory)({
  basename: '/'
})

const createDevToolsWindow = require('./redux/createDevToolsWindow')
createDevToolsWindow(store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={index}></Route>
    </Router>
  </Provider>
), document.getElementById('root'))
