import React from 'react';

import meet from '../assets/logo-web.svg';

import man from '../assets/images/man.png';
import woman from '../assets/images/woman.png';
import woman2 from '../assets/images/woman2.png';

const About = () => {
  return (
    <div className='text-white py-[120px]'>
      <div className='container mx-auto px-12'>
        <h1
          className='text-center text-4xl mb-16 p-4 font-racing py-5 lg:text-4xl font-bold leading-tight'
          style={{
            color: '#03e9f4',
            textShadow:
              '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
            WebkitTextStroke: '1px rgba(0,0,0,0.8)',
          }}
        >
          About Us
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='about-content'>
            <h2
              className='text-3xl md:mr-14 text-gray-200 font-racing'
              style={{
                textShadow:
                  '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
              }}
            >
              Our History
            </h2>
            <p className='text-gray-300 mt-12 leading-7'>
              From its inception, JDM Legends has been driven by a deep passion
              for Japanese automotive excellence. Founded with the vision of
              bringing Japan's iconic automotive culture to enthusiasts
              worldwide, our journey began with a singular focus to bring the
              legendary performance and craftsmanship of Japanese cars to a
              global audience.
              <br />
              <br />
              We have been dedicated to selecting and exporting only the finest
              vehicles Japan has to offer. Each car we select meets rigorous
              standards of quality and authenticity, ensuring that every
              customer receives a vehicle that not only meets expectations but
              exceeds them. Our commitment to excellence is matched only by our
              dedication to delivering an exceptional customer experience,
              making every interaction with JDM Legends memorable and rewarding.
              <br />
              <br />
              As we continue to grow, our mission remains the same: to be the
              premier destination for enthusiasts seeking the thrill and
              precision of Japanese automotive engineering.
            </p>
          </div>
          <div className='about-image md:flex md:items-center'>
            <img
              className='w-full h-auto md:h-[425px] mt-6 rounded-lg object-cover'
              
              alt='Our Story FOTO 1'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'>
          <div className='about-content'>
            <h2
              className='text-3xl md:mr-14 text-gray-200 font-racing'
              style={{
                textShadow:
                  '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
              }}
            >
              Our Vision
            </h2>
            <p className='text-gray-300 mt-12 leading-7'>
              Our vision is to position ourselves as the global leader in
              exporting the most iconic Japanese vehicles to Spain and Europe.
              We see ourselves as pioneers in opening new frontiers for speed
              and precision enthusiasts, offering exclusive access to an
              exceptional selection of cars that embody the unique essence of
              Japanese engineering.
              <br />
              <br />
              We are committed not only to meeting but also exceeding our
              customers' expectations at every step of the way. We aspire to be
              recognized for our unwavering dedication to quality, authenticity,
              and exceptional service. Through each transaction, our goal is to
              transform the experience of acquiring a vehicle into an exciting
              and rewarding journey that resonates in our customers' memories.
              <br />
              <br />
              Our vision goes beyond merely selling cars; it is about
              cultivating a global community of enthusiasts united by their love
              for Japanese automotive culture, where each vehicle we deliver
              represents a chapter in the history of innovation and excitement
              on wheels. At JDM Legends, we are dedicated to leading the way
              toward a future where excellence and distinction are found in
              every detail of our legendary Japanese cars.
            </p>
          </div>
          <div className='about-image md:flex md:items-center'>
            <img
              className='w-full h-auto md:h-[425px] mt-10 rounded-lg object-cover'
            
              alt='Our Vision FOTO 2'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'>
          <div className='about-content'>
            <h2
              className='text-3xl md:mr-14 text-gray-200 font-racing'
              style={{
                textShadow:
                  '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
              }}
            >
              Our Values
            </h2>
            <p className='text-gray-300 mt-12 leading-7'>
              <strong className='text-cyan-400'>Passion:</strong> We are driven
              by a deep passion for Japanese automotive excellence, fueling our
              commitment to deliver exceptional vehicles and experiences.
              <br />
              <br />
              <strong className='text-cyan-400'>Integrity:</strong> We uphold
              the highest standards of honesty, transparency, and ethical
              conduct in all our operations, ensuring trust and satisfaction
              among our customers and partners.
              <br />
              <br />
              <strong className='text-cyan-400'>Quality:</strong> We
              meticulously select and deliver only the finest Japanese
              automobiles, maintaining unwavering standards of quality and
              authenticity.
              <br />
              <br />
              <strong className='text-cyan-400'>Innovation:</strong> We embrace
              innovation in every aspect of our business, constantly seeking new
              ways to enhance our services and exceed expectations.
              <br />
              <br />
              <strong className='text-cyan-400'>Customer Focus:</strong> Our
              customers are at the heart of everything we do. We strive to
              provide personalized service and build lasting relationships based
              on trust and satisfaction.
              <br />
              <br />
              <strong className='text-cyan-400'>Community:</strong> We foster a
              community of enthusiasts united by their passion for Japanese
              automotive culture, promoting collaboration and mutual
              appreciation.
              <br />
              <br />
              These values embody our commitment to excellence and guide our
              mission to redefine the experience of importing and owning
              legendary Japanese automobiles.
            </p>
          </div>
          <div className='about-image md:flex md:items-center'>
            <img
              className='w-full h-auto md:ml-[130px] md:mt-24 md:h-[430px] md:w-[500px] rounded-lg object-cover'
              src={meet}
              alt='Our Values'
            />
          </div>
        </div>

        <div className='team-section mt-24'>
          <h2
            className='text-center text-4xl mb-24 p-4 font-racing py-5 lg:text-4xl font-bold leading-tight'
            style={{
              color: '#03e9f4',
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.8)',
            }}
          >
            Our Team
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='team-member text-center'>
              <img
                src={man}
                alt='Team Member'
                className='w-32 h-32 mx-auto rounded-full mb-4'
              />
              <h2
                className='text-2xl p-4 text-gray-200 font-racing'
                style={{
                  textShadow:
                    '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                }}
              >
                Jose M. Molina
              </h2>
              <p className='text-gray-400'>CEO</p>
            </div>
            <div className='team-member text-center'>
              <img
                src={woman}
                alt='Team Member'
                className='w-32 h-32 mx-auto rounded-full mb-4'
              />
              <h2
                className='text-2xl p-4 text-gray-200 font-racing'
                style={{
                  textShadow:
                    '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                }}
              >
                Jane Smith
              </h2>
              <p className='text-gray-400'>CTO</p>
            </div>
            <div className='team-member text-center'>
              <img
                src={woman2}
                alt='Team Member'
                className='w-32 h-32 mx-auto rounded-full mb-4'
              />
              <h2
                className='text-2xl  p-4 text-gray-200 font-racing'
                style={{
                  textShadow:
                    '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.8)',
                }}
              >
                Alice Johnsom
              </h2>
              <p className='text-gray-400'>CFO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
