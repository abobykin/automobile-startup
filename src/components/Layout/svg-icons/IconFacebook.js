import React from 'react';

const IconFacebook = ({ fillColor }) => {
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
        d='M10.0562 17.9669V9.77138H12.8072L13.2191 6.57737H10.0562V4.53814C10.0562 3.6134 10.313 2.98324 11.6391 2.98324L13.3305 2.98245V0.125762C13.0379 0.0869075 12.0339 0 10.8659 0C8.42737 0 6.75796 1.48845 6.75796 4.22191V6.57737H4V9.77138H6.75796V17.9669H10.0562Z'
        fill='#262628'
      />
      <mask
        id='iconFacebookMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='4'
        y='0'
        width='10'
        height='18'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.0562 17.9669V9.77138H12.8072L13.2191 6.57737H10.0562V4.53814C10.0562 3.6134 10.313 2.98324 11.6391 2.98324L13.3305 2.98245V0.125762C13.0379 0.0869075 12.0339 0 10.8659 0C8.42737 0 6.75796 1.48845 6.75796 4.22191V6.57737H4V9.77138H6.75796V17.9669H10.0562Z'
          fill='white'
        />
      </mask>
      <g mask='url(#iconFacebookMask)'>
        <rect width='18' height='18' fill={fillColor} />
      </g>
    </svg>
  );
};

export default IconFacebook;
