import React from 'react';
import { Route } from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import PatientLogin from './components/Auth/PatientLogin'
import HomeRegister from './components/Auth/Register/HomeRegister'
import MedicalRegister from './components/Auth/Register/MedicalRegister'
import './App.css';

function App(props) {
  return (
    <main className="App">
        <Route path="/" exact {...props} component={HomePage} />
        <Route path="/login" exact {...props} component={PatientLogin} />
        <Route path="/register" exact {...props} component={HomeRegister} />
        <Route path="/register/medical" {...props} component={MedicalRegister} />
    </main>
  );
}

export default App;
