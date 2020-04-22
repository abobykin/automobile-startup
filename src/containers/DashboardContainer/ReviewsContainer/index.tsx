import React from 'react'
import ContentList from '../../../components/common/ContentList'
import reviewsData from './reviewsData'
import ReviewsListItem from './ReviewsListItem'

const ReviewsContainer = () => {
  return (
    <>
      <h2>Reviews (12)</h2>

      <ContentList>
        {reviewsData.map((review, i) => {
          return <ReviewsListItem key={i} {...review} />
        })}
      </ContentList>
    </>
  )
}

export default ReviewsContainer
