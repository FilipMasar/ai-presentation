'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function Navigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext
}: NavigationProps) {
  console.log('Navigation rendering:', { currentSlide, totalSlides });

  return (
    <>
      {/* Navigation controls */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed left-8 bottom-8 transform -translate-y-1/2 z-30 space-y-4"
      >
        <button
          onClick={onPrevious}
          disabled={currentSlide === 1}
          className="ai-card p-3 hover:glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="ai-card p-3 hover:glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: currentSlide / totalSlides }}
        className="fixed bottom-0 left-0 h-1 bg-gradient-to-r from-electric-500 to-purple-500 z-30 origin-left"
        style={{ width: '100vw' }}
      />
    </>
  );
}