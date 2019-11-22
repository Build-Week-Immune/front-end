import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles, Paper, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft: 60,
      marginTop: 30,
      border: 1,
      width: 500,
    },
  }));

export default function MedicalCard({medical}) {
    const classes = useStyles();
    
    const [message, setMessage] = useState('');

    const greeting = (e) => {
      setMessage('Greetings, visitors from ' + e.target.value);
    }
    
    return (
        <Paper className={classes.paper}>
            <Link to={`/medical_home/jonathan/${medical.id}`} key={medical.id}>
                <h3>Medical Provider: {medical.name}</h3>
            </Link>
            <p>This location is: {medical.type}</p>
            <p>What is your hometown?</p>
            <input type="text" onChange={greeting} />
            {message}
        </Paper>
    );
}