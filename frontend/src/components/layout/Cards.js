import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import cardData from './cardData';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

// console.log(cardData);

const Cards = () => {
  const classes = useStyles();
  const cards = [1, 2, 3];

  return (
    <Fragment>
      {cardData.map(card => (
        <Grid item key={card.title} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image='https://source.unsplash.com/random'
              title='Image title'
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant='h5' component='h2'>
                {card.title}
              </Typography>
              <Typography>{card.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                More
              </Button>
              <Button size='small' color='primary'>
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Fragment>
  );
};

export default Cards;
