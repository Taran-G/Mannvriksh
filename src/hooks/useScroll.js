import { useState, useEffect } from 'react';

/**
 * useScroll Hook
 * Tracks the vertical scroll position of the window.
 * @param {number} threshold - The pixel value to trigger the 'scrolled' state.
 * @returns {boolean} - Returns true if the user has scrolled past the threshold.
 */
export const useScroll = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add listener with passive: true for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check in case page is refreshed while already scrolled
    handleScroll();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};