/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import emotionReset from 'emotion-reset';
import { colorCss } from 'notion-ui';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Global styles={[emotionReset, colorCss]} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
