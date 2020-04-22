import React from 'react';
import IconEngine from './svg-icons/IconEngine';
import IconUser from '../../../components/common/forms/ContactUsForm/svg-icons/IconUser';
import './style.css';
import { Link } from 'react-router-dom';
import IconLinkArrow from '../../../components/svg-icons/IconLinkArrow';

const SignupOptions = () => {
  return (
    <div className='signup-options-screen'>
      <div className='customer-signup'>
        <h2>Customer </h2>
        <IconUser />
        <Link to='/signup-customer' className='button button-blue'>
          Sign up as a customer
        </Link>
        <span className='already-have-account-link'>
          Already have an account?
          <Link to='/login'>Login</Link>
        </span>
      </div>
      <div className='business-signup'>
        <Link className='button button-back' to='/'>
          <IconLinkArrow fillColor='white' />
          Back
        </Link>
        <h2>Business </h2>
        <IconEngine />
        <Link to='/signup-business' className='button button-white'>
          Sign up as business
        </Link>
        <span className='already-have-account-link'>
          Already have an account?
          <Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignupOptions;
