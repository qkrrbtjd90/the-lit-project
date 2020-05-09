import React, { Fragment } from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';

const Confirm = ({
  nextStep,
  prevStep,
  userData: { firstName, lastName, email, occupation, city, bio },
}) => {
  const continued = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Fragment>
      <List>
        <ListItem>
          <ListItemText primary='First Name' secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Last Name' secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Occupation' secondary={occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary='City' secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Bio' secondary={bio} />
        </ListItem>
      </List>

      <Button label='Continue' onClick={back}>
        Back
      </Button>

      <Button label='Confirm & Continue' onClick={continued}>
        Continue
      </Button>
    </Fragment>
  );
};

// button needs color
//button style margin: 15

export default Confirm;
