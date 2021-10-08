import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthenticationContextProvider } from './services/auth/authentication.context';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <AuthenticationContextProvider>
            <App />
         </AuthenticationContextProvider>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
);
