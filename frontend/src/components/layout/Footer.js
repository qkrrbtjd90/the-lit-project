import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          The Lit Project
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'>
          Studying Optimized
        </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://material-ui.com/'>
            The Lit Project
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    </Fragment>
  );
};

export default Footer;
