import React from 'react';

const IconMenuQuote = ({ fillColor }) => {
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
        d='M1.55554 1.4C1.55554 0.623 2.17854 0 2.95554 0H8.55554L12.7555 4.2V12.6C12.7555 13.3732 12.1287 14 11.3555 14H2.95554C2.18234 14 1.55554 13.3732 1.55554 12.6V1.4ZM7.85552 1.05V4.9H11.7055L7.85552 1.05Z'
        fill={fillColor}
      />
      <mask
        id='IconMenuQuoteMask'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='1'
        y='0'
        width='12'
        height='14'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.55554 1.4C1.55554 0.623 2.17854 0 2.95554 0H8.55554L12.7555 4.2V12.6C12.7555 13.3732 12.1287 14 11.3555 14H2.95554C2.18234 14 1.55554 13.3732 1.55554 12.6V1.4ZM7.85552 1.05V4.9H11.7055L7.85552 1.05Z'
          fill='white'
        />
      </mask>
      <g mask='url(#IconMenuQuoteMask)'>
        <rect width='14' height='14' fill={fillColor} />
      </g>
    </svg>
  );
};

export default IconMenuQuote;
