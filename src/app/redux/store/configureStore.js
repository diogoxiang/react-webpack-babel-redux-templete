import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk' // redux-thunk用来处理异步对store进行操作，eg: Ajax
import rootReducer from '../reducers'

let createStoreWithMiddleware

if (false) {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
  )(createStore)
} else {
  const { devTools, persistState } = require('redux-devtools');
  createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    devTools()
  )(createStore)
}

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
