import React from 'react'

const IconDeleteLink = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 1V0H6V1H1V3H2V16C2 17.1046 2.89543 18 4 18H14C15.1046 18 16 17.1046 16 16V3H17V1H12ZM4 3H14V16H4V3ZM12 5V14H10V5H12ZM8 14V5H6V14H8Z'
        fill='black'
      />
      <mask
        id='IconDeleteLinkMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='1'
        y='0'
        width='16'
        height='18'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 1V0H6V1H1V3H2V16C2 17.1046 2.89543 18 4 18H14C15.1046 18 16 17.1046 16 16V3H17V1H12ZM4 3H14V16H4V3ZM12 5V14H10V5H12ZM8 14V5H6V14H8Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconDeleteLinkMask)'>
        <rect
          width='18'
          height='18'
          transform='matrix(-1 0 0 1 18 0)'
          fill='#FF827A'
        />
      </g>
    </svg>
  )
}

export default IconDeleteLink
