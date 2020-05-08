import React from 'react';
import { Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography align='center' variant='h6'>The Lit Project</Typography>
      <Typography
        align='center'
        color='textSecondary'
        component='p'
        variant='subtitle1'>
        Optimized Learning
      </Typography>
      <Typography align='center' color='textSecondary' variant='body2'>
        {'Copyright © '}
        <Link color='inherit' href='https://google.com'>
          website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Footer;
