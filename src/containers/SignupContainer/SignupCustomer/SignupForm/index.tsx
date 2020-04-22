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

  const storeToForm = (changedData: object) => {
    setFormData({ ...formData, ...changedData });
  };

  const handleSubmit = () => {
    console.log(formData);
    resetForm();
  };

  return (
    <>
      <div className='form-heading-block'>
        <h4 className='form-heading'>Create an Account</h4>

        <FormSteps setStep={setStep} step={step} steps={formStepsNames} />
      </div>

      <Form onSubmit={handleSubmit} initialData={formData}>
        {step === 1 && (
          <FormStep1 setStep={setStep} step={step} storeToForm={storeToForm} />
        )}
        {step === 2 && (
          <FormStep2 setStep={setStep} step={step} storeToForm={storeToForm} />
        )}
        {step === 3 && (
          <FormStep3 setStep={setStep} step={step} storeToForm={storeToForm} />
        )}
      </Form>
    </>
  );
};

export default SignupForm;
