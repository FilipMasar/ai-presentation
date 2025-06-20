'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';
import { ConcentricDiagram } from '../ConcentricDiagram';
import { FlowDiagram } from '../FlowDiagram';

interface DiagramSlideProps {
  slide: Slide;
}

export function DiagramSlide({ slide }: DiagramSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12">
        {slide.title && (
          <motion.h2 
            variants={textVariants}
            className="text-6xl font-bold gradient-text mb-16 text-center"
          >
            {slide.title}
          </motion.h2>
        )}
        
        <motion.div variants={textVariants}>
          {slide.diagram?.type === 'concentric' && <ConcentricDiagram />}
          {slide.diagram?.type === 'flow' && <FlowDiagram items={slide.diagram.items} />}
        </motion.div>
      </div>
    </SlideWrapper>
  );
} 