import React from 'react';
import ReactDOM from 'react-dom';

// Comment provider if things go wrong
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/index';

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';


import App from './App';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    // Comment out provider and router if things go wrong
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
