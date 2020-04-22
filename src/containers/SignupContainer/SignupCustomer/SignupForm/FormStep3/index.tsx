import React from 'react';
import { Input } from '@rocketseat/unform';
import IconLinkArrow from '../../../../../components/svg-icons/IconLinkArrow';
import IconSearch from '../../../svg-icons/IconSearch';
import IconTrim from '../../../svg-icons/IconTrim';
import IconCar from '../../../svg-icons/IconCar';
import IconCalendar from '../../../svg-icons/IconCalendar';
import IconAddCircle from '../../../svg-icons/IconAddCircle';

type StepParams = {
  setStep: any;
  step: number;
  steps: string[];
  storeToForm: Function;
};

const FormStep3: Function = ({ setStep, step, storeToForm }: StepParams) => {
  const handleChange = (e) => {
    storeToForm({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='form-step-content'>
        <div className='form-row'>
          <div className='form-field-with-icon'>
            <IconSearch width='18' height='18' />
            <Input
              name='vehicleMake'
              type='text'
              placeholder='Search vehicle make'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='form-row duplet'>
          <div className='form-field-with-icon'>
            <IconCar />
            <Input
              name='model'
              type='text'
              placeholder='Model'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-field-with-icon'>
            <IconCalendar />
            <Input
              name='year'
              type='text'
              placeholder='Year'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-field-with-icon'>
            <IconTrim />
            <Input
              name='trim'
              type='text'
              placeholder='Trim'
              className='input-field'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <span className='add-link add-new-vehicle'>
          <IconAddCircle />
          Add new vehicle
        </span>
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

          <button type='submit' className='button button-blue with-icon'>
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStep3;
