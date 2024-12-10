import { useNavigate } from 'react-router-dom';
import tiendaretro from '../assets/images/tienda-retro.jpg';
import teamretrogame from '../assets/images/teamretrogame.jpg';
import { TiArrowBack } from 'react-icons/ti';

const About = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };


  return (
    <div className='text-white py-[120px]'>
      <button
        onClick={handleBackClick}
        className="game-info square-button ml-8">
          <TiArrowBack className='icon' />
        <span className='button-text'>Volver</span>
      </button>
      <div className='container mx-auto px-12'>
        <h1
          className='text-center ml-3 text-[22px] mt-12 md:mt-24 md:text-center text-2xl mb-8 font-pixel py-5 lg:text-3xl font-retro leading-tight'
          style={{
            color: '#FFC0CB',
            textShadow:
              '0 0 1px rgba(255, 192, 203, 0.7), 0 0 1px rgba(255, 105, 180, 0.6)',
            WebkitTextStroke: '1px rgba(0, 0, 0, 0.8)',
            display: 'inline-block',
            paddingTop: '10px',
          }}
        >
          Sobre Nosotros
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='about-content'>
            <h2
              className='text-2xl text-center md:mr-14 text-[#00FFFF] font-racing'
              style={{
                textShadow:
                  '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
              }}
            >
              Nuestra Historia
            </h2>
            <p className='text-gray-300 mt-12 leading-7'>
              Desde sus inicios, Retro Games Japan ha sido impulsado por una
              profunda pasión por los videojuegos clásicos. Fundada con la
              visión de compartir la icónica cultura gamer japonesa con
              entusiastas de todo el mundo, nuestra historia comenzó con un
              enfoque singular: traer lo mejor del gaming retro japonés a una
              audiencia global.
              <br />
              <br />
              Estamos comprometidos a seleccionar y ofrecer solo las consolas y
              juegos más emblemáticos que Japón tiene para ofrecer. Cada
              producto cumple con rigurosos estándares de calidad y
              autenticidad, asegurando que nuestros clientes reciban artículos
              que no solo cumplan, sino que superen sus expectativas. Nuestra
              dedicación a la excelencia va de la mano con una atención al
              cliente excepcional, haciendo que cada interacción con Retro Games
              Japan sea memorable y satisfactoria.
              <br />
              <br />A medida que seguimos creciendo, nuestra misión sigue siendo
              la misma: ser el destino principal para los amantes de los
              videojuegos retro que buscan revivir la magia y la nostalgia del
              gaming clásico japonés.
            </p>
          </div>
          <div className='about-image md:flex md:items-center'>
            <img
              className='w-[500px] h-auto md:h-[500px] md:ml-[100px] md:w-[550px] mt-6 rounded-lg object-cover'
              src={tiendaretro}
              alt='Imagen de tienda de videojuegos retro'
            />
          </div>
        </div>

        <div className='grid grid-cols-1  md:grid-cols-2 gap-12 mt-12'>
          <div className='about-content'>
            <h2
              className='text-2xl text-center text-[#00FFFF] font-racing'
              style={{
                textShadow:
                  '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                WebkitTextStroke: '1px rgba(0,0,0,0.8)',
              }}
            >
              Nuestro Equipo
            </h2>
            <p className='text-gray-300 mt-12 leading-7'>
              En Retro Games Japan, contamos con un equipo apasionado de
              expertos en videojuegos retro y cultura japonesa,dedicados a
              ofrecer una experiencia única para todos los amantes del gaming
              clásico, cada miembro de nuestro equipo comparte una profunda
              admiración por los juegos retro, lo que nos permite ofrecer un
              servicio excepcional y personalizado a nuestros clientes.
              <br />
              <br />
              Nos enorgullece tener una selección cuidadosamente curada de
              videojuegos, consolas y artículos coleccionables de distintas
              épocas, desde los primeros juegos de 8 bits hasta los títulos más
              icónicos de los 90, además, nos aseguramos de que todos nuestros
              productos sean auténticos, funcionales y en excelentes
              condiciones, ya seas un coleccionista
              <br />
              <br />
              experimentado o alguien que busca revivir los momentos más
              nostálgicos de su infancia en Retro Games Japan encontrarás lo que
              buscas, además, ofrecemos asesoramiento experto y un ambiente
              amigable para que tu experiencia de compra sea aún más especial.
              ¡Ven a visitarnos y sumérgete en el emocionante mundo del retro
              gaming!
            </p>
          </div>
          <div className='about-image md:flex md:items-center'>
            <img
              className='w-full h-auto md:h-[500px] md:ml-[100px] md:w-[550px] mt-6 rounded-lg object-cover'
              src={teamretrogame}
              alt='Miembro del equipo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
