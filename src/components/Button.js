import React from 'react';

const SIZES = {
  lg: {
    padding: '12px 35px',
    fontSize: '16px',
  },
  md: {
    padding: '10px 30px',
    fontSize: '14px',
  },
  sm: {
    padding: '8px 25px',
    fontSize: '12px',
  },
};

function Button({ size, text, backColor, textColor }) {
  //Size lg, md, sm
  //Props -> Button Text, Button Size, Button Function, backgroundColor
  return (
    <div
      style={{
        backgroundColor: backColor,
        color: textColor,
        fontWeight: 700,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '40px',
        textTransform: 'uppercase',
        marginTop: '20px',
        ...SIZES[size],
      }}
    >
      {text}
    </div>
  );
}

export default Button;
