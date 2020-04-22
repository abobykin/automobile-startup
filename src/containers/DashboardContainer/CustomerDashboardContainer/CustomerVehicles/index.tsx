import React from 'react'
import classNames from 'classnames'
import IconAddPlus from '../../svg-icons/IconAddPlus'
import IconVehicleCalendar from './svg-icons/IconVehicleCalendar'
import IconVehicleModel from './svg-icons/IconVehicleModel'
import IconVehicleTrim from './svg-icons/IconVehicleTrim'
import IconDeleteLink from '../../svg-icons/IconDeleteLink'
import IconEditLink from '../../svg-icons/IconEditLink'
import EditVehicleForm from './EditVehicleForm'
import './style.css'

const CustomerVehicles = ({
  changeEditState,
  editMode,
  currentVehicles,
  newVehicleMode,
}: CustomerVehicles) => {
  return (
    <div className='vehicles-list'>
      <div
        className={classNames('vehicle-card', {
          'edit-mode': newVehicleMode,
          'add-new': !newVehicleMode,
        })}
      >
        {newVehicleMode ? (
          <EditVehicleForm changeEditState={changeEditState} index={null} />
        ) : (
          <span
            className='add-link'
            onClick={() => changeEditState(null, true)}
          >
            <IconAddPlus />
            Add new vehicle
          </span>
        )}
      </div>

      {currentVehicles.map((vehicle, index) => {
        return (
          <div
            className={classNames('vehicle-card', {
              'edit-mode': editMode[index],
            })}
            key={index + vehicle.make}
          >
            {editMode[index] ? (
              <EditVehicleForm
                changeEditState={changeEditState}
                index={index}
              />
            ) : (
              <>
                <img
                  src={vehicle.makeLogoUrl}
                  alt={`Car logo - ${vehicle.make}`}
                  height='66'
                />
                <div className='vehicle-card__row'>
                  <IconVehicleModel />
                  Model
                  <span className='value'>{vehicle.model}</span>
                </div>
                <div className='vehicle-card__row'>
                  <IconVehicleCalendar />
                  Year
                  <span className='value'>{vehicle.year}</span>
                </div>
                <div className='vehicle-card__row'>
                  <IconVehicleTrim />
                  Model
                  <span className='value'>{vehicle.model}</span>
                </div>

                <span
                  className='vehicle-card__link'
                  onClick={() => changeEditState(index, true)}
                >
                  <IconEditLink />
                  Edit Vehicle
                </span>

                <span className='vehicle-card__link'>
                  <IconDeleteLink />
                  Delete Vehicle
                </span>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

type Vehicle = {
  model: string
  make: string
  makeLogoUrl: string
  year: number
  trim: string
}

type CustomerVehicles = {
  currentVehicles: Vehicle[]
  editMode: boolean[]
  changeEditState: Function
  newVehicleMode: boolean
}

export default CustomerVehicles
