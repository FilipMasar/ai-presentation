'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface TimelineSlideProps {
  slide: Slide;
}

export function TimelineSlide({ slide }: TimelineSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-16">
        <motion.div 
          variants={textVariants}
          className="text-center space-y-8"
        >
          <div className="text-8xl font-black gradient-text">
            {slide.timelineYear}
          </div>
          <div className="text-3xl text-white font-medium">
            {slide.timelineEvent}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
} 