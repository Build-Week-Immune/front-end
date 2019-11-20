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
import AddFamilyMember from './components/Home/PatientDirection/AddFamilyMember';
import ShowFamilyMember from './components/Home/PatientDirection/ShowFamilyMember';
import DisplayFamilyImmu from './components/Home/PatientDirection/DisplayFamilyImmu';
import './App.css';

function App() {
  return (
    <main className="App">
      <Route exact path="/" component={SplashPage} />
      <Route path="/login"  component={PatientLogin} />
      <Route path="/med_login"  component={MedicalLogin} />
      <Route path="/register"  component={HomeRegister} />
      <Route path="/register/medical" component={MedicalRegisterForm} />
      <Route path="/register/patient" component={PatientRegisterForm} />
      <PrivateRoute path="/medical_home" component={MedicalHome} />
      <PrivateRoute path="/patient_home/:id" component={PatientHome} />
      <PrivateRoute path="/patient_home/:id/add_family" component={AddFamilyMember} />
      <PrivateRoute path="/patient_home/:id/show_family_member" component={ShowFamilyMember} />
      <PrivateRoute path="/patient_home/:id/display_family_immu" component={DisplayFamilyImmu} />
    </main>
  );
}

export default App;
