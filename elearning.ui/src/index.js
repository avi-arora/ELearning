import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';   
import './css/bootstrap4.5.0/css/bootstrap.min.css';
import './css/fonts/googlefontfamily.css';
import './css/landingpage.css';
import './css/login-reg.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
