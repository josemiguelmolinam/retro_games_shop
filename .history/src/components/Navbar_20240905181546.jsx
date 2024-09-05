import { useState, useEffect, useRef } from "react";
import "../index.css";
import normalizeWheel from "normalize-wheel";

export default function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [prevTouchY, setPrevTouchY] = useState(null);
  const scrollTimeout = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      // desktop scroll
      if (e.type === "wheel" || e.type === "scroll") {
        const normalized = normalizeWheel(e);
        let scrollTop = normalized.pixelY;
        if (scrollTop > 5) {  // Umbral para evitar movimientos pequeños
          setIsHeaderHidden(true);
        } else if (scrollTop < -5) { // Umbral para evitar movimientos pequeños
          setIsHeaderHidden(false);
        }
      } 
      // mobile scroll
      else if (e.type === "touchmove") {
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
    }, 50);  // Ajustar el tiempo para el retraso de la acción
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.changedTouches[0];
    const currentTouchY = touch.clientY;
    setPrevTouchY(currentTouchY);
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const currentTouchY = touch.clientY;
    setPrevTouchY(currentTouchY);
  };

  useEffect(() => {
    // Clean up function to clear the timeout on unmount
    return () => {
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="App"
      // desktop
      onWheel={(e) => handleScroll(e)}
      onScroll={(e) => handleScroll(e)}
      // mobile
      onTouchMove={(e) => handleScroll(e)}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
    >
      <header className={`header ${isHeaderHidden ? "hidden" : ""}`}>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <h2>Hello CodeSandbox</h2>
        <p>Scroll down the page to see the header hiding. Scroll back up to see it reappear!</p>
        {/* Add more content here */}
      </div>
    </div>
  );
}
