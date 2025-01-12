'use client';

import React, { useEffect, useState } from 'react';
import { IoMdArrowUp } from "react-icons/io";

const ToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else { 
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center bg-secondary-200 text-primary-500 rounded-lg shadow-lg transition-colors duration-200 hover:bg-gray-700 border-2 border-secondary-200 z-10"
          aria-label="Scroll to top"
        >
          <IoMdArrowUp className="text-xl" fill='white' />
        </button>
      )}
    </>
  );
};

export default ToTop;
