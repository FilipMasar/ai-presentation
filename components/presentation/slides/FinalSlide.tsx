'use client';

import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface FinalSlideProps {
  slide: Slide;
}

export function FinalSlide({ slide }: FinalSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="flex items-center justify-center gap-12 h-full w-full">
        {/* Main content */}
        <div className="space-y-8 text-center flex-1">
          <motion.h2
            variants={textVariants}
            className="text-6xl font-bold gradient-text"
          >
            {slide.title}
          </motion.h2>
          {slide.subtitle && (
            <motion.p
              variants={textVariants}
              className="text-3xl text-slate-300 font-light"
            >
              {slide.subtitle}
            </motion.p>
          )}
          {slide.emoji && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              className="text-7xl"
            >
              {slide.emoji}
            </motion.div>
          )}
        </div>

        {/* QR Code on the right */}
        {slide.qrUrls && slide.qrUrls.length > 0 && (
          <motion.div
            variants={textVariants}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <QRCode
              value={slide.qrUrls[0]}
              size={200}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
          </motion.div>
        )}
      </div>
    </SlideWrapper>
  );
}
