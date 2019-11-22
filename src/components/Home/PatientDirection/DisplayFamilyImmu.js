// De facto home page for patient; contains a list of record and immu record

import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getFamily } from "../../../actions/Patients/getFamilyMemberInfo";
import { deleteFamily } from '../../../actions/Patients/DeleteFamMember';
// import PatientCard from "../../../components/Home/PatientDirection/Patients/PatientCard";

import { Link } from 'react-router-dom';
import PageNav from '../../Bars/PageNav';
import Footer from '../../Bars/Footer';
// import { Button, TextField, FormControlLabel, Checkbox, Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import { Typography, Grid, makeStyles, Button, Card }  from '@material-ui/core';


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
      props.dispatch(getFamily());
      
    },[]);
    return (
    <div>
        <PageNav />

       
            {props.isLoading && <div>spinner</div>}
            {props.error && <div>{props.error.message}</div>}
            <Grid container spacing={1}>
            
                {props.familyMemberInfo.map(fam => (
                  
                    <Grid item key={fam.id} xs={6} sm={3} md={2}>
                        <Card  className={classes.card}>

                            <Typography variant="h4">
                                {fam.name}
                            </Typography>
                           <Link to={`/patient_home/${fam.id}/display_family_immu/edit`} ><Button >edit</Button></Link>
                           <Button key={fam.id} onClick={() => (props.dispatch(deleteFamily(fam.id)))} >delete</Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>

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
                  {/* </Grid> */}
              {/* </Grid> */}
        {/* </div> */}
        <Footer />
    </div>
    );
}

// const mapStateToProps = state => {
//   return {
//     familyMemberInfo: state.familyMemberInfo,
//     isLoading: state.isLoading,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getFamily }
// )(AddFamilyMember);
export default connect(state => {
  return state;
})(AddFamilyMember);