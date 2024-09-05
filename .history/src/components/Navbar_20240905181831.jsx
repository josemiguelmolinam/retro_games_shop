import { useState, useEffect } from "react";
import ".css";

export default function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [prevTouchY, setPrevTouchY] = useState(null);

  const handleScroll = (e) => {
    const currentScrollY = window.scrollY;

    // Desktop scroll
    if (currentScrollY > prevScrollY) {
      setIsHeaderHidden(true); // Scrolling down
    } else {
      setIsHeaderHidden(false); // Scrolling up
    }
    setPrevScrollY(currentScrollY);
  };

  const handleTouchMove = (e) => {
    const touch = e.changedTouches[0];
    const currentTouchY = touch.clientY;

    if (prevTouchY !== null) {
      if (currentTouchY > prevTouchY) {
        setIsHeaderHidden(false); // Swiping down
      } else {
        setIsHeaderHidden(true); // Swiping up
      }
    }
    setPrevTouchY(currentTouchY);
  };

  const handleTouchStart = (e) => {
    const touch = e.changedTouches[0];
    setPrevTouchY(touch.clientY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum, justo a hendrerit dignissim, nisi libero vulputate nulla, nec dapibus sapien enim id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est vitae nulla dictum dapibus. Fusce lacinia vel lorem non luctus.</p>
        <p>Proin vel dolor ac nibh feugiat volutpat. Nullam pharetra lacus vel ligula facilisis, sed bibendum augue vestibulum.</p>
        <p>Etiam sit amet dictum libero. Phasellus quis sapien quam. Donec viverra felis id scelerisque efficitur.</p>
        <p>More content here...</p>
      </div>
    </div>
  );
}


