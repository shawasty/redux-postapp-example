import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers'

import './index.css';
import App from './App';

// const store = createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>

    <App />

    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

