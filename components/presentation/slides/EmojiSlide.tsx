'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from './SlideWrapper';
import { Slide } from '../slides';

interface EmojiSlideProps {
  slide: Slide;
}

export function EmojiSlide({ slide }: EmojiSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-9xl md:text-[12rem] filter drop-shadow-2xl"
        >
          {slide.emoji}
        </motion.div>
      </div>
    </SlideWrapper>
  );
} 