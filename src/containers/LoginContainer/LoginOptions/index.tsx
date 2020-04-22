import React, { useState } from 'react';
import classNames from 'classnames';
import BackgroundImageOnLoad from 'background-image-on-load';
import LoginForm from '../LoginForm';

const LoginOptions = (props) => {
  const [backLoaded, setBackLoaded] = useState(false);

  return (
    <div
      className={classNames('login-container', {
        loaded: backLoaded,
      })}
    >
      <div className='column info-graphic-column'>
        <div className='centered-block'>
          <h2>Find a trusted partner and get quotes.</h2>
          <p>
            Choose your service or describe the problem, then compare quotes
            from shops nearby.
          </p>
        </div>
      </div>
      <div className='column form-column'>
        <LoginForm {...props} />
      </div>

      <BackgroundImageOnLoad
        src={'/img/login-back.jpg'}
        onLoadBg={() => setBackLoaded(true)}
        onError={(err) => console.log('error', err)}
      />
    </div>
  );
};

export default LoginOptions;
