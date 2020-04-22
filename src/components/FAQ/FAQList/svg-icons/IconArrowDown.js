import React from 'react';

const IconArrowDown = ({ fillColor }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.41 5.58002L9 10.17L13.59 5.58002L15 7.00002L9 13L3 7.00002L4.41 5.58002Z'
        fill='black'
      />
      <mask
        id='IconArrowDownMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='3'
        y='5'
        width='12'
        height='8'
      >
        <path
          d='M4.41 5.58002L9 10.17L13.59 5.58002L15 7.00002L9 13L3 7.00002L4.41 5.58002Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconArrowDownMask)'>
        <rect className='fillLayer' width='18' height='18' fill={fillColor} />
      </g>
    </svg>
  );
};

export default IconArrowDown;
