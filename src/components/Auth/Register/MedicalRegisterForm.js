// This page contains a form for new medical staff to register
// Once a medical staff registers, they are navigated to the login page

// Redirects to: '../Auth/Login.js'

import React, { useState } from 'react';
import { connect } from "react-redux";
import Navbar from '../../Bars/Navbar';
import Footer from '../../Bars/Footer';
import { MedRegister } from '../../../actions/Entry/MedRegister';
import { Button, TextField, FormControlLabel, Checkbox, Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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


function MedicalRegisterForm(props) {

  const classes = useStyles();

  const [medicalRegister, setMedicalRegister] = useState({
    //DATA WE NEED FROM MEDICAL PROFESSIONAL TO REGISTER
    password: "",
    username: "",
    role: "admin"
  });

  const handleChange = e => {
    setMedicalRegister({
      ...medicalRegister,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    console.log('medregister', medicalRegister);
    props.MedRegister(medicalRegister, props.history);
  }


  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          You are a medical professional.
            </Typography>
        <Typography component="h1" variant="h5">
          Let's create your account.
            </Typography>
        <form onSubmit={register} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                onChange={handleChange}
                value={medicalRegister.username}
                required
                id="name"
                label="username"
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12}>
                  <TextField
                      name="workplace"
                      variant="outlined"
                      
                      required
                      id="workplace"
                      label="Medical Institution"
                      autoFocus
                  />
                  </Grid> */}
            {/* <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                  />
                  </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={medicalRegister.password}
                onChange={handleChange}
                required
                name="password"
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
    MedRegister: (employeeInfo, history) => dispatch(MedRegister(employeeInfo, history))
  }
}



export default connect(null, mapDispatchToProps)(MedicalRegisterForm)