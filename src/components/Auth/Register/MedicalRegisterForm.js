// This page contains a form for new medical staff to register
// Once a medical staff registers, they are navigated to the login page

// Redirects to: '../Auth/Login.js'

import React from 'react';
import Navbar from '../../Bars/Navbar';
import Footer from '../../Bars/Footer';

import {Button, TextField, FormControlLabel, Checkbox, Grid, makeStyles} from '@material-ui/core';
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

export default function MedicalRegisterForm() {
    const classes = useStyles();
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
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <TextField
                      autoComplete="name"
                      name="username"
                      variant="outlined"
                      value={}
                      required
                      id="name"
                      label="Full Name"
                      autoFocus
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      name="workplace"
                      variant="outlined"
                      required
                      id="workplace"
                      label="Medical Institution"
                      autoFocus
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                  />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                      variant="outlined"
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
    MedRegister:(employeeInfo) => dispatchEvent(MedRegister(employeeInfo))
  }
}


export default connect(null, mapDispatchToProps)(MedicalRegisterForm)