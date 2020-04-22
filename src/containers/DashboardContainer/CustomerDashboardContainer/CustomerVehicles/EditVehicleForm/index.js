import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import IconSearch from '../../../../SignupContainer/svg-icons/IconSearch'
import IconTrim from '../../../../SignupContainer/svg-icons/IconTrim'
import IconCar from '../../../../SignupContainer/svg-icons/IconCar'
import IconCalendar from '../../../../SignupContainer/svg-icons/IconCalendar'
import IconCheckSave from '../../../svg-icons/IconCheckSave'

const EditVehicleForm = ({ changeEditState, index }) => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  const handleChange = (e) => {
    // storeToForm({ [e.target.name]: e.target.value });
  }

  return (
    <Form onSubmit={handleSubmit} initialData={{}}>
      <h4>Add New Vehicle</h4>
      <div className='form-row'>
        <div className='form-field-with-icon'>
          <IconSearch width='18' height='18' />
          <Input
            name='vehicleMake'
            type='text'
            placeholder='Search vehicle make'
            className='input-field'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-field-with-icon'>
          <IconCar />
          <Input
            name='model'
            type='text'
            placeholder='Model'
            className='input-field'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-field-with-icon'>
          <IconCalendar />
          <Input
            name='year'
            type='text'
            placeholder='Year'
            className='input-field'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-field-with-icon'>
          <IconTrim />
          <Input
            name='trim'
            type='text'
            placeholder='Trim'
            className='input-field'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <span
        className='add-link add-new-vehicle'
        onClick={() => changeEditState(index ? index : null, false)}
      >
        <IconCheckSave />
        Save
      </span>
    </Form>
  )
}

export default EditVehicleForm
