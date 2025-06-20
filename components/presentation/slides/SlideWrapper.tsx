'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideWrapperProps {
  children: ReactNode;
  slideId: number;
  className?: string;
}

export function SlideWrapper({ children, slideId, className = '' }: SlideWrapperProps) {
  const slideVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      key={slideId}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`slide-content h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
}

export const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.2, duration: 0.8 }
  }
}; 