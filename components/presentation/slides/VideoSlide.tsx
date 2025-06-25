'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface VideoSlideProps {
  slide: Slide;
}

export function VideoSlide({ slide }: VideoSlideProps) {
  const qrSrc = slide.qrUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(slide.qrUrl)}`
    : undefined;

  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-8 flex flex-col items-center">
        {slide.title && (
          <motion.h2
            variants={textVariants}
            className="text-6xl font-bold gradient-text leading-tight text-center"
          >
            {slide.title}
          </motion.h2>
        )}
        {slide.videoUrl && (
          <motion.iframe
            variants={textVariants}
            className="w-full max-w-3xl aspect-video rounded-lg"
            src={slide.videoUrl}
            title={slide.title ?? 'video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {qrSrc && (
          <motion.img
            variants={textVariants}
            src={qrSrc}
            alt="QR code"
            className="w-32 h-32"
          />
        )}
      </div>
    </SlideWrapper>
  );
}
