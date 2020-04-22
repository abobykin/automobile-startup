import React from 'react';

const IconMenuUser = ({ fillColor }) => {
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
        d='M10.1112 3.88888C10.1112 2.17066 8.71827 0.777771 7.00005 0.777771C5.28183 0.777771 3.88894 2.17066 3.88894 3.88888C3.88894 5.6071 5.28183 6.99999 7.00005 6.99999C8.71827 6.99999 10.1112 5.6071 10.1112 3.88888ZM13.2223 11.6667C13.2223 9.94777 10.4378 8.55555 7.00005 8.55555C3.56228 8.55555 0.777832 9.94777 0.777832 11.6667V13.2222H13.2223V11.6667Z'
        fill={fillColor}
      />
      <mask
        id='IconMenuUser'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='14'
        height='14'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.1112 3.88888C10.1112 2.17066 8.71827 0.777771 7.00005 0.777771C5.28183 0.777771 3.88894 2.17066 3.88894 3.88888C3.88894 5.6071 5.28183 6.99999 7.00005 6.99999C8.71827 6.99999 10.1112 5.6071 10.1112 3.88888ZM13.2223 11.6667C13.2223 9.94777 10.4378 8.55555 7.00005 8.55555C3.56228 8.55555 0.777832 9.94777 0.777832 11.6667V13.2222H13.2223V11.6667Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconMenuUser)'>
        <rect width='14' height='14' fill={fillColor} />
      </g>
    </svg>
  );
};

export default IconMenuUser;
