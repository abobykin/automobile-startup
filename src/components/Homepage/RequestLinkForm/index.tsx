import React, { useState } from 'react';
import IconLinkArrow from '../../svg-icons/IconLinkArrow';

const RequestLinkForm: React.FC = () => {
  const [number, setNumber] = useState('');

  return (
    <form action='' className='minimalist-form single-line'>
      <div className={`input-group ${number.length > 0 ? 'has-value' : ''}`}>
        <input
          type='number'
          value={number}
          className='input-field'
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>Mobile Number</label>
      </div>
      <button className='button button-red with-icon'>
        Text me a link
        <IconLinkArrow fillColor='white' />
      </button>
    </form>
  );
};

export default RequestLinkForm;
