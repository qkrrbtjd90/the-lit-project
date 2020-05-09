import React, { useState, Fragment } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';

const Signup = () => {
  const auth = false; // change auth to render signup/signin
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setuserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSumbit = () => {
    console.log('hi');
  };

  const { name } = userData;

  return (
    <Paper>
      {auth && (
        <Fragment>
          <h1>Hello {name}</h1>
          <TextField
            helperText='Enter Your Name'
            label='Name'
            name='name'
            onChange={handleChange}
          />
        </Fragment>
      )}

      <TextField
        helperText='Enter Your Email'
        label='Email'
        name='email'
        onChange={handleChange}
      />
      <br />

      <TextField
        helperText='Enter Your Password'
        label='Password'
        name='password1'
        onChange={handleChange}
      />
      <br />

      {auth && (
        <TextField
          helperText='Confirm Your Password'
          label='Confirm'
          name='password2'
          onChange={handleChange}
        />
      )}

      <Button onClick={handleSumbit}>{auth ? 'Login' : 'Register'}</Button>
    </Paper>
  );
};

export default Signup;
