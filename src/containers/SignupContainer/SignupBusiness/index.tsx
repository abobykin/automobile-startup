import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import BackgroundImageOnLoad from 'background-image-on-load';
import SignupForm from './SignupForm';
import IconEngineWhite from '../svg-icons/IconEngineWhite';

const SignupBusiness: React.FC = () => {
  const [backLoaded, setBackLoaded] = useState(false);

  return (
    <div
      className={classNames('signup-container signup-business-container', {
        loaded: backLoaded,
      })}
    >
      <div className='column info-graphic-column'>
        <div className='centered-block'>
          <IconEngineWhite />
          <h2>Business</h2>
          <Link to='/signup' className='button button-white-transparent'>
            Change
          </Link>
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
        src={'/img/signup-business.jpg'}
        onLoadBg={() => setBackLoaded(true)}
        onError={(err) => console.log('error', err)}
      />
    </div>
  );
};

export default SignupBusiness;
