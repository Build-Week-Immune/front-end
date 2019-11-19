import React from 'react';
import { Route } from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import PatientLogin from './components/Auth/PatientLogin'

import './App.css';

function App(props) {
  return (
    <main className="App">
        <Route path="/" exact {...props} component={HomePage} />
        <Route path="/login" {...props} component={PatientLogin} />
    </main>
  );
}

export default App;
