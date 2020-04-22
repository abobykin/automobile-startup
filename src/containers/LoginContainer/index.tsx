import React from 'react';
import { Route, Switch } from 'react-router';
import PageNotFound from '../../components/PageNotFound';
import LoginOptions from './LoginOptions';
import './style.css';

const LoginContainer = (props) => {
  return (
    <Switch>
      <Route exact path='/login' render={() => <LoginOptions {...props} />} />
      <Route exact path='/*' component={PageNotFound} />
    </Switch>
  );
};

export default LoginContainer;
