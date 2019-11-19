// Contains the nav bar for front page
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        textAlign: 'left'
      },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <Link to="./" style={{textDecoration: 'none', color: 'white'}}>Immune</Link>
              </Typography>
              <Link to="./login">
                <Button color="inherit" style={{textDecoration: 'none', color: 'white'}}>Login</Button>
              </Link>
              <Button color="inherit">Create Account</Button>
            </Toolbar>
          </AppBar>
        </div>
    );
}
