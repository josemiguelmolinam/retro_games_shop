import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ id, img, name, price }) => {
  return (
    <div className='car-container featured-card shadow-lg transition duration-200 ease-linear' key={id}>
      <div className='image-container'>
        <img src={img} alt='img' className='featured-image' />
      </div>
      <div className='content'>
        <h1
          className='font-racing text-[23px] title-color'
          style={{
            color: '#ffffff',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
            WebkitTextStroke: '1px rgba(0,0,0,0.8)',
            display: 'inline-block',
            paddingBottom: '10px',
          }}
        >
          {name}
        </h1>
        <div>
          <Link to={`/car/${id}`}>
            <button className='car-info mt-2 h-[33px] w-[85px] md:h-[35px] md:w-[160px] md:py-1 md:mt-1 mb-6 rounded'>
              INFO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
