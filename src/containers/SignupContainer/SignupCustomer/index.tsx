import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import BackgroundImageOnLoad from 'background-image-on-load';
import IconUserWhite from '../svg-icons/IconUserWhite';
import SignupForm from './SignupForm';

const SignupCustomer: React.FC = () => {
  const [backLoaded, setBackLoaded] = useState(false);

  return (
    <div
      className={classNames('signup-container signup-customer-container', {
        loaded: backLoaded,
      })}
    >
      <div className='column info-graphic-column'>
        <div className='centered-block'>
          <IconUserWhite />
          <h2>Customer</h2>
          <a href='/signup' className='button button-white-transparent'>
            Change
          </a>
        </div>
        <span className='already-have-account-link'>
          Already have an account?
          <Link to='/login'>Login</Link>
        </span>
      </div>
      <div className='column form-column'>
        <SignupForm />
      </div>

      <BackgroundImageOnLoad
        src={'/img/signup-customer.jpg'}
        onLoadBg={() => setBackLoaded(true)}
        onError={(err) => console.log('error', err)}
      />
    </div>
  );
};

export default SignupCustomer;
