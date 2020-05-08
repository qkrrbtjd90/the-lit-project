import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Passage from './Passage';
import Question from './Question';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3), // error is a bug
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
    },
  },
  '@global': {
    'html, body, #root': {
      height: '100%',
    },
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100% - 56px - 48px)',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      height: '50%',
    },
  },
}));

const Template = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.item} item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Passage />
        </Paper>
      </Grid>
      <Grid className={classes.item} item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Question />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Template;
