import React from 'react';

const IconUser = () => {
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
        d='M13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9C11.2091 9 13 7.20914 13 5ZM17 15C17 12.79 13.42 11 9 11C4.58 11 1 12.79 1 15V17H17V15Z'
        fill='black'
      />
      <mask
        id='IconUserMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='1'
        y='1'
        width='16'
        height='16'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9C11.2091 9 13 7.20914 13 5ZM17 15C17 12.79 13.42 11 9 11C4.58 11 1 12.79 1 15V17H17V15Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconUserMask)'>
        <rect width='18' height='18' fill='#E2E1F1' />
      </g>
    </svg>
  );
};

export default IconUser;
