import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import todoReducer from './store/todoreducer';

const reducer = combineReducers({
  data: todoReducer,
})

const store = (window.devToolsExtension ? window.devToolsExtension () (createStore) : createStore) (reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/todo">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
