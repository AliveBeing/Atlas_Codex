import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-u87x6xla4fs43la0.us.auth0.com"
    clientId="v816KZL5yP2FfuDCbK4quCIY3oSYqDUi"
    authorizationParams={{
      redirect_uri: window.location.origin
  }}
    >
    <App />
    </Auth0Provider>,
 
);


