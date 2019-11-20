// This is a patient's first page after they sign in
// It contains a form as well

import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../Bars/PageNav';
import Footer from '../../Bars/Footer';
import { Button, TextField, FormControlLabel, Checkbox, Grid, makeStyles, Typography, Paper } from '@material-ui/core';

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
      margin: theme.spacing(3, 0, 2),
    },
  }));

/*************************  Start of Patient Home Form *************************/
export default function AddFamilyMember() {
    const classes = useStyles();

    return (
    <div>
        <PageNav />
        <div className={classes.paper}>
            <Typography variant="h5">
              Please add your family members.
            </Typography>
            <Typography variant="h5">
              Start by adding yourself!
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Full Name"
                    fullWidth
                    autoComplete="fname"
                  />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email Address"
                      fullWidth
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={10}>
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
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      required
                      id="doctor"
                      name="doctor"
                      label="Your Health Provider (Code)"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Paper>
                      <Typography variant="h5">
                      Immunization Consent
                      </Typography>
                      <Typography>
                        I consent to having my immunization redords added to Immune and updated by medical staff as appropriate.
                      </Typography>
                      <Typography>
                        As a patient, I can delete my Immune account at any time and the records will be removed from the Immune database.
                      </Typography>
                      <Typography>
                        By signing this consent, I am signing for any family members in my account under the age of eighteen.
                      </Typography>
                      <FormControlLabel
                          required
                          control={<Checkbox value="agreeToTerms" color="primary" />}
                          label="I agree to Terms and Conditions of Immune"
                      />
                    </Paper>
                  </Grid>
              </Grid>
              {/* <Link to="/patient_home/:id/show_family_member"> */}
                <Button
                type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Add Family Member
                </Button>
              {/* </Link> */}
              <Link to="/patient_home/:id">
                <Button
                    variant="contained"
                    color="default"
                    className={classes.submit}
                >
                    Go Back
                </Button>
              </Link>
            </form>
        </div>
        <Footer />
    </div>
    );
}
