// Contains the footer for all elements
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
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
      showLabels
      className={classes.root}
    >
    <BottomNavigationAction icon={<FavoriteIcon color="disabled" />} />
    <Typography variant="h6" className={classes.text}>
      <Link to="./" style={{textDecoration: 'none', color: 'white'}}>Immune</Link>
    </Typography>
    </BottomNavigation>
  );
}