'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface HowDidWeGetHereSlideProps {
  slide: Slide;
}

export function HowDidWeGetHereSlide({ slide }: HowDidWeGetHereSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12 flex items-center justify-center flex-col">
        <motion.div variants={textVariants}>
          <NestedBottomDiagram />
        </motion.div>
      </div>
    </SlideWrapper>
  );
}

function NestedBottomDiagram() {
  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center overflow-hidden">
      {/* AI - Largest circle, positioned top-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute w-[580px] h-[580px] rounded-full border-2 border-blue-400/40 bg-blue-500/10"
        style={{ left: '10px', top: '10px' }}
      />
      
      {/* ML - Medium circle, positioned inside AI but shifted down-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute w-[480px] h-[480px] rounded-full border-2 border-purple-400/50 bg-purple-500/12"
        style={{ left: '60px', top: '100px' }}
      />
      
      {/* DL - Smaller circle, positioned inside ML but shifted down-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute w-[380px] h-[380px] rounded-full border-2 border-pink-400/60 bg-pink-500/15"
        style={{ left: '110px', top: '190px' }}
      />
      
      {/* Gen AI - Smallest circle, positioned inside DL but shifted down-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute w-[280px] h-[280px] rounded-full border-2 border-yellow-400/70 bg-yellow-500/20"
        style={{ left: '160px', top: '280px' }}
      />
      
      {/* Labels positioned inside the circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* AI label - inside top area of AI circle */}
        <div className="absolute text-center -translate-x-1/2" style={{ left: '50%', top: '3%' }}>
          <div className="text-3xl mb-2">🤖</div>
          <h3 className="text-lg font-bold text-white">Artificial Intelligence</h3>
        </div>
        
        {/* ML label - inside left area of ML circle */}
        <div className="absolute text-center -translate-x-1/2" style={{ left: '50%', top: '19%' }}>
          <div className="text-2xl mb-2">🧠</div>
          <h3 className="text-base font-bold text-white">Machine Learning</h3>
        </div>
        
        {/* DL label - inside bottom-left area of DL circle */}
        <div className="absolute text-center -translate-x-1/2" style={{ left: '50%', top: '35%' }}>
          <div className="text-xl mb-1">🔗</div>
          <h3 className="text-sm font-bold text-white">Deep Learning</h3>
        </div>
        
        {/* Gen AI label - inside center of Gen AI circle */}
        <div className="absolute text-center -translate-x-1/2" style={{ left: '50%', top: '60%' }}>
          <div className="text-lg mb-1">✨</div>
          <h3 className="text-sm font-bold text-white">Generative AI</h3>
        </div>
      </motion.div>
    </div>
  );
} 