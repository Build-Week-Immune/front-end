import React from 'react';
import { Route } from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import Login from './components/Auth/Login'

import './App.css';

function App(props) {
  return (
    <main className="App">
        <Route path="/" exact {...props} component={HomePage} />
        <Route path="/login" {...props} component={Login} />
    </main>
  );
}

export default App;
