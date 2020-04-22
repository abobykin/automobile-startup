import React from 'react';
import IconLinkArrow from '../../../../../components/svg-icons/IconLinkArrow';
import CheckBoxCard from '../../../../../components/common/forms/CheckBoxCard';
import { Scope } from '@rocketseat/unform';

type StepParams = {
  setStep: any;
  step: number;
  storeToForm: Function;
  services: object[];
};

const FormStep3: Function = ({
  setStep,
  step,
  storeToForm,
  services,
}: StepParams) => {
  const handleChange = (e, i: number) => {
    storeToForm({ [e.target.name]: e.target.checked }, i);
  };

  const servicesForCheck = services.map((service, i) => {
    return (
      <Scope path={`services[${i}]`} key={i}>
        <CheckBoxCard item={service} handleChange={handleChange} index={i} />
      </Scope>
    );
  });

  return (
    <>
      <h4 style={{ marginLeft: '-40px' }}>Select the services you offer</h4>

      <div className='form-step-content form-step-3-content'>
        {servicesForCheck}
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
          <button type='submit' className='button button-blue with-icon'>
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStep3;
