import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';
import emailjs from 'emailjs-com';

Modal.setAppElement('#root');

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await emailjs.send(
        'service_5x0w2uf',
        'template_fgyl73o',
        data,
        '73Ua-iCNYBoRywSyJ'
      );

      setShowConfirmation(true);
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#1e293b',
      borderRadius: '20px',
      padding: '45px',
      border: '3px solid #03e9f4',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <div className='mx-auto mt-[110px] md:mt-[145px] py-6 rounded-xl my-12 p-9 text-white md:max-w-7xl'>
      <h1
        className='ml-24 md:text-center text-[20px] mb-8 font-pixel py-5 lg:text-2xl font-retro leading-tight'
        style={{
          color: '#FFC0CB',
          textShadow:
            '0 0 15px rgba(255, 192, 203, 0.7), 0 0 30px rgba(255, 105, 180, 0.6)',
          WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
          display: 'inline-block',
          paddingTop: '10px',
        }}
      >
        Contacto
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-[50px]'>
        <div className='form-container bg-gradient-to-br from-pink-700 via-blue-700 to-purple-800 p-8 rounded-lg shadow-lg border-2 border-cyan-400 hover:border-pink-400 transition-all duration-300 animate-led-border'>
          <h2
            className='text-2xl font-racing mb-6'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
            }}
          >
            Conéctate con nuestro equipo
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'
            name='contact'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
            action='/success'
          >
            <input type='hidden' name='form-name' value='contact' />
            <div style={{ display: 'none' }}>
              <label>
                Don’t fill this out if you're human: <input name='bot-field' />
              </label>
            </div>

            <div>
              <label htmlFor='name' className='block text-gray-300 mb-1'>
                Nombre
              </label>
              <input
                type='text'
                id='name'
                className='w-full p-3 border border-gray-600 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                {...register('name', { required: true })}
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>
                  Este campo es obligatorio
                </p>
              )}
            </div>

            <div>
              <label htmlFor='email' className='block text-gray-300 mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full p-3 border border-gray-600 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>This field is required</p>
              )}
            </div>

            <div>
              <label htmlFor='subject' className=' text-gray-300 block mb-1'>
                Asunto
              </label>
              <input
                type='text'
                id='subject'
                className='w-full p-3 border border-gray-600 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                {...register('subject', { required: true })}
              />
              {errors.subject && (
                <p className='text-red-500 text-sm'>
                  Este campo es obligatorio
                </p>
              )}
            </div>

            <div>
              <label htmlFor='message' className='text-gray-300 block mb-1'>
                Mensaje
              </label>
              <textarea
                id='message'
                className='w-full p-4 border border-gray-600 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400'
                {...register('message', { required: true })}
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-sm'>
                  Este campo es obligatorio
                </p>
              )}
            </div>

            <button type='submit' className='linka' disabled={loading}>
              {loading ? (
                <div className='flex items-center justify-center'>
                  <ReactLoading
                    type='spin'
                    color='#03e9f4'
                    height={30}
                    width={30}
                  />
                  <span className='ml-2'>Enviando...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        <div className='flex flex-col md:flex-col'>
          <div className='map-container p-1 h-72 w-full md:w-[500px] md:h-[375px] relative z-10'>
            <MapContainer
              center={[35.6895, 139.6917]}
              zoom={13}
              className='h-full w-full rounded-lg overflow-hidden'
            >
              <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[35.6895, 139.6917]}>
                <Popup>
                  <p className='font-racing text-lg'>Retro Games Japan</p>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className='contact-info. md:mr-20 text-center mt-12'>
            <h3 className='text-2xl text-center font-racing text-cyan-300 mb-4'>
              Información de contacto
            </h3>
            <p className='text-gray-300 mb-2'>
              <strong className='text-cyan-400'>Teléfono:</strong> (123)
              456-7890
            </p>
            <p className='text-gray-300 mb-2'>
              <strong className='text-cyan-400 text-center'>Email:</strong>{' '}
              retrogamesjapan@gmail.com
            </p>
            <p className='text-gray-300'>
              <strong className='text-cyan-400 text-center'>Ubicación:</strong>{' '}
              Tokio, Japan
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showConfirmation}
        onRequestClose={() => setShowConfirmation(false)}
        contentLabel='Confirmation Modal'
        style={customStyles}
        closeTimeoutMS={300}
      >
        <div className='flex flex-col items-center justify-center'>
          <MdOutlineMarkEmailRead size={65} color='#03e9f4' />
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-racing font-bold mb-4 text-center text-gray-100 '>
            Thank you for your message!
          </h2>
          <p className='text-center text-gray-300'>
            We will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setShowConfirmation(false)}
            className='linka mt-6'
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
