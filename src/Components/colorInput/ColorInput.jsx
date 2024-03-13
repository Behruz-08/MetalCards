import React from 'react';

const ColorInput = ({ value, onChange }) => {
  return (
    <input
      type="color"
      value={value}
      onChange={onChange}
    />
  );
};

export default ColorInput;