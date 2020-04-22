import React from 'react';
import ContactUsForm from '../common/forms/ContactUsForm';
import './style.css';

const ContactUs = () => {
  return (
    <section className='contact-us-section'>
      <div className='narrow-container'>
        <div className='form-description'>
          <div className='small-gray-heading'>Contact Us</div>
          <h1>Drop us a Message</h1>
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

export default ContactUs;
