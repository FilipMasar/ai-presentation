'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface TransformerSlideProps {
  slide: Slide;
}

export function TransformerSlide({ slide }: TransformerSlideProps) {
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
          className="flex items-center justify-center gap-8 max-w-full"
        >
          <div className="flex flex-col items-center">
            <Image
              src="/transformer.webp"
              alt="Transformer architecture diagram"
              width={350}
              height={420}
              className="rounded-lg shadow-2xl max-h-[50vh] w-auto object-contain"
              priority
            />
            <p className="text-sm text-slate-400 mt-2 text-center">Transformer Architecture</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/paper.png"
              alt="Attention is All You Need paper"
              width={280}
              height={420}
              className="rounded-lg shadow-2xl max-h-[50vh] w-auto object-contain"
              priority
            />
            <p className="text-sm text-slate-400 mt-2 text-center">Original Paper</p>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
} 