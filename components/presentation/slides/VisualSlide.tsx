'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface VisualSlideProps {
  slide: Slide;
}

export function VisualSlide({ slide }: VisualSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      {slide.visual === 'grid' && (
        <div className="space-y-12">
          <motion.h2 
            variants={textVariants}
            className="text-6xl font-bold gradient-text mb-16"
          >
            {slide.title}
          </motion.h2>
          <motion.div 
            variants={textVariants}
            className="grid grid-cols-2 gap-8 max-w-4xl"
          >
            {[
              'Healthcare', 'Transportation', 'Finance', 'Education'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="ai-card text-center py-12 hover:glow transition-all duration-300"
              >
                <div className="text-2xl font-semibold text-white">
                  {item}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </SlideWrapper>
  );
} 