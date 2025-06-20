'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface TitleSlideProps {
  slide: Slide;
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-8">
        <motion.h1 
          variants={textVariants}
          className="text-7xl font-black gradient-text leading-tight"
        >
          {slide.title}
        </motion.h1>
        {slide.subtitle && (
          <motion.p 
            variants={textVariants}
            className="text-2xl text-slate-300 font-light tracking-wide"
          >
            {slide.subtitle}
          </motion.p>
        )}
      </div>
    </SlideWrapper>
  );
} 