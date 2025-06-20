'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface InteractiveSlideProps {
  slide: Slide;
}

export function InteractiveSlide({ slide }: InteractiveSlideProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12">
        <motion.h2 
          variants={textVariants}
          className="text-6xl font-bold gradient-text leading-tight text-center"
        >
          {slide.title}
        </motion.h2>
        
        <div className="text-center">
          <motion.button
            variants={textVariants}
            onClick={() => setIsRevealed(!isRevealed)}
            className="px-8 py-4 bg-gradient-to-r from-electric-500 to-purple-500 text-white text-xl font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
          >
            {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
          </motion.button>
        </div>

        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-4xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              {slide.content || slide.subtitle}
            </p>
          </motion.div>
        )}
      </div>
    </SlideWrapper>
  );
} 