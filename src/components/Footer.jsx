import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer-background text-white py-12'>
      <div className='footer-stars'></div>

      <div className='footer-content container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='font-retro text-sm mb-4 text-[#00FFFF] font-pixel'>
              Sobre Nosotros
            </h3>
            <p className='text-gray-300 font-pixel text-sm'>
              Descubre juegos y consolas retro raros directamente desde Japón.
            </p>
          </div>

          <div>
            <h3 className='font-retro text-sm mb-4 text-[#00FFFF] font-pixel'>
              Enlaces Rápidos
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/home' className='link'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/games' className='link'>
                  Juegos
                </Link>
              </li>
              <li>
                <Link to='/about' className='link'>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to='/contact' className='link'>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-retro text-sm mb-4 text-[#00FFFF] font-pixel'>
              Más Enlaces
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/faq' className='link'>
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to='/privacy-policy' className='link'>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to='/support' className='link'>
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-retro text-sm mb-4 text-[#00FFFF] font-pixel'>
              Síguenos
            </h3>
            <div className='flex justify-center space-x-6'>
              <a
                href='https://x.com/RetroGames'
                className='social-link text-xl'
                aria-label='Twitter'
              >
                <FaXTwitter />
              </a>
              <a
                href='https://www.instagram.com/RetroGamesJapan/'
                className='social-link text-xl'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.youtube.com/RetroGamesJapan'
                className='social-link text-xl'
                aria-label='YouTube'
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} Retro Games Japan. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
