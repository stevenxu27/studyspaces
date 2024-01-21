import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import './ScrollFadeIn.css';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className: string; // Add className prop
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('fadeInElement');
    const rect = element?.getBoundingClientRect();
    const isInViewport = rect?.top! >= 0 && rect?.bottom! <= window.innerHeight;

    if (isInViewport && !isVisible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <Element name="fadeInElement">
      <div className={`${className} ${isVisible ? 'fade-in' : ''}`}>
        {children}
      </div>
    </Element>
  );
};

export default ScrollFadeIn;
