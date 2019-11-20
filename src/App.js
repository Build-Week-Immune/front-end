import React from 'react';
import { Route } from "react-router-dom";

import PrivateRoute from './utils/PrivateRoute';

import SplashPage from './components/SplashPage/SplashPage';
import MedicalList from './components/Home/MedicalDirectionJonathan/MedicalList';
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
      <Route path="/" exact component={SplashPage} />
      <Route path="/login" exact component={PatientLogin} />
      <Route path="/med_login" exact component={MedicalLogin} />
      <Route path="/register" exact component={HomeRegister} />
      <Route path="/register/medical" component={MedicalRegisterForm} />
      <Route path="/register/patient" component={PatientRegisterForm} />

      {/* The next line is Jonathan's path*/}
      <PrivateRoute path="/medical_home" exact component={MedicalHome} />

      <Route path="/medical_home/jonathan" component={MedicalList} />
      <PrivateRoute path="/patient_home/:id" exact component={PatientHome} />
      <PrivateRoute path="/patient_home/:id/add_family" component={AddFamilyMember} />
      <PrivateRoute path="/patient_home/:id/show_family_member" component={ShowFamilyMember} />
      <PrivateRoute path="/patient_home/:id/display_family_immu" component={DisplayFamilyImmu} />
    </main>
  );
}

export default App;
