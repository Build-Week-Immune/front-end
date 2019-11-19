import React, {useState} from 'react'
import { authUsersLogin } from "../../actions/index";
import { connect } from "react-redux";
import Navbar from '../Bars/Navbar';
import Footer from '../Bars/Footer';

import { Paper, Grid, TextField, Button } from '@material-ui/core';


const PatientLogin = (props) => {

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
            <Paper style={{ width: '100%', margin: 100, padding: 10, boxShadow: '0 0 20px 5px blue' }}>
              <form onSubmit={login}>
                
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
                <Button type="submit" style={{ background: 'blue', color: 'white' }} >Submit</Button>
              </form>
            </Paper>
          </Grid> 
          <Footer />
        </div>
    )
};



const mapDispatchToProps = (dispatch) => {
    return {
        authUsersLogin: (patientLogin, history) => dispatch(authUsersLogin(patientLogin, history))
    }
}

export default connect(null, mapDispatchToProps)(PatientLogin)