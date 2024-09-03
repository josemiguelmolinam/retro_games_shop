import React, { useState, useEffect } from 'react';
import '../index.css';

const Carousel = ({ images }) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);

  const handleNext = () => {
    if (counter !== images.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePrev = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(images.length);
    }
  };

  const handlePage = (page) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [pause, counter]);

  return (
    <div
      className='carousel-container'
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <div className='carousel-slide'>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              counter - 1 === index ? 'carousel-show' : 'carousel-not-show'
            }
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className='carousel-page'>
        {images.map((_, index) => (
          <span
            key={index}
            className={
              counter - 1 === index ? 'carousel-dot active' : 'carousel-dot'
            }
            onClick={() => handlePage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
