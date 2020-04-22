import React from 'react';
import ContactUsForm from '../common/forms/ContactUsForm';
import './style.css';

const BecomePartner = () => {
  return (
    <section className='become-partner-section'>
      <div className='narrow-container'>
        <div className='form-description'>
          <div className='small-gray-heading'>Let’s Team Up?</div>
          <h1>Become a Partner </h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo
          </p>
        </div>

        <ContactUsForm />
      </div>
    </section>
  );
};

export default BecomePartner;
