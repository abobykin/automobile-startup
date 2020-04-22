import React from 'react';

const IconLinkArrow = ({ fillColor }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M-0.000152588 8.11503H14.7326L12.2535 5.62776L13.4071 4.47412L17.8662 8.93321L13.4071 13.3923L12.2535 12.2387L14.7326 9.75139H-0.000152588V8.11503Z'
        fill={fillColor}
      />
      <mask
        id='mask0'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='4'
        width='18'
        height='10'
      >
        <path
          d='M-0.000152588 8.11503H14.7326L12.2535 5.62776L13.4071 4.47412L17.8662 8.93321L13.4071 13.3923L12.2535 12.2387L14.7326 9.75139H-0.000152588V8.11503Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0)'>
        <rect
          className='fillLayer'
          width='18'
          height='18'
          fill={fillColor ? fillColor : '#554DF1'}
        />
      </g>
    </svg>
  );
};

export default IconLinkArrow;
