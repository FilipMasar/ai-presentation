'use client';

import { motion } from 'framer-motion';
import { timelineSlides } from './slides';

interface TimelineProps {
  currentSlide: number;
}

export function Timeline({ currentSlide }: TimelineProps) {
  console.log('Timeline rendering with currentSlide:', currentSlide);
  
  // Simplified timeline data with cleaner labels
  const timelineData = [
    { year: '1950', event: 'Turing Test', slideId: 4 },
    { year: '1956', event: 'AI Born', slideId: 5 },
    { year: '1960s', event: 'Investment Era', slideId: 6 },
    { year: '1970s', event: 'AI Winter', slideId: 7 },
    { year: '2000s', event: 'ML & Big Data', slideId: 8 },
    { year: '2012', event: 'Deep Learning', slideId: 9 },
    { year: '2022', event: 'Generative AI', slideId: 10 },
  ];

  // Get slide IDs of timeline slides for position calculation
  const timelineSlideIds = timelineSlides.map(slide => slide.id);

  const getTimelinePosition = () => {
    const currentIndex = timelineSlideIds.indexOf(currentSlide);
    if (currentIndex === -1) return 0;
    return (currentIndex / (timelineSlideIds.length - 1)) * 100;
  };

  const isTimelineSlide = timelineSlideIds.includes(currentSlide);

  if (!isTimelineSlide) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-8 left-0 right-0 z-30 flex justify-center pointer-events-none"
    >
      <div className="ai-card px-16 py-8 w-full max-w-6xl mx-8 pointer-events-auto">
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-medium text-slate-400">AI Evolution</span>
          <span className="text-sm text-slate-500">
            {timelineSlideIds.indexOf(currentSlide) + 1} / {timelineSlideIds.length}
          </span>
        </div>
        
        <div className="relative">
          {/* Timeline dots container */}
          <div className="flex justify-between items-start relative">
            {/* Timeline line - positioned to go through the dots */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-700" />
            
            {/* Progress line - positioned to go through the dots */}
            <motion.div
              className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-electric-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: `${getTimelinePosition()}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            
            {timelineData.map((item, index) => {
              const isActive = item.slideId === currentSlide;
              const isCompleted = item.slideId < currentSlide;
              
              return (
                <div key={item.slideId} className="flex flex-col items-center flex-1">
                  <motion.div
                    className={`timeline-dot ${
                      isActive ? 'active' : isCompleted ? 'completed' : 'inactive'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  />
                  <div className="mt-6 text-center">
                    <div className={`text-xl font-bold ${
                      isActive ? 'text-electric-400' : isCompleted ? 'text-purple-400' : 'text-slate-400'
                    }`}>
                      {item.year}
                    </div>
                    <div className={`text-base mt-2 ${
                      isActive ? 'text-white' : 'text-slate-500'
                    }`}>
                      {item.event}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}