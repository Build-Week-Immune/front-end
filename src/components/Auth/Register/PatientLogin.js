import React, { useState } from 'react';
import { Button, TextField, makeStyles, Grid, Typography } from '@material-ui/core';

import { authUsersLogin } from "../../../actions/Entry/LoginAction";
import { connect } from "react-redux";
import Navbar from '../../Bars/Navbar';
import LoginBar from "../../Bars/LoginBar";
import Footer from '../../Bars/Footer';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const PatientLogin = (props) => {
  const classes = useStyles();

  const [patientLogin, setPatientLogin] = useState({
    password: "",
    username: "",
    role: "user"
  });

  const handleChange = e => {
    setPatientLogin({
      ...patientLogin,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    console.log("login component", patientLogin);
    props.authUsersLogin(patientLogin, props.history);

  }

  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <LoginBar />
        <form onSubmit={login} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="username"
                variant="outlined"
                onChange={handleChange}
                value={patientLogin.username}
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
                value={patientLogin.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
              </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    authUsersLogin: (patientLogin, history) => dispatch(authUsersLogin(patientLogin, history))
  }
}

export default connect(null, mapDispatchToProps)(PatientLogin)