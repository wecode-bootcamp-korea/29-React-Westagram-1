import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import './styles/common.scss';
import Nav from './components/Nav/Nav';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById('root')
);
