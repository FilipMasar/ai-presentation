'use client';

import { motion } from 'framer-motion';

export function ConcentricDiagram() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Outermost circle - AI (shifted down slightly) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute w-[600px] h-[600px] rounded-full border-2 border-white/15 bg-white/5"
        style={{ transform: 'translate(-50%, -40%)' }}
      />
      
      {/* Second circle - ML (shifted down more) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute w-[450px] h-[450px] rounded-full border-2 border-white/20 bg-white/8"
        style={{ transform: 'translate(-50%, -30%)' }}
      />
      
      {/* Third circle - DL (shifted down more) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute w-[300px] h-[300px] rounded-full border-2 border-white/25 bg-white/12"
        style={{ transform: 'translate(-50%, -20%)' }}
      />
      
      {/* Innermost circle - Gen AI (shifted down slightly) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute w-[150px] h-[150px] rounded-full border-2 border-white/30 bg-white/20"
        style={{ transform: 'translate(-50%, -10%)' }}
      />
      
      {/* Labels positioned in top part of each circle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute inset-0"
      >
        {/* AI - Top part of outermost circle */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '10%' }}>
          <div className="text-2xl mb-1">🤖</div>
          <h3 className="text-sm font-bold text-white">Artificial Intelligence</h3>
        </div>
        
        {/* ML - Top part of second circle */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '18%' }}>
          <div className="text-2xl mb-1">🧠</div>
          <h3 className="text-sm font-bold text-white">Machine Learning</h3>
        </div>
        
        {/* DL - Top part of third circle */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '26%' }}>
          <div className="text-2xl mb-1">🔗</div>
          <h3 className="text-sm font-bold text-white">Deep Learning</h3>
        </div>
        
        {/* Gen AI - Top part of innermost circle */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '38%' }}>
          <div className="text-2xl mb-1">✨</div>
          <h3 className="text-sm font-bold text-white">Generative AI</h3>
        </div>
      </motion.div>
    </div>
  );
} 