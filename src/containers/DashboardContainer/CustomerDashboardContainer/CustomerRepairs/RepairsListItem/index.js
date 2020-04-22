import React from 'react'
import { Link } from 'react-router-dom'
import IconDeleteLink from '../../../svg-icons/IconDeleteLink'

const RepairsListItem = ({
  date,
  vehicle,
  repairNumber,
  averageCost,
  repairType,
}) => {
  return (
    <div className='content-list-item'>
      <div className='content-list-item__row'>
        <div className='content-list-item__property'>
          <span className='content-list-item__property-label'>Date</span>
          <span className='content-list-item__property-value'>{date}</span>
        </div>
        <div className='content-list-item__property'>
          <span className='content-list-item__property-label'>Vehicle</span>
          <span className='content-list-item__property-value'>{vehicle}</span>
        </div>
        <div className='content-list-item__property right-aligned'>
          <span className='content-list-item__property-label'>
            Repair Number
          </span>
          <span className='content-list-item__property-value'>
            {repairNumber}
          </span>
        </div>
      </div>

      <div className='content-list-item__row'>
        <div className='content-list-item__property highlighted'>
          <span className='content-list-item__property-label'>
            Average Cost
          </span>
          <span className='content-list-item__property-value'>
            {averageCost}
          </span>
        </div>
        <div className='content-list-item__property highlighted'>
          <span className='content-list-item__property-label'>Repair Type</span>
          <span className='content-list-item__property-value'>
            {repairType}
          </span>
        </div>
        <div className='content-list-item__controls'>
          <Link to='/dashboard/repairs/1' className='button button-red'>
            View Quotes (46)
          </Link>
          <span className='edit-button'>
            <IconDeleteLink />
          </span>
        </div>
      </div>
    </div>
  )
}

export default RepairsListItem
