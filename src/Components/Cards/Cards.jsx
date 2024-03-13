
import React, { useState } from 'react';
import style from './Cards.module.css';
import ColorInput from '../colorInput/ColorInput';
import TextInput from '../textInput/TextInput';
import ImageComponent from '../imageComponent/ImageComponent';
import CardComponent from '../cardComponent/CardComponent';
import images from '../../img/image'

const Cards = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedImage, setSelectedImage] = useState(null);
  const [input, setInput] = useState({ cardTitle: '' });



  const handleColorChange = (e) => {
    const colorValue = e.target.value;
    if (colorValue.length === 7 && colorValue.startsWith("#")) {
      setSelectedColor(colorValue);
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={style.wrapper}>
      <div>
        <ColorInput value={selectedColor} onChange={handleColorChange} />
        <TextInput value={input.cardTitle} onChange={(e) => setInput({ cardTitle: e.target.value })} />
      </div>
      <div className={style.container}>
        <div className={style.img}>
          {images.map((image, index) => (
            <ImageComponent
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
        <CardComponent
          color={selectedColor}
          imageSrc={selectedImage ? selectedImage.src : ''}
          imageAlt={selectedImage ? selectedImage.alt : ''}
          title={input.cardTitle}
        />
      </div>
    </div>
  );
};

export default Cards;
