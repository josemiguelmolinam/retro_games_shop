import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gamesData from './gamesData';
import Modal from 'react-modal';
import '../index.css';
import { TiArrowBack } from 'react-icons/ti';

Modal.setAppElement('#root');

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = gamesData.find((game) => game.id === parseInt(id));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!game) {
    return <h2>Juego no Encontrado</h2>;
  }

  const galleryImages = game.images.map((src, index) => ({
    id: index + 1,
    src,
    alt: `${game.title} view ${index + 1}`,
  }));

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleBackClick = () => {
    navigate('/games');
  };

  return (
    <div className='items-center justify-center text-white px-8 py-16 md:py-24 md:px-12'>
      <button onClick={handleBackClick} className='game-info square-button'>
        <TiArrowBack className='icon' />
        <span className='button-text'>Volver</span>
      </button>

      {/* Title */}
      <div className='container items-center justify-center'>
        <h1
          className='text-3xl md:text-2xl font-pixel font-retro leading-tight text-center'
          style={{
            color: '#FF00FF',
            WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)',
            marginBottom: '40px',
            marginTop: '80px',
          }}
        >
          {game.title}
        </h1>
      </div>

      {/* Photo Gallery */}
      <div className='py-6 text-center'>
        <h2
          className='text-3xl font-racing mb-8'
          style={{
            color: '#00FFFF',
            textShadow:
              '0 0 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.7)',
          }}
        >
          Galería de imágenes
        </h2>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
          {galleryImages.map((image) => (
            <div key={image.id} className='cursor-pointer'>
              <img
                src={image.src}
                alt={image.alt}
                className='gallery-img cursor-pointer w-full h-auto object-cover rounded-lg shadow-xl'
                style={{
                  maxHeight: '300px',
                  objectFit: 'cover',
                }}
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='px-4 md:px-12'>
        <div className='py-6 text-center rounded-lg mb-8'>
          <h2
            className='text-3xl font-racing mb-16'
            style={{
              color: '#00FFFF',
              textShadow:
                '0 0 15px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.2)',
            }}
          >
            Información del Juego
          </h2>

          <div className='bg-black p-4 rounded-lg border-4 border-[#FF00FF]'>
            <div className='text-gray-100'>
              <div className='md:flex md:justify-center'>
                <p className='mb-4 md:mr-8'>
                  <span className='text-green-400 font-extrabold'>Título:</span>{' '}
                  {game.title}
                </p>
                <p className='mb-4 md:mr-8'>
                  <span className='text-blue-400 font-extrabold'>Género:</span>{' '}
                  {game.genre}
                </p>
                <p className='mb-4 md:mr-8'>
                  <span className='text-yellow-400 font-extrabold'>Año:</span>{' '}
                  {game.year}
                </p>
                <p className='mb-4 md:mr-8'>
                  <span className='text-purple-400 font-extrabold'>
                    Precio:
                  </span>{' '}
                  {game.price} &euro;
                </p>
                <p className='mb-4'>
                  <span className='text-red-400 font-extrabold'>
                    Plataforma:
                  </span>{' '}
                  {game.platform}
                </p>
              </div>
              <p className='mb-4'>
                <span className='text-cyan-400 font-extrabold'>
                  Descripción:
                </span>
                <span className='text-gray-300 px-2'>{game.description}</span>
              </p>
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Image Modal'
          className='modal'
          overlayClassName='modal-overlay'
          shouldCloseOnOverlayClick={true}
        >
          {selectedImage && (
            <div className='modal-content'>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className='modal-img'
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  margin: 'auto',
                }}
              />
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default GameDetail;
