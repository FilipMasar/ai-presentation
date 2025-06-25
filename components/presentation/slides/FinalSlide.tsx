'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface FinalSlideProps {
  slide: Slide;
}

export function FinalSlide({ slide }: FinalSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-8 text-center">
        <motion.h2
          variants={textVariants}
          className="text-6xl font-bold gradient-text"
        >
          {slide.title}
        </motion.h2>
        {slide.subtitle && (
          <motion.p
            variants={textVariants}
            className="text-3xl text-slate-300 font-light"
          >
            {slide.subtitle}
          </motion.p>
        )}
        {slide.emoji && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="text-7xl"
          >
            {slide.emoji}
          </motion.div>
        )}
      </div>
    </SlideWrapper>
  );
}
