import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT}
      authorizationParams={{redirect_uri: process.env.REACT_APP_REDIRECTURI}}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
