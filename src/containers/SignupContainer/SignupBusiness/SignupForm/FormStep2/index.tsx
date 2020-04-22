import React from 'react';
import IconLinkArrow from '../../../../../components/svg-icons/IconLinkArrow';
import { Input } from '@rocketseat/unform';
import IconZipCode from '../../../svg-icons/IconZipCode';
import IconHome from '../../../svg-icons/IconLock';
import IconMapMarker from '../../../svg-icons/IconMapMarker';
import IconAddCircle from '../../../svg-icons/IconAddCircle';
import OpeningHours from './OpeningHours';

type StepParams = {
  setStep: any;
  step: number;
  steps: string[];
  storeToForm: Function;
  workingHours: object[];
};

const FormStep2: Function = ({
  setStep,
  step,
  storeToForm,
  workingHours,
}: StepParams) => {
  const handleChange = (e) => {
    storeToForm({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='form-step-content form-step-2-content'>
        <div className='contact-info'>
          <h4>Contact Info</h4>
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

          <span className='add-link'>
            <IconAddCircle />
            Add new address
          </span>
        </div>

        <div className='opening-hours'>
          <h4>Opening Hours</h4>
          <OpeningHours
            storeToForm={storeToForm}
            hoursCurrentState={workingHours}
          />
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
