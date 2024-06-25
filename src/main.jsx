import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
// import { applyMiddleware } from 'redux'
import './index.css'
import {createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import allReducers from './reducers/index.jsx'
// import {thunkMiddleware } from './pages/actions/index.jsx'
const store =createStore(allReducers, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
)
