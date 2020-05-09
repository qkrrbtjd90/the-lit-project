import React, { useState } from 'react';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDeta';
import Confirm from './Confirm';
import Success from './Success';

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
    setUserData({
      ...userData,
      step: userData.step + 1,
    });
  };

  const prevStep = () => {
    setUserData({
      ...userData,
      step: userData.step - 1,
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  switch (userData.step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          userData={userData}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          userData={userData}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          userData={userData}
        />
      );
    case 4:
      return <Success />;
    default:
      console.log('Sign up');
  }
};

export default UserForm;
