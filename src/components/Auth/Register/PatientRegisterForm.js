// This page contains a form for new patient to register
// Once a patient registers, they are navigated to the login page

// Redirects to: '../Auth/Login.js'

import React, { useState } from "react";
import { connect } from "react-redux";

import Navbar from '../../Bars/Navbar';
import Footer from '../../Bars/Footer';

import { patientSignUpRequest } from "../../../actions/Entry/PatientRegister";

import { Button, TextField, FormControlLabel, Checkbox, Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

/*************************  Start of Patient Registration Form *************************/
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function PatientRegisterForm(props) {
  const classes = useStyles();

  const [patientRegister, setPatientRegister] = useState({
    //DATA WE NEED FROM PATIENT TO REGISTER
    password: "",
    username: "",
    role: "user"
  });

  const handleChange = e => {
    setPatientRegister({
      ...patientRegister,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    console.log('patientregister', patientRegister);
    props.patientSignUpRequest(patientRegister, props.history);
  }

  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          You are a patient.
            </Typography>
        <Typography component="h1" variant="h5">
          Let's create your account.
            </Typography>
        <form onSubmit={register} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="username"
                variant="outlined"
                onChange={handleChange}
                value={patientRegister.username}
                required
                id="name"
                label="username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                name="password"
                onChange={handleChange}
                value={patientRegister.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                required
                control={<Checkbox value="agreeToTerms" color="primary" />}
                label="I agree to Terms and Conditions of Immune"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Complete Account Creation
              </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    patientSignUpRequest: (patientInfo, history) => dispatch(patientSignUpRequest(patientInfo, history))
  }
}


export default connect(null, mapDispatchToProps)(PatientRegisterForm);

/************************* End of Patient Registration Form *************************/