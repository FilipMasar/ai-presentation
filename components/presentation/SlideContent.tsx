'use client';

import { motion } from 'framer-motion';
import { Slide } from './slides';
import { ConcentricDiagram } from './ConcentricDiagram';
import { FlowDiagram } from './FlowDiagram';

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
}

export function SlideContent({ slide, isActive }: SlideContentProps) {
  console.log('SlideContent rendering:', slide.id, isActive);

  const slideVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.8 }
    }
  };

  if (!isActive) return null;

  return (
    <motion.div
      key={slide.id}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="slide-content h-screen"
    >
      {slide.type === 'emoji' && (
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
      )}

      {slide.type === 'title' && (
        <div className="space-y-8">
          <motion.h1 
            variants={textVariants}
            className="text-7xl font-black gradient-text leading-tight"
          >
            {slide.title}
          </motion.h1>
          {slide.subtitle && (
            <motion.p 
              variants={textVariants}
              className="text-2xl text-slate-300 font-light tracking-wide"
            >
              {slide.subtitle}
            </motion.p>
          )}
        </div>
      )}

      {slide.type === 'content' && (
        <div className="space-y-12">
          <motion.h2 
            variants={textVariants}
            className="text-6xl font-bold text-white leading-tight"
          >
            {slide.title}
          </motion.h2>
          {slide.subtitle && (
            <motion.p 
              variants={textVariants}
              className="text-3xl text-slate-300 font-light max-w-3xl leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>
          )}
          {slide.content && (
            <motion.p 
              variants={textVariants}
              className="text-3xl text-slate-300 font-light max-w-3xl leading-relaxed"
            >
              {slide.content}
            </motion.p>
          )}
        </div>
      )}

      {slide.type === 'bullets' && (
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
      )}

      {slide.type === 'quote' && (
        <div className="space-y-12 max-w-4xl">
          <motion.blockquote 
            variants={textVariants}
            className="text-5xl font-light text-white leading-relaxed italic"
          >
            "{slide.quote}"
          </motion.blockquote>
          <motion.p 
            variants={textVariants}
            className="text-xl gradient-text font-semibold text-right"
          >
            — {slide.author}
          </motion.p>
        </div>
      )}

      {slide.type === 'timeline' && (
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
      )}

      {slide.type === 'visual' && slide.visual === 'grid' && (
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

            {slide.type === 'diagram' && slide.diagram?.type === 'concentric' && (
        <div className="space-y-12">
          <motion.h2 
            variants={textVariants}
            className="text-6xl font-bold gradient-text mb-16 text-center"
          >
            {slide.title}
          </motion.h2>
          
          <motion.div variants={textVariants}>
            <ConcentricDiagram />
          </motion.div>
        </div>
      )}

      {slide.type === 'diagram' && slide.diagram?.type === 'flow' && (
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
            <FlowDiagram items={slide.diagram.items} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}