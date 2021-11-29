import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import PRODUCTS from './data.json';
import Search from './Search/search';
//import App from './App';

ReactDOM.render(
  <Search products={PRODUCTS}/>,
  document.getElementById('root')
);
