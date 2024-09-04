import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import carsData from './CarsData';
import Carousel from '../components/Carousel';
import Modal from 'react-modal';
import '../index.css';
import ImageZoom from 'react-image-zooom';
import { TiArrowBack } from 'react-icons/ti';

Modal.setAppElement('#root');

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carsData.find((car) => car.id === parseInt(id));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!car) {
    return <h2>Car not found</h2>;
  }

  const galleryImages = [
    { id: 1, src: car.image, alt: `${car.make} ${car.model}` },
    { id: 2, src: car.image, alt: `${car.make} ${car.model}` },
    { id: 3, src: car.image, alt: `${car.make} ${car.model}` },
    { id: 4, src: car.image, alt: `${car.make} ${car.model}` },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleBackClick = () => {
    navigate('/cars');
  };

  return (
    <div className='items-center justify-center text-white md:items-center px-8 py-16 md:py-24 md:px-12'>
      <button onClick={handleBackClick} className='car-info square-button'>
        <TiArrowBack className='icon' />
        <span className='button-text'>Back to Cars</span>
      </button>

      <div className='container items-center justify-center md:mx-28'>
        <h1
          className='text-3xl md:text-4xl mr-10 mb-8 md:ml-[485px] ml-9 font-racing font-bold leading-tight text-center'
          style={{
            color: '#03e9f4',
            textShadow:
              '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
            WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
            display: 'inline-block',
            paddingBottom: '40px',
            marginTop: '80px',
          }}
        >
          {car.make} {car.model}
        </h1>
      </div>

      <div className='flex justify-center md:ml-[30px] mb-8'>
        <div className='md:w-[1200px] w-[380px]'>
          <div className='rounded-xl overflow-hidden'>
            <Carousel images={galleryImages} />
          </div>
        </div>
      </div>

      <div className='px-4 md:px-12'>
        <div className='py-6 text-center rounded-lg mb-8'>
          <h2
            className='text-3xl font-racing mb-16'
            style={{
              color: '#ffffff',
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.8)',
            }}
          >
            Information and Specifications
          </h2>
          <div className='text-gray-300'>
            <div className='md:flex md:justify-center'>
              <p className='mb-4 md:mr-8'>
                <span className='text-cyan-400 font-racing'>Make:</span>{' '}
                {car.make}
              </p>
              <p className='mb-4 md:mr-8'>
                <span className='text-cyan-400 font-racing'>Model:</span>{' '}
                {car.model}
              </p>
              <p className='mb-4 md:mr-8'>
                <span className='text-cyan-400 font-racing'>Year:</span>{' '}
                {car.year}
              </p>
              <p className='mb-4 md:mr-8'>
                <span className='text-cyan-400 font-racing'>Price:</span>{' '}
                {car.price}
              </p>
              <p className='mb-4 md:mr-8'>
                <span className='text-cyan-400 font-racing'>Mileage:</span>{' '}
                {car.mileage}
              </p>
            </div>
            <p className='mb-4'>
              <span className='text-cyan-400 font-racing'>Description:</span>
              <span className='text-gray-300 px-2'>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                id felis non metus consequat dapibus. Integer varius felis nec
                eros fermentum, vel aliquam dolor hendrerit. Sed euismod orci ut
                metus auctor, at aliquam felis aliquam.
              </span>
            </p>
          </div>
        </div>

        <div className='py-6 text-center rounded-lg mb-8'>
          <h2
            className='text-3xl font-racing mb-4'
            style={{
              color: '#ffffff',
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.8)',
            }}
          >
            Photo Gallery
          </h2>
          <div className='grid md:grid-cols-4 mt-16 gap-4'>
            {galleryImages.map((image) => (
              <div key={image.id} className='cursor-pointer'>
                <div className='md:hidden'>
                  <ImageZoom
                    src={image.src}
                    alt={image.alt}
                    className='gallery-img rounded-lg'
                    zoom='300'
                    onClick={() => {}}
                  />
                </div>

                <div className='hidden md:block'>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='gallery-img cursor-pointer w-full h-auto object-cover rounded-md shadow-lg'
                    style={{
                      maxHeight: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                    onClick={() => openModal(image)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-6 text-center rounded-lg'>
          <h2
            className='text-3xl font-racing mb-4'
            style={{
              color: '#ffffff',
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0,0,0,0.8)',
            }}
          >
            Videos
          </h2>
          <div className='mt-16 mx-auto -ml-5 md:mx-0 md:ml-[340px]'>
            <div className='aspect-w-16 w-[380px] h-[300px] md:w-[820px] md:h-[550px] aspect-h-9'>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/VIDEO_ID'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='rounded-lg'
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Image Modal'
        className='modal'
        overlayClassName='modal-overlay'
      >
        {selectedImage && (
          <div className='modal-content'>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='modal-img'
            />
            <button onClick={closeModal} className='modal-close-button'>
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CarDetail;
