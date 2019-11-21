// Contains the footer for all elements
import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "#23677A",
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  text: {
      marginTop: 10,
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showlabels
      className={classes.root}
    >
    <BottomNavigationAction icon={<FavoriteIcon color="disabled" />} />
    <Typography variant="h6" className={classes.text}>
      <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Immune</Link>
    </Typography>
    </BottomNavigation>
  );
}