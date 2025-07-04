'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface PipelineSlideProps {
  slide: Slide;
}

export function PipelineSlide({ slide }: PipelineSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12 flex flex-col items-center w-full">
        {slide.title && (
          <motion.h2
            variants={textVariants}
            className="text-6xl font-bold gradient-text text-center"
          >
            {slide.title}
          </motion.h2>
        )}
        <motion.div
          variants={textVariants}
          className="flex items-center justify-center w-full px-8"
        >
          {slide.pipeline?.map((step, index) => (
            <div key={index} className="flex items-center shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="ai-card px-6 py-4 min-w-[150px] text-center"
              >
                {step.emoji && <div className="text-3xl mb-2">{step.emoji}</div>}
                <div className="text-xl font-semibold text-white whitespace-nowrap">
                  {step.label}
                </div>
              </motion.div>
              {index < (slide.pipeline?.length || 0) - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-4xl text-slate-300 px-4"
                >
                  →
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}

