// This is the login page
// This page asks for the user's email address, password, and account type
// After the user enters the credentials, the user is navigated to PatientHomePage, or MedicalHomePage

// Redirects to: '../Home/MedicalHome.js' || '../Home/PatientHome.js'

import React, { Component } from 'react';
import { authUsersLogin } from "../../actions/index";
import { connect } from "react-redux";
import axios from 'axios'

import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';



  render() {
    return (
      <div>
        <Grid container >
          <Paper style={{ width: '100%', margin: 100, padding: 10, boxShadow: '0 0 20px 5px blue' }}>
            <form onSubmit={this.login}>
              <Typography variant="h5" >
                {this.state.loggedIn ? "LOGGED IN!" : "Please login"}
              </Typography>
              <TextField
                id="outlined-basic"
                label="username"
                name="username"
                margin="normal"
                variant="outlined"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
              <TextField
                // type="password" 
                id="outlined-basic"
                label="password"
                name="password"
                margin="normal"
                variant="outlined"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <Button type="submit" style={{ background: 'blue', color: 'white' }} >Submit</Button>
            </form>
          </Paper>
        </Grid>
      </div>
    )
  }


export default LoginForm;








// export class LoginForm extends Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     },
//     loggedIn: false
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     console.log(this.state.credentials)
//     e.preventDefault();
//     authUsersLogin();

      
//   };

//   componentDidMount() {
//     if (localStorage.getItem("token")) {
//       this.setState({ ...this.state, loggedIn: true });
//     } else {
//       this.setState({ ...this.state, loggedIn: false });
//     }
//   }