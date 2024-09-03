import React from 'react';
import img from '../../../assets/images/gtrhero.png';

const Hero = () => {
  return (
    <div className='md:mt-6 text-white md:ml-24'>
      <div className='h-screen container  flex flex-col md:flex-row justify-center items-center'>
        <div className='w-full md:w-2/4 md:mb-24 space-x-5 mt-10 md:order-2 md:mt-0 p-4'>
          <h1
            className='text-[55px] md:ml-[115px] ml-8 mt-8 mb-4 font-racing py-20 lg:text-7xl font-bold leading-tight'
            style={{
              color: '#03e9f4',
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.8)',

              display: 'inline-block',
              paddingBottom: '15px',
            }}
          >
            JDM LEGENDS
          </h1>
          <p
            className='text-[28px] font-racing lg:text-4xl mb-8 p-4 text-gray-200 font-medium'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.5)',
            }}
          >
            Explore the legacy of classic Japanese Cars
          </p>
          <p
            className='text-[14px] font-serif font-semibold p-4 text-gray-300 lg:text-base py-1'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.1)',
            }}
          >
            Welcome to JDM Legends, we specialize in exporting classic Japanese
            vehicles from Japan
          </p>
        </div>

        <div className='w-full py-4 px-7 md:w-2/5 mt-4 md:mt-0 md:order-1'>
          <img src={img} alt='img' className='mt-8 md:mt-16 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
