import React from 'react'
import ContentListCards from '../../../../components/common/ContentListCards'
import QuotesListItem from './QuotesListItem'
import repairQuotesData from './repairQuotesData.js'
import RepairDetailsTopPanel from './RepairDetailsTopPanel'

const CustomerSingleRepair = () => {
  return (
    <ContentListCards>
      <RepairDetailsTopPanel />

      {repairQuotesData.map((quote, i) => {
        return <QuotesListItem key={i} {...quote} />
      })}
    </ContentListCards>
  )
}

export default CustomerSingleRepair
