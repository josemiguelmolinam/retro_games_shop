import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer
      className='bg-transparent text-white py-12 border-t border-gray-700/50 md:mt-32 lg:mt-32 xl:mt-40'
      style={{
        backgroundImage: `url('./assets/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-gray-300 text-lg mb-4'>About Us</h3>
            <p className=' text-center text-gray-300'>
              Explore the Endless Excellence of Japanese Cars with JDM Legends
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-200 text-lg mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/home' className='link font-racing'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/services' className='link font-racing'>
                  Services
                </Link>
              </li>
              <li>
                <Link to='/contact' className='link font-racing'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/about' className='link font-racing'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-gray-200 text-lg mb-4'>Resources</h3>
            <ul className='text-gray-400 space-y-2'>
              <li>
                <Link to='/faqs' className='link font-racing'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to='/support' className='link font-racing'>
                  Support
                </Link>
              </li>
              <li>
                <Link to='/privacy-policy' className='link font-racing'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-gray-200 text-lg mb-4'>Contact Us</h3>
            <p className='text-gray-300'>Tokyo, Japan</p>
            <p className='text-gray-300'>Email: jdmlegendsimports@gmail.com</p>
            <p className='text-gray-300'>Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className='flex justify-center md:mt-30 md:ml-[1150px] mt-8 space-x-6'>
      
          <a
            href='https://x.com/JDMLegendsCars'
            aria-label='Twitter'
            className='social-link'
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href='https://www.instagram.com/jdmlegendsimports/'
            aria-label='Instagram'
            className='social-link'
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='https://www.youtube.com/@JDMLegendsImports'
            aria-label='YouTube'
            className='social-link'
          >
            <FaYoutube size={24} />
          </a>
        </div>

        <div className='mt-8 border-t border-gray-700 pt-6 text-center'>
          <p className='text-gray-300'>
            © 2024 JDM Legends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

