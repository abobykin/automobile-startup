import React from 'react'
import Rating from '../Rating'
import './style.scss'

const ProfileCard = ({ profileData }) => {
  return (
    <div className='profile-card'>
      <div className='profile-card-content'>
        <div className='left-column'>
          <img
            className='avatar'
            src={profileData.avatarUrl}
            alt='user avatar'
            width='120'
            height='120'
          />
          <div className='name'>{profileData.name}</div>
          <span className='address'>{profileData.address}</span>

          <Rating />
        </div>

        <div className='personal-details'>
          <h4 className='blue-heading'>Personal Details</h4>
          <div>
            <div className='personal-details__row'>
              <span className='personal-details__propery-label'>Email</span>
              <span className='personal-details__propery-name'>
                {profileData.personalDetails.email}
              </span>
            </div>
            <div className='personal-details__row'>
              <span className='personal-details__propery-label'>
                Phone Number
              </span>
              <span className='personal-details__propery-name'>
                {profileData.personalDetails.phoneNumber}
              </span>
            </div>
            <div className='personal-details__row'>
              <span className='personal-details__propery-label'>Zip Code</span>
              <span className='personal-details__propery-name'>
                {profileData.personalDetails.zipCode}
              </span>
            </div>
          </div>
          <div className='edit-button-block'>
            <span className='button button-red'>Edit My Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
