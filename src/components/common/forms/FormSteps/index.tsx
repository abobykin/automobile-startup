import React from 'react';
import classNames from 'classnames';
import './style.scss';

type StepParams = {
  setStep: Function;
  step: number;
  steps: string[];
};

const FormSteps: Function = ({ setStep, steps, step }: StepParams) => {
  return (
    <div className='form-steps'>
      {steps.map((stepName, i) => {
        return (
          <div key={i} className='form-steps__container'>
            <div className='form-steps__step'>
              <span
                className={classNames('form-steps__marker', {
                  active: step >= i + 1,
                })}
              >
                {i + 1}
              </span>
              <span className='form-steps__text'>{stepName.toUpperCase()}</span>
            </div>
            {i + 1 < steps.length && (
              <div
                className={classNames('form-steps__line-to-next', {
                  active: step > i + 1,
                })}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FormSteps;
