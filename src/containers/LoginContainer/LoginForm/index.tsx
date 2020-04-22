import React, { useState } from 'react'
import { Input, Form } from '@rocketseat/unform'
import { withRouter } from 'react-router-dom'
import IconMail from '../../../components/common/forms/ContactUsForm/svg-icons/IconMail'
import IconLock from '../../SignupContainer/svg-icons/IconLock'
import { initialDataSchema } from './formData'
import { Link } from 'react-router-dom'
import IconFacebook from '../../../components/Layout/svg-icons/IconFacebook'
import IconGooglePlus from '../../SignupContainer/svg-icons/IconGooglePlus'

const LoginForm = ({ history, ...props }) => {
  const [formData, setFormData] = useState(initialDataSchema)

  const resetForm = () => {
    setFormData(initialDataSchema)
  }

  const storeToForm = (changedData: object) => {
    setFormData({ ...formData, ...changedData })
  }

  const handleChange = (e) => {
    storeToForm({ [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(formData)
    props.setAuthorized(true)
    resetForm()
  }

  return (
    <>
      <div className='login-form-block'>
        <div className='top-switch-buttons'>
          <span className='button bordered active'>Customer</span>
          <span className='button button-white bordered'>Business</span>
        </div>

        <div className='heading'>
          <h3>Welcome Back!</h3>
          <p>Login to continue</p>
        </div>

        <Form onSubmit={handleSubmit} initialData={formData}>
          <div className='form-row'>
            <div className='form-field-with-icon'>
              <IconMail />
              <Input
                name='email'
                type='text'
                placeholder='Email'
                className='input-field'
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-field-with-icon'>
              <IconLock />
              <Input
                name='password'
                type='password'
                placeholder='Password'
                className='input-field'
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className='controls-group'>
            <button type='submit' className='button button-blue'>
              Login
            </button>

            <Link
              to='/login/forgot-password'
              className='gray-link forgot-password-link'>
              Forgot password?
            </Link>
          </div>
        </Form>

        <div
          className='controls-group'
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <label>Connect with</label>
          <div className='two-buttons'>
            <span className='button button-white button-transparent bordered'>
              <IconFacebook fillColor='#191d3a' />
            </span>
            <span className='button button-white button-transparent bordered'>
              <IconGooglePlus />
            </span>
          </div>
        </div>

        <div className='signup-suggestion'>
          Don’t have an account yet? <Link to='/signup'>Get Started</Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(LoginForm)
