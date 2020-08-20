import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from "./theme"
import {ThemeProvider} from "@material-ui/core"
import {CookiesProvider} from 'react-cookie'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import rootReducer from "./reducers/"

const axios = require('axios')

axios.interceptors.request.use(req=>{
  console.log(`${req.method} ${req.url}`)
  return req
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
