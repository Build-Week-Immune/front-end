import React from 'react';
import { Route } from "react-router-dom";

import PrivateRoute from './utils/PrivateRoute';

import SplashPage from './components/SplashPage/SplashPage';
import PatientLogin from './components/Auth/Register/PatientLogin';
import MedicalLogin from './components/Auth/Register/MedLogin'
import HomeRegister from './components/Auth/Register/HomeRegister';
import MedicalRegisterForm from './components/Auth/Register/MedicalRegisterForm';
import PatientRegisterForm from './components/Auth/Register/PatientRegisterForm';
import MedicalHome from './components/Home/MedicalHome';
import PatientHome from './components/Home/PatientHome';


import './App.css';

function App() {
  return (
    <main className="App">
      <Route path="/" exact component={SplashPage} />
      <Route path="/login" exact component={PatientLogin} />
      <Route path="/med_login" exact component={MedicalLogin} />
      <Route path="/register" exact component={HomeRegister} />
      <Route path="/register/medical" component={MedicalRegisterForm} />
      <Route path="/register/patient" component={PatientRegisterForm} />
      <PrivateRoute path="/medical_home" component={MedicalHome} />
      <PrivateRoute path="/patient_home" component={PatientHome} />
    </main>
  );
}

export default App;
