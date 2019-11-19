// This is the login page
// This page asks for the user's email address, password, and account type
// After the user enters the credentials, the user is navigated to PatientHomePage, or MedicalHomePage

// Redirects to: '../Home/MedicalHome.js' || '../Home/PatientHome.js'

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logInUser } from '../../actions/index';

import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';

export class LoginForm extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    logInUser(this.state.credentials);
  };



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
}

function mapDispatchToProps() {
  return {
    logInUser
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);

