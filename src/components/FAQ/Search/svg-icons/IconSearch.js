import React from 'react';

const IconSearch = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.11 13 9.59 12.41 10.73 11.44L11 11.71V12.5L16 17.5L17.5 16L12.5 11H11.71L11.44 10.73C12.41 9.59 13 8.11 13 6.5ZM2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5Z'
        fill='black'
      />
      <mask
        id='searchMask0'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='18'
        height='18'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.11 13 9.59 12.41 10.73 11.44L11 11.71V12.5L16 17.5L17.5 16L12.5 11H11.71L11.44 10.73C12.41 9.59 13 8.11 13 6.5ZM2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5Z'
          fill='white'
        />
      </mask>
      <g mask='url(#searchMask0)'>
        <rect width='18' height='18' fill='#8C8E9C' />
      </g>
    </svg>
  );
};

export default IconSearch;
