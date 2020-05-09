import React, { Fragment } from 'react';
import { Button, Dialog, TextField } from '@material-ui/core';

const FormPersonalDetails = ({
  handleChange,
  nextStep,
  prevStep,
  userData,
}) => {
  const continued = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  //button style margin: 15

  return (
    <Fragment>
        <TextField
          helperText='Enter Personal Details'
          label='Enter Your Occupation'
          name='occupation'
          onChange={handleChange}
          defaultValue={userData.occupation}
        />
        <br />
        <TextField
          helperText='Enter Your City'
          label='City'
          name='city'
          onChange={handleChange}
          defaultValue={userData.city}
        />
        <br />
        <TextField
          helperText='Enter Your Bio'
          label='Bio'
          name='bio'
          onChange={handleChange}
          defaultValue={userData.bio}
        />
        <br />

        <Button label='Continue' onClick={back}>
          Back
        </Button>

        <Button label='Continue' onClick={continued}>
          Continue
        </Button>
    </Fragment>
  );
};

// button needs color

export default FormPersonalDetails;
