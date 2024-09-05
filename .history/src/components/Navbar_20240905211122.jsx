import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo-web.svg';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { Twirl as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navUp, setNavUp] = useState(false);
  const ref = useRef(null);

  // Cierra el menú al hacer clic fuera de él
  useClickAway(ref, () => setMenuOpen(false));

  const handleMenuToggle = () => setMenuOpen((prevState) => !prevState);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setMenuOpen(false)}
    >
      <span>{children}</span>
    </Link>
  );

  // Manejar el scroll para mostrar/ocultar el navbar
  const handleScroll = () => {
    const sy = window.scrollY;
    const delta = 10; // Sensibilidad para detectar el scroll
    const navHeight = 70; // Altura del navbar

    if (Math.abs(lastScrollY - sy) > delta) {
      if (sy > lastScrollY && sy > navHeight) {
        setNavUp(true); // Ocultar navbar cuando se hace scroll hacia abajo
      } else if (sy < lastScrollY) {
        setNavUp(false); // Mostrar navbar cuando se hace scroll hacia arriba
      }
      setLastScrollY(sy); // Actualizar el último scrollY
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Actualizar cuando cambie `lastScrollY`

  return (
    <header
      ref={ref}
      id='navbar'
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        navUp ? '-top-20' : 'top-0'
      }`} // Aplicar clases condicionales para ocultar el navbar
      style={{
        backgroundImage: 'url(/assets/images/background.jpg)',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      <nav className='container'>
        <div>
          <Link to='/home'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </div>
        <div className='nav-links'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/cars'>Cars</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className='menu-toggle'>
          <Hamburger
            toggled={menuOpen}
            toggle={handleMenuToggle}
            size={28}
            color='#03e9f4'
            duration={0.3}
          />
        </div>
      </nav>
      {menuOpen && <NavMobile setMenuOpen={setMenuOpen} />}
    </header>
  );
};

const NavMobile = ({ setMenuOpen }) => {
  const ref = useRef(null);

  // Cierra el menú móvil al hacer clic fuera de él
  useClickAway(ref, () => setMenuOpen(false));

  const NavLinkMobile = ({ to, text }) => (
    <li>
      <Link
        to={to}
        onClick={() => setMenuOpen(false)}
      >
        <span>{text}</span>
      </Link>
    </li>
  );

  return (
    <div
      ref={ref}
      className='nabvar'
    >
      <ul>
        <NavLinkMobile to='/home' text='Home' />
        <NavLinkMobile to='/cars' text='Cars' />
        <NavLinkMobile to='/services' text='Services' />
        <NavLinkMobile to='/about' text='About Us' />
        <NavLinkMobile to='/contact' text='Contact' />
      </ul>
    </div>
  );
};

export default Navbar;
