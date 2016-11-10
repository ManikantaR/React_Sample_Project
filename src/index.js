/* Module Dependencies */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Routes } from './routes';
import configureStore from './stores';


/* Stylesheets */
import '../css/bootstrap.css';
import '../css/custom.css';

/* Store Configuration */
const store = configureStore();

/* Main Render Function */
render(
  <Provider store={store}>
    <Routes />
  </Provider>
  ,document.getElementById('app')
);
