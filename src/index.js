import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { CartProvider } from './components/cart/CartProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
