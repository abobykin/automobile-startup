import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
// import * as Yup from 'yup';
import IconLinkArrow from '../../../svg-icons/IconLinkArrow';
import IconUser from './svg-icons/IconUser';
import IconMail from './svg-icons/IconMail';

// const schema = Yup.object().shape({
//   firstName: Yup.string()
//     .email('Custom invalid email message')
//     .required('Custom required message'),
//   lastName: Yup.string()
//     .min(4)
//     .required(),
// });

const ContactUsForm = () => {
  function handleSubmit(data) {
    // console.log(data);
  }

  return (
    <Form
      // schema={schema}
      onSubmit={handleSubmit}
    >
      <div className='form-row duplet'>
        <div className='form-field-with-icon'>
          <IconUser />
          <Input
            name='firstName'
            type='text'
            placeholder='First Name'
            className='input-field'
          />
        </div>
        <div className='form-field-with-icon'>
          <IconUser />
          <Input
            name='lastName'
            type='text'
            placeholder='Last Name'
            className='input-field'
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-field-with-icon'>
          <IconMail />
          <Input
            name='email'
            type='text'
            placeholder='Email'
            className='input-field'
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-field-with-icon'>
          <Textarea name='firstName' placeholder='Write a message…' />
        </div>
      </div>
      <button type='submit' className='button-blue send-button'>
        Send
        <IconLinkArrow fillColor='white' />
      </button>
    </Form>
  );
};

export default ContactUsForm;
