import React, {useState} from 'react'
import { authUsersLogin } from "../../actions/index";
import { connect } from "react-redux";
import Navbar from '../Bars/Navbar';
import Footer from '../Bars/Footer';

import { Paper, Grid, TextField, Button } from '@material-ui/core';

const PatientLogin = (props) => {

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
          <Grid container >
            <Paper style={{ width: '100%', margin: 100, padding: 10, boxShadow: '0 0 20px 5px blue' }}>
              <form onSubmit={login}>
                
                <TextField
                  id="outlined-basic"
                  label="username"
                  name="username"
                  margin="normal"
                  variant="outlined"
                  value={props.patientName}
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
                  value={props.patientPassword}
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



const mapDispatchToProps = () => {
    return {
        authUsersLogin
    }
}

export default connect(null, mapDispatchToProps)(PatientLogin)