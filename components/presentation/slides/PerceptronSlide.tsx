'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface PerceptronSlideProps {
  slide: Slide;
}

export function PerceptronSlide({ slide }: PerceptronSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="h-full flex flex-col items-center justify-center space-y-6 p-4">
        {slide.title && (
          <motion.h2 
            variants={textVariants}
            className="text-4xl md:text-5xl font-bold gradient-text text-center"
          >
            {slide.title}
          </motion.h2>
        )}
        
        {slide.subtitle && (
          <motion.p 
            variants={textVariants}
            className="text-xl md:text-2xl text-slate-300 font-light text-center"
          >
            {slide.subtitle}
          </motion.p>
        )}
        
        <motion.div 
          variants={textVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/perceptron.webp"
            alt="Perceptron diagram showing inputs, weights, bias, summation, activation function, and output"
            width={600}
            height={450}
            className="rounded-lg shadow-2xl max-h-[60vh] w-auto object-contain"
            priority
          />
          <p className="text-sm text-slate-400 mt-2 text-center">The Basic Building Block</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
} 