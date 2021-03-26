import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Next from './next'


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <Next />,
  document.getElementById('addtodo')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

