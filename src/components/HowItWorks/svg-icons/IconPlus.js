import React from 'react';

const IconPlus = () => {
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
        d='M9 0C4.02944 0 0 4.02944 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2ZM8.1 8.1V4.5H9.9V8.1H13.5V9.9H9.9V13.5H8.1V9.9H4.5V8.1H8.1Z'
        fill='black'
      />
      <mask
        id='iconPlusMask'
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
          d='M9 0C4.02944 0 0 4.02944 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2ZM8.1 8.1V4.5H9.9V8.1H13.5V9.9H9.9V13.5H8.1V9.9H4.5V8.1H8.1Z'
          fill='white'
        />
      </mask>
      <g mask='url(#iconPlusMask)'>
        <rect width='18' height='18' fill='#554df1' />
      </g>
    </svg>
  );
};

export default IconPlus;
