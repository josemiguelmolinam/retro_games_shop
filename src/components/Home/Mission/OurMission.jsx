import React from 'react';
import img from '../../../../public/jdmlegend.jpg';

const OurMission = () => {
  return (
    <div className='container text-center mt-28 mx-auto'>
      <h1
        className='text-center md:text-center text-3xl mb-8 font-racing py-5 lg:text-4xl font-bold leading-tight'
        style={{
          color: '#03e9f4',
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
          display: 'inline-block',
          paddingTop: '10px',
        }}
      >
        Our Mission
      </h1>

      <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-6 mb-10 py-5'>
        <img
          className='w-full md:mt-14 max-w-sm md:max-w-xl lg:max-w-2xl rounded-lg'
 
          src={img}
          alt='img'
        />
        <div className='text-center md:mt-8 md:ml-14 md:text-left md:w-1/3'>
          {' '}
          <h1
            className='font-racing px-8 md:px-6 text-gray-200 p-4 mt-4 text-2xl lg:text-3xl py-3'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.5)',
              display: 'inline-block',
            }}
          >
            To create a community where every journey is extraordinary
          </h1>
          <p className='mb-4 p-6 px-8 md:px-6 text-gray-300 text-sm lg:text-base md:text-left md:mr-8 md:mb-12'>
            <span className='block mb-8'>
              At JDM Legends, our mission is to share the passion and excellence
              of Japanese cars with the world. We aim to provide our customers
              with access to unique, high-quality vehicles that redefine the
              driving experience.
            </span>
            <span className='block'>
              We are dedicated to ensuring that every car we import and export
              meets the highest standards of quality and authenticity, so that
              every journey becomes a memorable experience.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
