import React, {useState} from 'react';
import {Button, TextField, makeStyles, Grid, Paper} from '@material-ui/core';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { authUsersLogin } from "../../../actions/Entry/LoginAction";
import { connect } from "react-redux";
import Navbar from '../../Bars/Navbar';
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
          <Grid container >
            <Paper className={classes.paper}>
              <form onSubmit={login} className={classes.form}>
                
                <TextField
                  id="outlined-basic"
                  label="username"
                  name="username"
                  margin="normal"
                  variant="outlined"
                  value={patientLogin.username}
                  onChange={handleChange}
                  required
                />
                <TextField
                  // type="password" 
                  id="outlined-basic"
                  label="password"
                  name="password"
                  margin="normal"
                  variant="outlined"
                  value={patientLogin.password}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" className={classes.submit}>Submit</Button>
              </form>
            </Paper>
          </Grid> 
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