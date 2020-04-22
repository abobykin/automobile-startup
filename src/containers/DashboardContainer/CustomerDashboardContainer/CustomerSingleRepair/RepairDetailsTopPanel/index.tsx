import React from 'react'

const RepairDetailsTopPanel = () => {
  return (
    <div className='content-list-item dark-gray-panel repair-details-top-panel'>
      <div className='content-list-item__row'>
        <div className='content-list-item__property'>
          <span className='content-list-item__property-label'>
            Repair Number
          </span>
          <span className='content-list-item__property-value'>1837402820</span>
        </div>
        <div className='content-list-item__property'>
          <span className='content-list-item__property-label'>Vehicle</span>
          <span className='content-list-item__property-value'>
            Audi SQ5 - 3.0 TFSI - 2016
          </span>
        </div>
        <div className='content-list-item__property'>
          <span className='content-list-item__property-label'>Repair Type</span>
          <span className='content-list-item__property-value'>
            Exterior - Real Door
          </span>
        </div>
        <div className='content-list-item__property right-aligned'>
          <span className='button dark-gray-panel__button'>
            Sort By
            <span className='filter-by'>
              &nbsp;Price&nbsp;
              <span className='asc'>></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RepairDetailsTopPanel
