import { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/retro.gif';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import { Twirl as Hamburger } from 'hamburger-react';
import fondomovilmario from '../assets/images/fondomovilmario.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [navbarVisible, setNavbarVisible] = useState(true);
  const ref = useRef(null);
  useClickAway(ref, () => setMenuOpen(true));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }

      if (currentScrollTop < 80 || scrollDirection === 'down') {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, scrollDirection]);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className='nav-link text-sm md:text-sm font-pixel hover:text-rose-500 transition-all duration-300 ease-in-out mx-3'
      onClick={() => setMenuOpen(false)}
    >
      {children}
    </Link>
  );

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: navbarVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      className='fixed w-full z-20 py-2'
      style={{
        backgroundImage: 'linear-gradient(90deg, #FF1493, #1E90FF)',
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 6s ease infinite',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
      }}
    >
      <nav className='container flex justify-between items-center'>
        <div className='flex items-center gap-4 ml-4'>
          <Link to='/home' className='flex items-center gap-4'>
            <img
              src={logo}
              alt='Retro Games Japan'
              className='h-[60px] md:h-[65px] mr-[15px]'
            />
            <span
              className='font-racing text-[23px] mr-[15px] md:text-[30px] text-[#00FFFF]'
              style={{
                textShadow:
                  '2px 2px 4px rgba(0, 0, 0, 0.8), 0 4px 6px rgba(0, 255, 255, 0.7)',
              }}
            >
              Retro Games Japan
            </span>
          </Link>
        </div>

        <div className='hidden md:flex gap-8 items-center'>
          <NavLink to='/home'>Inicio</NavLink>
          <NavLink to='/games'>Juegos</NavLink>
          <NavLink to='/about'>Team</NavLink>
          <NavLink to='/contact'>Contacto</NavLink>
        </div>

        <div className='mr-2 md:hidden'>
          <Hamburger
            toggled={menuOpen}
            toggle={handleMenuToggle}
            size={28}
            color='#39ff14'
            className='hover:text-[#39ff14] transition-all duration-300'
          />
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ type: 'spring', stiffness: 150, damping: 25 }}
                className='fixed top-[66px] right-0 w-full h-screen flex flex-col items-center justify-center text-white text-2xl z-30'
                style={{
                  backgroundImage: `url(${fondomovilmario})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <NavLink to='/home'>Inicio</NavLink>
                <NavLink to='/games'>Juegos</NavLink>
                <NavLink to='/about'>Team</NavLink>
                <NavLink to='/contact'>Contacto</NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
