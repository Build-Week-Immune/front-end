import React, { useState } from "react";
import { connect } from "react-redux";

import Navbar from '../../Bars/Navbar';
import Footer from '../../Bars/Footer';

import { authMedLogin } from "../../../actions/Entry/MedLoginAction";

import { Button, TextField, Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

/*************************  Start of Medical Login Form *************************/
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

function MedicalLogin(props) {
  const classes = useStyles();

  const [medLogin, setMedLogin] = useState({
    //DATA WE NEED FROM Medical TO LOGIN
    password: "",
    username: "",
    role: "admin"
  });

  const handleChange = e => {
    setMedLogin({
      ...medLogin,
      [e.target.name]: e.target.value
    });
  };

  const doctorLogin = e => {
    e.preventDefault();
    console.log('patientregister', medLogin);
    props.authMedLogin(medLogin, props.history);
  }

  return (
    <div>
      <Navbar />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
            </Typography>
        <form onSubmit={doctorLogin} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="username"
                variant="outlined"
                onChange={handleChange}
                value={medLogin.username}
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
                value={medLogin.password}
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
    authMedLogin: (medLogin, history) => dispatch(authMedLogin(medLogin, history))
  }
}


export default connect(null, mapDispatchToProps)(MedicalLogin);