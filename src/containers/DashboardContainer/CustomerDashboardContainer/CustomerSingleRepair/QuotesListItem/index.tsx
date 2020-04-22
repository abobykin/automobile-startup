import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const QuotesListItem = ({
  shop,
  quoteNumber,
  zipCode,
  totalPrice,
  repairType,
  numberRepairs,
  sponsored,
  quoteText,
}) => {
  return (
    <div className='content-list-item quote-list-item'>
      <div className='content-list-item__row quote-row-first'>
        <div className='avatar-with-status'>
          <img
            src='/img/repair-shop-avatar.png'
            width='40'
            alt='avatar of service'
          />
        </div>
        <div className='content-list-item__property'>
          <span className='content-list-item__property-value repair-shop-name'>
            {shop}
          </span>
          <img
            src='/img/dummy-rating.png'
            alt='rating'
            width='114'
            className='rating'
          />
        </div>
        <div className='content-list-item__property'>
          <span className='content-list-item__property-label'>
            Quote Number
          </span>
          <span className='content-list-item__property-value'>
            {quoteNumber}
          </span>
        </div>
        <div className='content-list-item__property right-aligned'>
          <span className='content-list-item__property-label'>Zip Code</span>
          <span className='content-list-item__property-value'>{zipCode}</span>
        </div>
        <div className='content-list-item__property right-aligned highlighted'>
          <span className='content-list-item__property-label'>Total Price</span>
          <span className='content-list-item__property-value'>
            {totalPrice}
          </span>
        </div>
      </div>

      <div className='content-list-item__row quote-row-second'>
        <span className='empty-column'></span>
        <div className='content-list-item__property'>
          <span className='repairs-amount'>{numberRepairs} Repairs</span>
          {sponsored && <span className='sponsored'>Sponsored</span>}
        </div>
        <div className='content-list-item__property'>
          <span className='quote-text'>
            <details>
              <summary>
                {quoteText.substring(0, 90)} ...
                <span className='pseudo-link'>Read more</span>
              </summary>
              {quoteText}
            </details>
          </span>
        </div>
        <div className='content-list-item__property content-list-item__controls right-aligned'>
          <Link to='/dashboard/repairs/1' className='button button-red'>
            Chat
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuotesListItem
