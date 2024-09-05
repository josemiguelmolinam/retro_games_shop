import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo-web.svg';
import { Link } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { Twirl as Hamburger } from 'hamburger-react';
import normalizeWheel from 'normalize-wheel';
import '.css'; // Asegúrate de que este archivo CSS esté importado

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [prevTouchY, setPrevTouchY] = useState(null);
  const ref = useRef(null);

  useClickAway(ref, () => setMenuOpen(false));

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.type === "wheel" || e.type === "scroll") {
        const normalized = normalizeWheel(e);
        let scrollTop = normalized.pixelY;
        if (scrollTop > 0) {
          setIsHeaderHidden(true);
        } else if (scrollTop < 0) {
          setIsHeaderHidden(false);
        }
      } else if (e.type === "touchmove") {
        const touch = e.changedTouches[0];
        const currentTouchY = touch.clientY;

        if (prevTouchY !== null) {
          if (currentTouchY > prevTouchY) {
            setIsHeaderHidden(false);
          } else if (currentTouchY < prevTouchY) {
            setIsHeaderHidden(true);
          }
        }
        setPrevTouchY(currentTouchY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [prevTouchY]);

  const cls = isHeaderHidden ? "hidden" : "";

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className='nav-link'
      onClick={() => setMenuOpen(false)}
    >
      {children}
    </Link>
  );

  const handleMenuToggle = () => setMenuOpen(prevState => !prevState);

  return (
    <header
      ref={ref}
      className={`header ${cls}`}
    >
      <nav>
        <div className='logo'>
          <Link to='/home'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <ul className='nav-menu'>
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/cars'>Cars</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
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

  useClickAway(ref, () => setMenuOpen(false));

  const NavLinkMobile = ({ to, text }) => (
    <li>
      <Link
        to={to}
        className='nav-link-mobile'
        onClick={() => setMenuOpen(false)}
      >
        {text}
      </Link>
    </li>
  );

  return (
    <div
      ref={ref}
      className='nav-mobile'
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
