import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from './Routers.jsx';
import Connect from './Connect.jsx';
import Counter from './Counter.jsx';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers/>
    <Connect/>
    <Counter/>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
