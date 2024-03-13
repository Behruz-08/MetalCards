import React from 'react';

const CardComponent = ({ color, imageSrc, imageAlt, title }) => {
  return (
    <div style={{ width: "300px", height: "300px", backgroundColor: color ? color : 'transparent' }}>
      <p>Selected Color: {color}</p>
      <img src={imageSrc} alt={imageAlt} style={{ width: '200px', height: '200px' }} />
      <p style={{ marginTop: "-5px" }}>{title}</p>
    </div>
  );
};

export default CardComponent;