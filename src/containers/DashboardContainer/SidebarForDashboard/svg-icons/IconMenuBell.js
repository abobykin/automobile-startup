import React from 'react';

const IconMenuBell = ({ fillColor }) => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.7778 12V11.3333L11.4445 10V6C11.4445 3.93333 10.0912 2.11333 8.11117 1.52667V1.33333C8.11117 0.596954 7.51421 0 6.77783 0C6.04145 0 5.4445 0.596954 5.4445 1.33333V1.52667C3.4645 2.11333 2.11117 3.93333 2.11117 6V10L0.777832 11.3333V12H12.7778ZM6.77783 14C7.51421 14 8.11117 13.403 8.11117 12.6667H5.4445C5.4445 13.403 6.04145 14 6.77783 14Z'
        fill={fillColor}
      />
      <mask
        id='IconMenuBellMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='13'
        height='14'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.7778 12V11.3333L11.4445 10V6C11.4445 3.93333 10.0912 2.11333 8.11117 1.52667V1.33333C8.11117 0.596954 7.51421 0 6.77783 0C6.04145 0 5.4445 0.596954 5.4445 1.33333V1.52667C3.4645 2.11333 2.11117 3.93333 2.11117 6V10L0.777832 11.3333V12H12.7778ZM6.77783 14C7.51421 14 8.11117 13.403 8.11117 12.6667H5.4445C5.4445 13.403 6.04145 14 6.77783 14Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconMenuBellMask)'>
        <rect width='14' height='14' fill={fillColor} />
      </g>
    </svg>
  );
};

export default IconMenuBell;
