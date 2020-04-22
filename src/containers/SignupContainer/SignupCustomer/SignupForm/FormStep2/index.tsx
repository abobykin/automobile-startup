import React from 'react';
import { Input } from '@rocketseat/unform';
import IconLinkArrow from '../../../../../components/svg-icons/IconLinkArrow';
import IconHome from '../../../svg-icons/IconLock';
import IconZipCode from '../../../svg-icons/IconZipCode';
import IconMapMarker from '../../../svg-icons/IconMapMarker';

type StepParams = {
  setStep: any;
  step: number;
  steps: string[];
  storeToForm: Function;
};

const FormStep2: Function = ({ setStep, step, storeToForm }: StepParams) => {
  const handleChange = (e) => {
    storeToForm({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='form-step-content'>
        <div className='form-row'>
          <div className='form-field-with-icon'>
            <IconZipCode />
            <Input
              name='zipCode'
              type='text'
              placeholder='Zip Code'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='form-row duplet'>
          <div className='form-field-with-icon'>
            <IconMapMarker />
            <Input
              name='state'
              type='text'
              placeholder='State'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-field-with-icon'>
            <IconMapMarker />
            <Input
              name='city'
              type='text'
              placeholder='City'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-field-with-icon'>
            <IconHome />
            <Input
              name='email'
              type='text'
              placeholder='Address'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>

      <div className='form-steps-buttons'>
        <span
          className='button button-white bordered button-back'
          onClick={() => setStep(step - 1)}
        >
          <IconLinkArrow fillColor='black' />
          Back
        </span>

        <div className='controls-group'>
          <span className='button skip-link' onClick={() => setStep(step + 1)}>
            <IconLinkArrow fillColor='white' />
            Skip
          </span>
          <span
            className='button button-blue with-icon'
            onClick={() => setStep(step + 1)}
          >
            Next
            <IconLinkArrow fillColor='white' />
          </span>
        </div>
      </div>
    </>
  );
};

export default FormStep2;
