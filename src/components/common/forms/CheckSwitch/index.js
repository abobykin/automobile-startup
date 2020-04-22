import React from 'react';
import { Check } from '@rocketseat/unform';
import './style.css';

const CheckSwitch = ({ handleChange, index }) => {
  return (
    <div className='switcher-row'>
      <Check
        className='switcher-toggle hidden'
        name='isOpen'
        onChange={(e) => handleChange(e, index)}
      />
      <label className='switcher' htmlFor={`openningHours[${index}].isOpen`}>
        <span className='switcher-trigger-shadow'></span>
        <span className='switcher-trigger'></span>
      </label>
      <span className='switcher-text'>Closed</span>
      <span className='switcher-text on'>Open</span>
    </div>
  );
};

export default CheckSwitch;
