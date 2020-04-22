import React, { useState } from 'react';
import IconLinkArrow from '../../svg-icons/IconLinkArrow';

const GetQuoteForm: React.FC = () => {
  const [zip, setZip] = useState('');

  return (
    <form action='' className='minimalist-form single-line'>
      <div className={`input-group ${zip.length > 0 ? 'has-value' : ''}`}>
        <input
          type='text'
          value={zip}
          className='input-field'
          onChange={(e) => setZip(e.target.value)}
        />
        <label>Zip Code</label>
      </div>
      <button className='button button-blue with-icon'>
        Get a Quote
        <IconLinkArrow fillColor='white' />
      </button>
    </form>
  );
};

export default GetQuoteForm;
