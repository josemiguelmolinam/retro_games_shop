import React from 'react';
import { Link } from 'react-router-dom';
import carsData from '../pages/CarsData';

const Cars = () => {
  return (
    <div className='text-white mt-[120px] md:mt-[160px]'>
      <div className='grid text-center'>
        <h1
          className='text-center text-4xl p-6 mb-4 font-racing py-5 lg font-bold leading-tight'
          style={{
            color: '#03e9f4',
            textShadow:
              '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
            WebkitTextStroke: '1px rgba(0,0,0,0.8)',
            display: 'inline-block',
            paddingBottom: '10px',
          }}
        >
          Explore Our Cars
        </h1>
        <div className='grid md:grid-cols-3 px-9 gap-8 mt-8 md:p-10 md:px-20'>
          {carsData.map((car) => (
            <div
              key={car.id}
              className='car-container bg-slate-800 rounded-lg shadow-md border-gray-600 border-[1px]'
              style={{
                marginBottom: '40px',
                marginTop: '20px',
              }}
            >
              <div className='relative rounded-b-sm'>
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className='w-full h-64 object-cover rounded-md'
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <div className='flex justify-between items-center text-gray-200'></div>
                </div>
              </div>
              <div className='bg-slate-800 rounded-b-lg'>
                <h2
                  className='text-2xl mb-2 font-racing'
                  style={{
                    color: '#ffffff',
                    textShadow:
                      '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                    WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                  }}
                >
                  {car.make} {car.model}
                </h2>
                <div className='flex justify-between items-center text-gray-200'>
                  <p className='text-white mb-6 ml-6 font-bold'>
                    Year: {car.year}
                  </p>
                  <Link
                    to={`/car/${car.id}`}
                    className='car-info mt-2 h-[27px] w-[80px] md:h-[35px] md:w-[160px] md:py-1 md:mt-1 mb-6 border rounded'
                  >
                    INFO
                  </Link>
                  <p
                    className='text-xl mb-6 mr-6 font-bold text-yellow-400'
                    style={{
                      textShadow:
                        '0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2)',
                      WebkitTextStroke: '1px rgba(0,0,0,0.1)',
                    }}
                  >
                    {car.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
