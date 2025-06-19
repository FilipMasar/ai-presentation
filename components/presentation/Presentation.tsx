'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { slides } from './slides';
import { SlideContent } from './SlideContent';
import { Navigation } from './Navigation';
import { Timeline } from './Timeline';

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1);

  console.log('Presentation component initialized with slide:', currentSlide);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    console.log('Moving to next slide from:', currentSlide);
    setCurrentSlide(prev => prev < totalSlides ? prev + 1 : prev);
  }, [currentSlide, totalSlides]);

  const previousSlide = useCallback(() => {
    console.log('Moving to previous slide from:', currentSlide);
    setCurrentSlide(prev => prev > 1 ? prev - 1 : prev);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key);
      
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          previousSlide();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, previousSlide]);

  const currentSlideData = slides.find(slide => slide.id === currentSlide);

  if (!currentSlideData) {
    console.error('Slide not found for id:', currentSlide);
    return null;
  }

  return (
    <div className="min-h-screen bg-dark-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      {/* Main slide content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <SlideContent
            key={currentSlide}
            slide={currentSlideData}
            isActive={true}
          />
        </AnimatePresence>
      </div>

      {/* Timeline component */}
      <Timeline currentSlide={currentSlide} />

      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
    </div>
  );
}