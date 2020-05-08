import React, { Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';

const FormUserDetails = ({ handleChange, nextStep, values }) => {
  const continued = e => {
    e.preventDefault();
    nextStep();
  };

  //button style margin: 15

  console.log(values);

  return (
    <Fragment>
      <TextField
        helperText='Enter Your First Name'
        label='First Name'
        name='firstName'
        onChange={handleChange}
        defaultValue={values.firstName}
      />
      <br />
      <TextField
        helperText='Enter Your Last Name'
        label='Last Name'
        name='lastName'
        onChange={handleChange}
        defaultValue={values.lastName}
      />
      <br />
      <TextField
        helperText='Enter Your Email'
        label='Email'
        name='email'
        onChange={handleChange}
        defaultValue={values.email}
      />
      <br />
      <Button label='Continue' onClick={continued}>
        Continue
      </Button>
    </Fragment>
  );
};

export default FormUserDetails;
