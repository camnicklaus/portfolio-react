import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
        {/* <AppTransTest /> */}
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
