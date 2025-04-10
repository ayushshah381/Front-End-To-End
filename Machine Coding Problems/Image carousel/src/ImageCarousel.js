import React, { useState } from 'react';
import { IMAGES } from './Images';

export default function ImageCarousel() {
  const images = IMAGES;

  // starting from 1st image
  const [currIndex, setCurrIndex] = useState(0);

  const currImage = images[currIndex];

  const handlePrev = () => {
    if (currIndex === 0) {
      setCurrIndex(images.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const handleNext = () => {
    if (currIndex === images.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const handlePagination = (index) => () => {
    setCurrIndex(index);
  };

  const NavBar = ({ data, handlePag }) => {
    return (
      <div className="carousel-pagination-container">
        {data.map((image, index) => {
          return (
            <div className={(index === currIndex) ? 'active' : ''} key={index} onClick={handlePag(index)}>
              {index}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="image-carousel-container">
      <button className="carousel-prev-button" onClick={handlePrev}>
        {'<'}
      </button>
      <div class="image-container">
      <img src={currImage.src} alt={currImage.alt} />
      <NavBar data={images} handlePag={handlePagination} />
      </div>
      <button className="carousel-next-button" onClick={handleNext}>
        {'>'}
      </button>
    </div>
  );
}
