import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import IconUser from '../../../../../components/common/forms/ContactUsForm/svg-icons/IconUser';
import IconMail from '../../../../../components/common/forms/ContactUsForm/svg-icons/IconMail';
import IconLinkArrow from '../../../../../components/svg-icons/IconLinkArrow';
import IconFacebook from '../../../../../components/Layout/svg-icons/IconFacebook';
import IconGooglePlus from '../../../svg-icons/IconGooglePlus';
import IconLock from '../../../svg-icons/IconLock';

type StepParams = {
  setStep: any;
  step: number;
  steps: string[];
  storeToForm: Function;
};

const FormStep1: Function = ({ setStep, step, storeToForm }: StepParams) => {
  const handleChange = (e) => {
    storeToForm({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='form-step-content'>
        <div className='form-row duplet'>
          <div className='form-field-with-icon'>
            <IconUser />
            <Input
              name='firstName'
              type='text'
              placeholder='First Name'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-field-with-icon'>
            <IconUser />
            <Input
              name='secondName'
              type='text'
              placeholder='Last Name'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-field-with-icon'>
            <IconMail />
            <Input
              name='email'
              type='text'
              placeholder='Email'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='form-row duplet'>
          <div className='form-field-with-icon'>
            <IconLock />
            <Input
              name='password'
              type='password'
              placeholder='Password'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-field-with-icon'>
            <IconLock />
            <Input
              name='repeatedPassword'
              type='password'
              placeholder='Confirm Password'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <span
          className='button button-blue with-icon'
          onClick={() => setStep(step + 1)}
        >
          Next
          <IconLinkArrow fillColor='white' />
        </span>
      </div>
      <div className='social-login-suggestion'>
        <div>Or you can join with:</div>
        <Link to='/' className='button button-white bordered'>
          <IconFacebook fillColor='#191D3A' />
        </Link>
        <Link to='/' className='button button-white bordered'>
          <IconGooglePlus />
        </Link>
      </div>
    </>
  );
};

export default FormStep1;
