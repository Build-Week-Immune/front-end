import React from 'react';
import { Route } from "react-router-dom";

import SplashPage from './components/SplashPage/SplashPage';
import PatientLogin from './components/Auth/PatientLogin';
import HomeRegister from './components/Auth/Register/HomeRegister';
import MedicalRegisterForm from './components/Auth/Register/MedicalRegisterForm';
import PatientRegisterForm from './components/Auth/Register/PatientRegisterForm';


import './App.css';

function App(props) {
  return (
    <main className="App">
        <Route path="/" exact component={SplashPage} />
        <Route path="/login" exact component={PatientLogin} />
        <Route path="/register" exact component={HomeRegister} />
        <Route path="/register/medical" component={MedicalRegisterForm} />
        <Route path="/register/patient" component={PatientRegisterForm} />
    </main>
  );
}

export default App;
