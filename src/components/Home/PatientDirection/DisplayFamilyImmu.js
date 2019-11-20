// De facto home page for patient; contains a list of record and immu record

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
                
              <Grid container spacing={2}>
                  <Grid item xs={8} >
                    <Paper className={classes.member}>
                      <Typography variant="h5">
                        Scooby Doo
                      </Typography>
                      <Typography variant="h6">
                        Nothing to show
                      </Typography>
                      <Typography variant="p">
                        Your immunization records will be available after your medical office inputs your records into Immune, usually 1-2 business days.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={8} >
                    <Paper className={classes.member}>
                      <Typography variant="h5">
                        Tom Cat
                      </Typography>
                      <Typography variant="h6">
                        Nothing to show
                      </Typography>
                      <Typography variant="p">
                        Your immunization records will be available after your medical office inputs your records into Immune, usually 1-2 business days.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={8} >
                    <Paper className={classes.member}>
                      <Typography variant="h5">
                        Jerry Mouse
                      </Typography>
                      <Typography variant="h6">
                        Nothing to show
                      </Typography>
                      <Typography variant="p">
                        Your immunization records will be available after your medical office inputs your records into Immune, usually 1-2 business days.
                      </Typography>
                    </Paper>
                  </Grid>
              </Grid>
        </div>
        <Footer />
    </div>
    );
}
