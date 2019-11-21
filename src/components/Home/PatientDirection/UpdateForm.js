// This is a form that's going to update everything

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../Bars/PageNav';
import Footer from '../../Bars/Footer';
import { Button, TextField, Grid, makeStyles, Typography } from '@material-ui/core';

/*************************  Start of Patient Home Styles *************************/
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
    alignItems: 'flex-start',
    margin: 20,
    border: 1,

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 10, 2),
  },
}));

/*************************  Start of Patient Home Form *************************/
function EditFamilyMember({ member }) {
  const classes = useStyles();
  const [addFam, setAddFam] = useState({
    name: "",
    parent_name: "",
    contact: "",
    gender: "",
    DOB: "05/11/1997",
    immunization_id: 1,
    provider_id: 1
  })
  const handleChange = e => {
    setAddFam({
      ...addFam,
      [e.target.name]: e.target.value
    });
  };



  return (
    <div>
      <PageNav />
      <div className={classes.paper}>
        <Typography variant="h5">
          Please edit your information.
        </Typography>
        <form type="submit" className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                required
                id="name"
                name="name"
                label="Full Name"
                value={addFam.name}
                onChange={handleChange}
                fullWidth
                defaultValue="PatientName"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="parent_name"
                name="parent_name"
                label="Parent Name"
                value={addFam.parent_name}
                onChange={handleChange}
                fullWidth
                defaultValue="ParentName"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="contact"
                name="contact"
                label="Email Address"
                value={addFam.contact}
                onChange={handleChange}
                fullWidth
                defaultValue="PatientEmail"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                required
                id="gender"
                name="gender"
                label="Gender: M or F"
                value={addFam.gender}
                onChange={handleChange}
                fullWidth
                defaultValue="M"
              />
            </Grid>

            {/*<Grid item xs={10}>
              <TextField
                id="date"
                label="Date of Birth"
                type="date"
                defaultValue="1999-12-31"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>*/}

          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save Changes
            </Button>


          <Button
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Delete Family Member
            </Button>

        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditFamilyMember;