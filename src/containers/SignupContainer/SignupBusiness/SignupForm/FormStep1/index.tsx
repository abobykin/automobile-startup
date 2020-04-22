import React from 'react';
import { Input } from '@rocketseat/unform';
import IconUser from '../../../../../components/common/forms/ContactUsForm/svg-icons/IconUser';
import IconMail from '../../../../../components/common/forms/ContactUsForm/svg-icons/IconMail';
import IconLinkArrow from '../../../../../components/svg-icons/IconLinkArrow';
import IconLock from '../../../svg-icons/IconLock';
import IconHome from '../../../svg-icons/IconHome';

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
      <div className='form-step-content form-step-1-content'>
        <div className='form-row'>
          <div className='form-field-with-icon'>
            <IconHome />
            <Input
              name='name'
              type='text'
              placeholder='Name of Business'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='form-row duplet'>
          <div className='form-field-with-icon'>
            <IconUser />
            <Input
              name='firstName'
              type='text'
              placeholder='Contact First Name'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-field-with-icon'>
            <IconUser />
            <Input
              name='secondName'
              type='text'
              placeholder='Contact Last Name'
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
    </>
  );
};

export default FormStep1;
