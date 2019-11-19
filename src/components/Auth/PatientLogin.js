import React, {useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, Typography, makeStyles, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { authUsersLogin } from "../../actions/index";
import { connect } from "react-redux";
import Navbar from '../Bars/Navbar';
import Footer from '../Bars/Footer';

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

function PatientLogin(props) {
    const classes = useStyles();

    const [patientLogin, setPatientLogin] = useState({
        patientName: "",
        patientPassword: ""
    });

    const handleChange = e => {
        setPatientLogin({
            ...patientLogin,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        console.log("login component", patientLogin);
        e.preventDefault();
        props.authUsersLogin(patientLogin, props);
        console.log("Post action-creator trigger", patientLogin)
    }

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
}


const mapDispatchToProps = () => {
    return {
        authUsersLogin
    }
}

export default connect(null, mapDispatchToProps)(PatientLogin)