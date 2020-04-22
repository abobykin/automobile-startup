import React from 'react'
import ProfileCard from '../../../../components/common/ProfileCard'
import ReviewsContainer from '../../ReviewsContainer'
import profileData from '../profileData'

const CustomerProfile = () => {
  return (
    <>
      <ProfileCard profileData={profileData} />
      <ReviewsContainer />
    </>
  )
}

export default CustomerProfile
