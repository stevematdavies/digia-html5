import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './config/store';

const app = <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));
