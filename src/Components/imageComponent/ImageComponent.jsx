import React from 'react';

const ImageComponent = ({ src, alt, onClick }) => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        border: "1px solid black",
      }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ImageComponent;
