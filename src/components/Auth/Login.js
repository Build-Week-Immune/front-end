// This is the login page
// This page asks for the user's email address, password, and account type
// After the user enters the credentials, the user is navigated to PatientHomePage, or MedicalHomePage

// Redirects to: '../Home/MedicalHome.js' || '../Home/PatientHome.js'

import React, { Component } from 'react';
import axios from 'axios'
import PageNav from '../Bars/PageNav';
import Footer from '../Bars/Footer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export class LoginForm extends Component {
  
  state = {
    credentials: {
      username: '',
      password: ''
    },
    loggedIn: false
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
    axios
      .post(
        "http://localhost:3000/api/login",
        this.state.credentials
      )
      .then(response => {
        // console.log("response", response);
        const { data } = response;

        localStorage.setItem("token", data.payload);
        this.setState({ ...this.state, loggedIn: true });

      });
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ ...this.state, loggedIn: true });
    } else {
      this.setState({ ...this.state, loggedIn: false });
    }
  }

  render() {
    return (
      <div>
        <PageNav />
        <div>
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in to Immune
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password: "
            type="password"
            id="password"
          />
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Confirm Password: "
          type="password"
          id="password"
        />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
        <Footer />
      </div>
    )
  }
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
//     e.preventDefault();
//     axios
//       .post(
//         "http://localhost:5002/api/login",
//         this.state.credentials
//       )
//       .then(response => {
//         // console.log("response", response);
//         const { data } = response;

//         localStorage.setItem("token", data.payload);
//         this.setState({ ...this.state, loggedIn: true });

//       });
//   };

//   componentDidMount() {
//     if (localStorage.getItem("token")) {
//       this.setState({ ...this.state, loggedIn: true });
//     } else {
//       this.setState({ ...this.state, loggedIn: false });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <PageNav />
//         <Grid container >
//           <Paper style={{ width: '100%', margin: 100, padding: 10, boxShadow: '0 0 20px 5px blue' }}>
//             <form onSubmit={this.login}>
//               <Typography variant="h5" >
//                 {this.state.loggedIn ? "LOGGED IN!" : "Please login"}
//               </Typography>
//               <TextField
//                 id="outlined-basic"
//                 label="username"
//                 name="username"
//                 margin="normal"
//                 variant="outlined"
//                 value={this.state.username}
//                 onChange={this.handleChange}
//                 required
//               />
//               <TextField
//                 // type="password" 
//                 id="outlined-basic"
//                 label="password"
//                 name="password"
//                 margin="normal"
//                 variant="outlined"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//                 required
//               />
//               <Button type="submit" style={{ background: 'blue', color: 'white' }} >Submit</Button>
//             </form>
//           </Paper>
//         </Grid>
//         <Footer />
//       </div>
//     )
//   }
// }

// export default LoginForm;



          // <div>
          //   <Button>
          //     Open the select
          //   </Button>
          //   <FormControl>
          //     <<InputLabel id="demo-controlled-open-select-label">User Type</InputLabel>
          //     <Select
          //       labelId="demo-controlled-open-select-label"
          //       id="demo-controlled-open-select"
          //     >
          //       <MenuItem value="">
          //         <em>None</em>
          //       </MenuItem>
          //       <MenuItem value={""}>Medical</MenuItem>
          //       <MenuItem value={""}>Patient</MenuItem>
          //     </Select>
          //   </FormControl>
          // </div>
          