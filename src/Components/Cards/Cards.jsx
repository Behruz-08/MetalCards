import React, { useState } from 'react';
import style from './Cards.module.css'

const Cards = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  

  const handleColorChange = (e) => {

    const colorValue = e.target.value;
    if (colorValue.length === 7 && colorValue.startsWith("#")) {
      setSelectedColor(e.target.value);
      updateSelectedCard();
    }

  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    updateSelectedCard();
  };

  const updateSelectedCard = () => {
    if (selectedColor && selectedImage) {
      setSelectedCard({
        color: selectedColor,
        image: selectedImage
      });
    } else {
      setSelectedCard(null);
    }
  };

  const images = [
    { src: '../src/assets/car1.jpg', alt: 'Car 1' },
    { src: '../src/assets/car2.jpg', alt: 'Car 2' },
    { src: '../src/assets/car3.jpg', alt: 'Car 3' },
    { src: '../src/assets/car4.jpg', alt: 'Car 4' },
    { src: '../src/assets/car5.jpg', alt: 'Car 5' },
    { src: '../src/assets/car6.jpg', alt: 'Car 6' },
    { src: '../src/assets/car7.jpg', alt: 'Car 7' },
    { src: '../src/assets/car8.jpg', alt: 'Car 8' },
    { src: '../src/assets/car9.jpg', alt: 'Car 9' },
  ];

  return (
    <div className={style.wrapper}>
    <div className={style.container}>
      <div>
        <input
         type="color"
         value={selectedColor}
         onChange={handleColorChange}
         />
      </div>
      <div className={style.img}>
        {images.map((image, index) => (
          <img
         
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: '100px', height:"100px" ,cursor: 'pointer' , border:"1px solid black"}}
            onClick={() => handleImageSelect(image)}
          />
        ))}
      </div>
      <div >
        {selectedCard && (
          <div >
            <p>Selected Color: {selectedCard.color}</p>
            <img src={selectedCard.image.src} alt={selectedCard.image.alt} style={{ width: '200px', height:"200px" }} />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};
export default Cards