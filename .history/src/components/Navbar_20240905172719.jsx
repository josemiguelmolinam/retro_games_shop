import { useState } from "react";
import "./styles.css";
import normalizeWheel from "normalize-wheel";


export default function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [prevTouchY, setPrevTouchY] = useState(null);

  const handleScroll = (e) => {
    e.preventDefault();
    // desktop scroll
    if (e.type === "wheel" || e.type === "scroll") {
      const normalized = normalizeWheel(e);
      let scrollTop = normalized.pixelY;
      console.log(scrollTop);
      if (scrollTop > 0) {
        setIsHeaderHidden(true);
      } else if (scrollTop < 0) {
        setIsHeaderHidden(false);
      }
    } 
    // mobile scroll
    else if (
      e.type === "touchmove"
    ) {
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
    <header className={`header ${isHeaderHidden==true ? "hidden" : ""}`}>
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
        <h2>Hello CodeSandbox</h2>
        <p>Scroll down the page to see the header hiding. Scroll back up to see it reappear!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum, justo a hendrerit dignissim, nisi libero vulputate nulla, nec dapibus sapien enim id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est vitae nulla dictum dapibus. Fusce lacinia vel lorem non luctus.</p>
        <p>Proin vel dolor ac nibh feugiat volutpat. Nullam pharetra lacus vel ligula facilisis, sed bibendum augue vestibulum.</p>
        <p>Etiam sit amet dictum libero. Phasellus quis sapien quam. Donec viverra felis id scelerisque efficitur.</p>
        <p>More content here...</p>
        {
      isHeaderHidden?"yes":"no"
    }
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
