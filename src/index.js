import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';


  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );



