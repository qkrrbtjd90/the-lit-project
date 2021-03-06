import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(0.5),
    textDecoration: 'none', // gets rid of underline
    color: 'unset', // set color
  },
}));

const SignedInLinks = () => {
  const theme = useStyles();

  return (
    <Fragment>
      <NavLink to='/blog' className={theme.title}>
        blog
      </NavLink>
      <NavLink to='/practice' className={theme.title}>
        practice
      </NavLink>
      <NavLink to='/grade' className={theme.title}>
        grade
      </NavLink>
      <NavLink to='/classes' className={theme.title}>
        classes
      </NavLink>
      <NavLink to='/dashboard' className={theme.title}>
        dashboard
      </NavLink>
      <NavLink to='/signin' className={theme.title}>
        signin
      </NavLink>
    </Fragment>
  );
};

export default SignedInLinks;
