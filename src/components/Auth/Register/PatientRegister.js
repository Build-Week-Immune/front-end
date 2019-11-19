// This page contains a form for new patient to register
// Once a patient registers, they are navigated to the login page

// Redirects to: '../Auth/Login.js'

import React, { useState } from "react";
import { connect } from "react-redux";

//PATIENT REGISTER FUNCTION
const PatientRegister = props => {
//set state
    const [patientRegister, setPatientRegister] = useState({
        //DATA WE NEED FROM PATIENT TO REGISTER
        patientEmail: "",
        patientPassword: "",
        patientFullName: ""
    });

    const handleChange = e => {
        setPatientRegister({
            ...patientRegister,
            [e.target.name]: e.target.value
        });
    };

    const register = e => {
        e.preventDefault();
    }
}