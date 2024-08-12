import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './New-App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// redux section
import { Provider } from 'react-redux';
import store from './store'; // Import your store
// end redux section

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Register the service worker for PWA functionality
serviceWorkerRegistration.register();
