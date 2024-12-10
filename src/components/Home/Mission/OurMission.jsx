import all from '../../../assets/images/mariosonic.png';
import mando from '../../../assets/images/mando.png';
import garantia from '../../../assets/images/foto-garantia.jpg';

const NuestraMision = () => {
  return (
    <div className='container text-center mt-28 mx-auto'>
      <h1
        className='text-center md:text-center text-[22px] mb-12 font-pixel py-5 lg:text-3xl font-retro leading-tight'
        style={{
          color: '#FFC0CB',
          textShadow:
            '0 0 1px rgba(255, 192, 203, 0.7), 0 0 1px rgba(255, 105, 180, 0.6)',
          WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
          display: 'inline-block',
          paddingTop: '10px',
        }}
      >
        Nuestra Misión
      </h1>

      <div className='flex flex-col md:flex-row justify-center items-center gap-8 mb-24 pt-10'>
        <div className='text-center mb-4'>
          <img
            className='h-[50-px] w-[550px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[500px] rounded-lg mb-4 mx-auto'
            src={all}
            alt='Retro Games Japan'
          />
          <h2
            className='text-[15px] font-retro text-[#00FFFF] mb-3'
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            Juegos Clásicos
          </h2>
          <p
            className='text-gray-300 p-6 text-sm lg:text-base'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.1)',
            }}
          >
            Disfruta de una amplia selección de videojuegos clásicos,
            cuidadosamente seleccionados y traídos directamente desde Japón.
          </p>
        </div>

        <div className='text-center mb-4'>
          <img
            className='h-[300px] w-[300px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-lg mb-4 mx-auto'
            src={mando}
            alt='Retro Games Japan'
          />
          <h2
            className='text-[15px] font-retro text-[#00FFFF] mb-3'
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            Consolas Originales
          </h2>
          <p
            className='text-gray-300 p-6 text-sm lg:text-base'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.1)',
            }}
          >
            Ofrecemos consolas originales retro en excelente estado. Vive la
            nostalgia con hardware auténtico y funcional.
          </p>
        </div>

        <div className='text-center mb-4'>
          <img
            className='h-[300px] w-[300px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-lg mb-4 mx-auto'
            src={garantia}
            alt='Retro Games Japan'
          />
          <h2
            className='text-[15px] font-retro text-[#00FFFF] mb-3'
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            Calidad Garantizada
          </h2>
          <p
            className='text-gray-300 text-sm p-6 lg:text-base'
            style={{
              textShadow:
                '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.1)',
            }}
          >
            Garantizamos que todos los productos son revisados y probados para
            que disfrutes de una experiencia de juego perfecta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuestraMision;
