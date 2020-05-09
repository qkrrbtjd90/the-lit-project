import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Signup = () => {
  const [userData, setuserData] = useState({
    fName: '',
    lName: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setuserData({ ...userData, [name]: value });
  };

  const handleSumbit = () => {
    console.log('hi');
  };

  const { fName, lName, email } = userData;

  return (
    <div>
      <h1>
        Hello {fName} {lName}
      </h1>
      <p>{email}</p>
      <TextField
        helperText='Enter Your First Name'
        label='First Name'
        name='fName'
        onChange={handleChange}
      />
      <br />
      <TextField
        helperText='Enter Your Last Name'
        label='Last Name'
        name='lName'
        onChange={handleChange}
      />
      <br />

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

      <TextField
        helperText='Confirm Your Password'
        label='Confirm'
        name='password2'
        onChange={handleChange}
      />
      <br />
      <Button onClick={handleSumbit}>Register</Button>
    </div>
  );
};

export default Signup;
