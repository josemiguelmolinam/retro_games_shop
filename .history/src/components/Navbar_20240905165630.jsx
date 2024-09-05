import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo-web.svg';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { Twirl as Hamburger } from 'hamburger-react';
import '../index.css'; // Asegúrate de incluir el archivo CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const ref = useRef(null);

  useClickAway(ref, () => setMenuOpen(false));

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrollingDown(currentScrollTop > lastScrollTop);
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

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

  return (
    <header
      ref={ref}
      className={`fixed w-full z-50 border-b border-gray-700/50 py-2 transition-transform duration-300 ${isScrollingDown ? 'hidden' : 'visible'}`}
      style={{
        backgroundImage: 'url(/assets/images/background.jpg)',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      <nav className='container flex justify-between items-center relative z-50'>
        <div className='flex items-center gap-2'>
          <Link to='/home'>
            <img src={logo} alt='logo' className='h-[75px] ml-10 md:ml-44' />
          </Link>
        </div>
        <div
          className='hidden md:flex items-center ml-12 gap-7'
          style={{
            color: '#03e9f4',
            textShadow:
              '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
            WebkitTextStroke: '1px rgba(0,0,0,0.7)',
          }}
        >
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/cars'>Cars</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className='md:hidden flex items-center mr-4 relative z-50'>
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
