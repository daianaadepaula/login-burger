import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Orders from './pages/Orders'
import GlobalStyle from './globalStyle';


ReactDOM.render(
  <>
    <Orders />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);