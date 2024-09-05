import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo-web.svg';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { Twirl as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navUp, setNavUp] = useState(false);
  const navRef = useRef(null);

  const ref = useRef(null);

  useClickAway(ref, () => setMenuOpen(false));

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className='nav-link text-xl font-racing btn'
      onClick={() => setMenuOpen(false)}
    >
      <span className='inline ml-1'>{children}</span>
    </Link>
  );

  const handleMenuToggle = () => setMenuOpen((prevState) => !prevState);

    const handleScroll = () => {
    const sy = window.scrollY;
    const delta = 10;
    const navHeight = 70;

    // Solo activamos si hemos scrolleado más de "delta"
    if (Math.abs(lastScrollY - sy) > delta) {
      // Si hemos scrolleado hacia abajo y superamos el alto del navbar
      if (sy > lastScrollY && sy > navHeight) {
        setNavUp(true); // Ocultamos el navbar
      } else if (sy < lastScrollY) {
        setNavUp(false); // Mostramos el navbar
      }
      setLastScrollY(sy); // Actualizamos la posición de scroll
    }
  };

  useEffect(() => {
    // Añadimos el evento de scroll cuando el componente está montado
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Eliminamos el evento de scroll cuando el componente se desmonta
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependemos de `lastScrollY` para actualizar la función



};

const NavMobile = ({ setMenuOpen }) => {
  const ref = useRef(null);


  useClickAway(ref, () => setMenuOpen(true));

  const NavLinkMobile = ({ to, text }) => (
    <li
      className='w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-350 to-neutral-500 hover:text-cyan-500'
      style={{
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(10px) saturate(180%)',
      }}
    >
      <Link
        to={to}
        className='flex items-center justify-between w-full p-5 rounded-xl bg-slate-900 bg-opacity-75 font-racing btn'
        onClick={() => setMenuOpen(false)}
      >
        <span className='flex gap-1 text-xl'>{text}</span>
      </Link>
    </li>
  );

  return (
    <div
      ref={ref}
      className='fixed left-0 right-0 top-[5rem] p-5 pt-0 bg-[#132c57] bg-opacity-100 border-b border-b-white/20 lg:hidden z-50'
      style={{
        color: '#03e9f4',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
        WebkitTextStroke: '1px rgba(0,0,0,0.7)',
      }}
    >
      <ul className='grid gap-2 mt-5'>
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
