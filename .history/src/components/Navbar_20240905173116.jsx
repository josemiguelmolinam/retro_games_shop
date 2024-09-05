import { useState } from "react";
import "../index.css";
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
    
  )
  