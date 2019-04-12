import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import MainPage from './components/MainPage'
import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <MainPage/>
  </Provider>,
  document.getElementById("app"))
