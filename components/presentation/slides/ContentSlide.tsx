'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface ContentSlideProps {
  slide: Slide;
}

export function ContentSlide({ slide }: ContentSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12">
        <motion.h2 
          variants={textVariants}
          className="text-6xl font-bold text-white leading-tight"
        >
          {slide.title}
        </motion.h2>
        {slide.subtitle && (
          <motion.p 
            variants={textVariants}
            className="text-3xl text-slate-300 font-light max-w-3xl leading-relaxed"
          >
            {slide.subtitle}
          </motion.p>
        )}
        {slide.content && (
          <motion.p 
            variants={textVariants}
            className="text-3xl text-slate-300 font-light max-w-3xl leading-relaxed"
          >
            {slide.content}
          </motion.p>
        )}
      </div>
    </SlideWrapper>
  );
} 