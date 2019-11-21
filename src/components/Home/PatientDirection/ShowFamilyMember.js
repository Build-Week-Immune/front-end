// Patient will land here once they finish adding a family member
// Click add more family will navigate them back to last page
// Click added all will navigate to de facto homepage

import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../Bars/PageNav';
import Footer from '../../Bars/Footer';
import { Button, Grid, makeStyles, Typography, Paper } from '@material-ui/core';

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
    width: '80%', // Fix IE 11 issue.
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
  member: {
    margin: 10,
  }
}));

/*************************  Start of Patient Home Form *************************/
export default function AddFamilyMember() {
  const classes = useStyles();

  return (
    <div>
      <PageNav />
      <div className={classes.paper}>
        <Typography variant="h5">
          Family Members on Account.
            </Typography>
        <Link to="/patient_home/:id/add_family">
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Another Family Member
                    </Button>
        </Link>
        <Link to="/patient_home/:id/display_family_immu">
          <Button
            variant="contained"
            color="default"
            className={classes.submit}
          >
            I have added all family members
                    </Button>
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={8} >
            <Paper className={classes.member}>
              <Typography variant="h5">
                Scooby Doo
                      </Typography>
              <Typography variant="h5">
                I love food
                      </Typography>
            </Paper>
          </Grid>
          <Grid item xs={8} >
            <Paper className={classes.member}>
              <Typography variant="h5">
                Tom Cat
                      </Typography>
              <Typography variant="p">
                I love drumsticks
                      </Typography>
            </Paper>
          </Grid>
          <Grid item xs={8} >
            <Paper className={classes.member}>
              <Typography variant="h5">
                Jerry Mouse
                      </Typography>
              <Typography variant="p">
                I love cheese
                      </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
