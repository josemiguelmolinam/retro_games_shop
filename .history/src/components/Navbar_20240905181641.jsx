import { useState, useEffect, useRef } from "react";
import "../index.css";
import normalizeWheel from "normalize-wheel";

export default function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [prevTouchY, setPrevTouchY] = useState(null);
  const scrollTimeout = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      // Handle desktop scroll
      if (e.type === "wheel" || e.type === "scroll") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY) {
          setIsHeaderHidden(true);
        } else if (currentScrollY < prevScrollY) {
          setIsHeaderHidden(false);
        }
        setPrevScrollY(currentScrollY);
      } 
      // Handle mobile scroll
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
    }, 50); // Adjust the delay as needed
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.changedTouches[0];
    setPrevTouchY(touch.clientY);
  };

  useEffect(() => {
    const handleScrollEvent = (e) => handleScroll(e);

    window.addEventListener("scroll", handleScrollEvent);
    window.addEventListener("wheel", handleScrollEvent);
    window.addEventListener("touchmove", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("wheel", handleScrollEvent);
      window.removeEventListener("touchmove", handleScrollEvent);
    };
  }, [prevScrollY, prevTouchY]);

  return (
    <div className="App">
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

