import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';
import App from './App';
import { baseURL } from './config/appConfig';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const isProduction = process.env.NODE_ENV === 'production';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter basename={isProduction ? baseURL : '/'}>
          <App />
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  </React.StrictMode>
);
