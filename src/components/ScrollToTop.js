import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTop = () => {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    useEffect(() => {
  
      let scrollPosition = 0;
  
      const isScrollingDown = () => {      
        let scrollingDown = false;
        let newScrollPosition = window.pageYOffset;
        if (newScrollPosition > scrollPosition) {
          scrollingDown = true;
        }
        scrollPosition = newScrollPosition;
        return scrollingDown;
      };
      
      const handleScroll = () => {
        const scrollToTopButton = document.querySelector('[data-backToTopButton]');
        if (isScrollingDown() || window.pageYOffset == 0) {
          scrollToTopButton.classList.add('opacity-0', 'invisible');
          scrollToTopButton.classList.remove('opacity-100', 'visible');
        } else {
          scrollToTopButton.classList.remove('opacity-0', 'invisible');
          scrollToTopButton.classList.add('opacity-100', 'visible');
        }
      };
      
      window.addEventListener("scroll", handleScroll);
  
    });
  
  return (
    <motion.div
    data-backToTopButton role="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top"
    className="fixed bottom-4 right-2 z-10 bg-primary text-dark dark:bg-primaryDark dark:text-dark
    group w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-back-to-top opacity-0 invisible
    border border-solid border-dark dark:border-light" 
    whileHover={{scale:1.05}}
    transition={{duration:0.2}}
    >
        个
    </motion.div>
  )
}

export default ScrollToTop