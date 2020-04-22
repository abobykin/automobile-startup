import React from 'react';

const IconMapMarker = () => {
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
        d='M3 6.3C3 2.82061 5.82061 0 9.3 0C12.7794 0 15.6 2.82061 15.6 6.3C15.6 11.025 9.3 18 9.3 18C9.3 18 3 11.025 3 6.3ZM7.70901 4.70901C7.28705 5.13097 7.05 5.70326 7.05 6.3C7.05 7.54264 8.05736 8.55 9.3 8.55C9.89674 8.55 10.469 8.31295 10.891 7.89099C11.3129 7.46903 11.55 6.89674 11.55 6.3C11.55 5.05736 10.5426 4.05 9.3 4.05C8.70326 4.05 8.13097 4.28705 7.70901 4.70901Z'
        fill='#E2E1F1'
      />
      <mask
        id='IconMapMarkerMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='3'
        y='0'
        width='13'
        height='18'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3 6.3C3 2.82061 5.82061 0 9.3 0C12.7794 0 15.6 2.82061 15.6 6.3C15.6 11.025 9.3 18 9.3 18C9.3 18 3 11.025 3 6.3ZM7.70901 4.70901C7.28705 5.13097 7.05 5.70326 7.05 6.3C7.05 7.54264 8.05736 8.55 9.3 8.55C9.89674 8.55 10.469 8.31295 10.891 7.89099C11.3129 7.46903 11.55 6.89674 11.55 6.3C11.55 5.05736 10.5426 4.05 9.3 4.05C8.70326 4.05 8.13097 4.28705 7.70901 4.70901Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconMapMarkerMask)'>
        <rect width='18' height='18' fill='#E2E1F1' />
      </g>
    </svg>
  );
};

export default IconMapMarker;
