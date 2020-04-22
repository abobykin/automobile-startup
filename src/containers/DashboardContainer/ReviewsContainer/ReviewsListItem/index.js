import React from 'react'
import RatingGray from '../../../../components/common/RatingGray'
import './style.css'

const ReviewsListItem = ({ author, avatarUrl, date, text, repairType }) => {
  return (
    <div className='content-list-item'>
      <div className='content-list-item__row review-top-row'>
        <img src={avatarUrl} alt='avatar' className='avatar' />
        {author}
        <span className='review-date'>{date}</span>
      </div>

      <div className='content-list-item__row'>
        <p>{text}</p>
      </div>
      <div className='content-list-item__row review-bottom-row'>
        <span className='rating'>
          Rating
          <RatingGray />
        </span>
        <span className='repair-type'>
          Repair Type <span className='gray-highlighted'>{repairType}</span>
        </span>
      </div>
    </div>
  )
}

export default ReviewsListItem
