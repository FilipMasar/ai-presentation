'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface QuoteSlideProps {
  slide: Slide;
}

export function QuoteSlide({ slide }: QuoteSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12 max-w-4xl">
        <motion.blockquote
          variants={textVariants}
          className="text-5xl font-light text-white leading-relaxed italic"
        >
          {slide.quote}
        </motion.blockquote>
        <motion.p 
          variants={textVariants}
          className="text-xl gradient-text font-semibold text-right"
        >
          — {slide.author}
        </motion.p>
      </div>
    </SlideWrapper>
  );
} 