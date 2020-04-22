import React from 'react';

const IconPlayVideo = ({ fillColor }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M4 2.14001V16.14L15 9.14001L4 2.14001Z' fill='black' />
      <mask
        id='IconPlayVideoMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='4'
        y='2'
        width='11'
        height='15'
      >
        <path d='M4 2.14001V16.14L15 9.14001L4 2.14001Z' fill='white' />
      </mask>
      <g mask='url(#IconPlayVideoMask)'>
        <rect width='18' height='18' fill={fillColor} />
      </g>
    </svg>
  );
};

export default IconPlayVideo;
