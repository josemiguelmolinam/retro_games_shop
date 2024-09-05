import React, { useState, useEffect, useRef } from 'react';
import '../index.css'; // Asegúrate de importar los estilos CSS

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setTop0); // Mostrar el navbar
    } else {
      setTop(100); // Ocultar el navbar (ajusta el valor según el alto del navbar)
    }
    setPrevScrollpos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div 
      ref={navbarRef}
      id="navbar" 
      style={{ top: `${top}px` }} 
      className="navbar"
    >
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Navbar;


