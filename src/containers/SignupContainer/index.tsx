import React from 'react';
import { Route, Switch } from 'react-router';
import SignupOptions from './SignupOptions';
import SignupCustomer from './SignupCustomer';
import SignupBusiness from './SignupBusiness';
import PageNotFound from '../../components/PageNotFound';
import './style.css';

const SignupContainer: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/signup' component={SignupOptions} />
      <Route path='/signup-customer' component={SignupCustomer} />
      <Route path='/signup-business' component={SignupBusiness} />
      <Route exact path='/*' component={PageNotFound} />
    </Switch>
  );
};

export default SignupContainer;
