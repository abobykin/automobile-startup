import React from 'react'
import ContentListCards from '../../../../components/common/ContentListCards'
import RepairsListItem from './RepairsListItem'
import repairsData from './repairsData'

const CustomerRepairs = () => {
  return (
    <ContentListCards>
      {repairsData.map((repair, i) => {
        return <RepairsListItem key={i} {...repair} />
      })}
    </ContentListCards>
  )
}

export default CustomerRepairs
