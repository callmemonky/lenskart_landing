import React from 'react';
import image from '../assets/images/munna.jpeg';

const SIZES = { lg: '250px', md: '200px', sm: '150px' };

function Avatar({ size, src }) {
  //Size lg, md, sm
  return (
    <div
      style={{
        borderRadius: SIZES[size],
        overflow: 'hidden',
        width: SIZES[size],
        height: SIZES[size],
        border: 'solid 4px red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={src} alt='' style={{ height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default Avatar;
