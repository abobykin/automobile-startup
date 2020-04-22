import React from 'react';

const IconHome = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.2 16.3V10.9H10.8V16.3H15.3V9.1H18L9 1L0 9.1H2.7V16.3H7.2Z'
        fill='#E2E1F1'
      />
      <mask
        id='IconHomeMask1'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='1'
        width='18'
        height='16'
      >
        <path
          d='M7.2 16.3V10.9H10.8V16.3H15.3V9.1H18L9 1L0 9.1H2.7V16.3H7.2Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconHomeMask1)'>
        <rect width='18' height='18' fill='#E2E1F1' />
      </g>
    </svg>
  );
};

export default IconHome;
