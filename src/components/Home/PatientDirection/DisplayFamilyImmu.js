// De facto home page for patient; contains a list of record and immu record

import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getFamily } from "../../../actions/Patients/getFamilyMemberInfo";
import PatientCard from "../../../components/Home/PatientDirection/Patients/PatientCard";

import { Link } from 'react-router-dom';
import PageNav from '../../Bars/PageNav';
import Footer from '../../Bars/Footer';
// import { Button, TextField, FormControlLabel, Checkbox, Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import { Button, Typography, Grid, makeStyles }  from '@material-ui/core';


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
  function AddFamilyMember(props) {
    const classes = useStyles();
  
    useEffect(() => {
      getFamily();
      console.log("Family data", props.getFamily);
    },[]);
    return (
    <div>
        <PageNav />
        <div className={classes.paper}>
            <Typography variant="h5">
              Family Members on Account.
            </Typography>

            {/* Testing Link to Edit Form*/}
            <Link to="/patient_home/:id/display_family_immu/edit">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Edit Family Member
                  </Button>
            </Link>


              <Grid container spacing={2}>
                  <Grid item xs={8} >
                    {props.isLoading && (
                      <div>
                        <h2>Loading Family...</h2>
                      </div>
                    )}

                    {props.FamilyMemberInfo &&
                      props.FamilyMemberInfo.map(family => (
                        <PatientCard
                          key={family.id}
                          name={family.name}
                          // age={family.age}
                          // height={family.height}
                          // id={family.id}
                        />
                      ))}


                    {/* <Paper className={classes.member}>
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
                    </Paper> */}
                  </Grid>
              </Grid>
        </div>
        <Footer />
    </div>
    );
}

const mapStateToProps = state => {
  return {
    FamilyMemberInfo: state.FamilyMemberInfo,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getFamily }
)(AddFamilyMember);