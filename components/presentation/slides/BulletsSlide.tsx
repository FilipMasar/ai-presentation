'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface BulletsSlideProps {
  slide: Slide;
}

export function BulletsSlide({ slide }: BulletsSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12">
        <motion.h2 
          variants={textVariants}
          className="text-6xl font-bold text-white leading-tight"
        >
          {slide.title}
        </motion.h2>
        <motion.ul 
          variants={textVariants}
          className="space-y-6 text-3xl text-slate-300 font-light max-w-3xl"
        >
          {slide.bullets?.map((bullet, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-electric-500 to-purple-500 rounded-full flex-shrink-0" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SlideWrapper>
  );
} 