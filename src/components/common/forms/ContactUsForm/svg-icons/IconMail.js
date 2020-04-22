import React from 'react';

const IconMail = () => {
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
        d='M1.8 2H16.2C17.19 2 18 2.801 18 3.8V14.6C18 15.5941 17.1941 16.4 16.2 16.4H1.8C0.805887 16.4 0 15.5941 0 14.6V3.8C0 2.801 0.801 2 1.8 2ZM9 10.1L16.2 5.6V3.8L9 8.3L1.8 3.8V5.6L9 10.1Z'
        fill='#E2E1F1'
      />
      <mask
        id='IconMailMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='2'
        width='18'
        height='15'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.8 2H16.2C17.19 2 18 2.801 18 3.8V14.6C18 15.5941 17.1941 16.4 16.2 16.4H1.8C0.805887 16.4 0 15.5941 0 14.6V3.8C0 2.801 0.801 2 1.8 2ZM9 10.1L16.2 5.6V3.8L9 8.3L1.8 3.8V5.6L9 10.1Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconMailMask)'>
        <rect width='18' height='18' fill='#E2E1F1' />
      </g>
    </svg>
  );
};

export default IconMail;
