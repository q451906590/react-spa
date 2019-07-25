import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { render } from 'react-dom';

function domElementGetter() {
  return document.getElementById("home")
}

render(
  <App />,
  domElementGetter()
)