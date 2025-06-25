'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';
import QRCode from 'react-qr-code';

interface VideoSlideProps {
  slide: Slide;
}

export function VideoSlide({ slide }: VideoSlideProps) {
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
        {slide.qrUrl && (
          <motion.div variants={textVariants} className="w-32 h-32">
            <QRCode value={slide.qrUrl} size={128} />
          </motion.div>
        )}
      </div>
    </SlideWrapper>
  );
}
