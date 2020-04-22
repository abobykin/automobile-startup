import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import FormSteps from '../../../../components/common/forms/FormSteps';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import { initialDataSchema, formStepsNames } from './formData';

const SignupForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialDataSchema);

  const resetForm = () => {
    setFormData(initialDataSchema);
  };

  const storeToForm = (changedData: object, i: number) => {
    if (`openningHours[${i}].isOpen` in changedData) {
      let openningHours = formData.openningHours;
      openningHours[i].isOpen = changedData[`openningHours[${i}].isOpen`];
      setFormData({ ...formData, openningHours });
      return false;
    } else if (`services[${i}].value` in changedData) {
      let services = formData.services;
      services[i].value = changedData[`services[${i}].value`];
      setFormData({ ...formData, services });
      return false;
    } else {
      setFormData({ ...formData, ...changedData });
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    resetForm();
  };

  return (
    <>
      <div
        style={step === 2 || step === 3 ? { marginLeft: '-40px' } : {}}
        className='form-heading-block'
      >
        {step !== 2 && step !== 3 && (
          <h4 className='form-heading'>Create an Account</h4>
        )}

        <FormSteps setStep={setStep} step={step} steps={formStepsNames} />
      </div>

      <Form onSubmit={handleSubmit} initialData={formData}>
        {step === 1 && (
          <FormStep1 setStep={setStep} step={step} storeToForm={storeToForm} />
        )}
        {step === 2 && (
          <FormStep2
            setStep={setStep}
            step={step}
            storeToForm={storeToForm}
            workingHours={formData.openningHours}
          />
        )}
        {step === 3 && (
          <FormStep3
            setStep={setStep}
            step={step}
            storeToForm={storeToForm}
            services={formData.services}
          />
        )}
      </Form>
    </>
  );
};

export default SignupForm;
