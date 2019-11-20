// Home page for patient
// Nav bar of this page includes a text 'Immune' at top left, and sandwich icon at top right, which includes a log out button
// When logging out, user is redirected to home page

// Contains a patient card, which contains summary for the patient; can be edited
// Contains a see family button, which brings up a family list of family members; can select and turn into patient card; can edit
// Under the patient card will be a immunization record search query and that patient's immunization list
import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../Bars/PageNav';
import Footer from '../Bars/Footer';
import { Button, makeStyles, Typography, Paper } from '@material-ui/core';

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
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

/*************************  Start of Patient Home Form *************************/
export default function PatientHomePage() {
    const classes = useStyles();

    return (
    <div>
        <PageNav />
        <Paper className={classes.paper}>
            <Typography variant="h4">
                Family Members on Account
            </Typography>
            <Typography variant="p">
                Get started by adding yourself and family members to your Immune account.
            </Typography>
            <Link to="/patient_home/:id/add_family">
                <Button variant="contained" color="primary" className={classes.submit}>
                    Add Family Member
                </Button>
            </Link>
        </Paper>
        <Footer />
    </div>
    );
}
