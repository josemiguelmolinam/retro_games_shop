import React from 'react';
import request from '../assets/images/request.png';
import advice from '../assets/images/advice.png';
import deposit from '../assets/images/reservation-deposit.png';
import search from '../assets/images/vehicle-search.png';
import payment from '../assets/images/vehicle-payment.png';
import shipping from '../assets/images/shipping.png';
import documentation from '../assets/images/documentation.png';
import delivery from '../assets/images/delivery.png';

const Services = () => {
  return (
    <div className='container text-center mx-auto mt-[150px] md:mt-[160px] my-24'>
      <h1
        className='text-center md:text-center text-3xl mb-16 font-racing py-5 lg:text-4xl font-bold leading-tight'
        style={{
          color: '#03e9f4',
          textShadow:
            '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
          WebkitTextStroke: '1px rgba(0,0,0,0.8)',
          display: 'inline-block',
          paddingBottom: '10px',
        }}
      >
        How it Works
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div className='text-center'>
          <img
            src={request}
            alt='Request Received'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-2 service-image {
              width: 400px;
              height: 250px;
              transition: transform 0.3s ease-in-out;
            }
            
            .service-image:hover {
              transform: scale(0.95);
            }
            '
          />
        </div>
        <div className='text-center'>
          <img
            src={advice}
            alt='Advice'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-1 service-image'
          />
        </div>
        <div className='text-center'>
          <img
            src={deposit}
            alt='Reservation Deposit'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-1 service-image'
          />
        </div>
        <div className='text-center'>
          <img
            src={search}
            alt='Vehicle Search'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-1 service-image'
          />
        </div>
        <div className='text-center'>
          <img
            src={payment}
            alt='Vehicle Payment'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-1 service-image'
          />
        </div>
        <div className='text-center'>
          <img
            src={shipping}
            alt='Shipping'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-3 service-image'
          />
        </div>
        <div className='text-center'>
          <img
            src={documentation}
            alt='Documentation'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-1 md:ml-72 service-image'
          />
        </div>
        <div className='text-center'>
          <img
            src={delivery}
            alt='Delivery'
            className='mx-auto mb-4 h-[250px] w-[400px] md:h-[165px] md:w-[600px] md:py-0 md:px-4 py-10 px-1 md:ml-72 service-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Services;


