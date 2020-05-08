import React, { useState } from 'react';

import FormUserDetails from './FormUserDetails';

const UserForm = () => {
  const [userData, setUserData] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  const nextStep = () => {
    const { step } = userData;

    setUserData({
      step: step + 1,
    });
  };

  const prevStep = () => {
    const { step } = userData;

    setUserData({
      step: step - 1,
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(value, 'handlechage');
    // console.log(name, 'handlechage');

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const { step, firstName, lastName, email, occupation, city, bio } = userData;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return <h1>FormUserDetails</h1>;
    case 3:
      return <h1>Confrim</h1>;
    case 4:
      return <h1>Success</h1>;
  }

  return <div></div>;
};

export default UserForm;
