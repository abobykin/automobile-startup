import React, { useEffect } from 'react';
import { Switch, Redirect } from 'react-router';

const Logout = ({ setAuthorized }) => {
  useEffect(() => {
    setAuthorized(false);
  });

  return (
    <Switch>
      <Redirect exact from='/logout' to='/login' />
    </Switch>
  );
};

export default Logout;
