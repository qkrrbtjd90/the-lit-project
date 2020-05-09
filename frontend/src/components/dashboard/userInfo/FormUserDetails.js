import React, { Fragment } from 'react';
import { Button, TextField } from '@material-ui/core';

const FormUserDetails = ({ handleChange, nextStep, userData }) => {
  const continued = e => {
    e.preventDefault();
    nextStep();
  };

  //button style margin: 15

  // console.log(userData);

  return (
      <Fragment>
        <TextField
          helperText='Enter Your First Name'
          label='First Name'
          name='firstName'
          onChange={handleChange}
          defaultValue={userData.firstName}
        />
        <br />
        <TextField
          helperText='Enter Your Last Name'
          label='Last Name'
          name='lastName'
          onChange={handleChange}
          defaultValue={userData.lastName}
        />
        <br />
        <TextField
          helperText='Enter Your Email'
          label='Email'
          name='email'
          onChange={handleChange}
          defaultValue={userData.email}
        />
        <br />

        <Button label='Continue' onClick={continued}>
          Continue
        </Button>
      </Fragment>
  );
};

export default FormUserDetails;
