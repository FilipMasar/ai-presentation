'use client';

import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface VideoSlideProps {
  slide: Slide;
}

export function VideoSlide({ slide }: VideoSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="flex items-center justify-center gap-12 h-full w-full">
        {/* Videos on the left */}
        {slide.videoUrls && slide.videoUrls.length > 0 && (
          <div className="flex-1 grid grid-cols-1 gap-8 max-w-4xl">
            {slide.videoUrls.map((video, index) => (
              <motion.iframe
                key={index}
                variants={textVariants}
                className="w-full aspect-video rounded-lg shadow-lg"
                src={video.url}
                title={video.title ?? `video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
          </div>
        )}

        {/* QR Code on the right */}
        {slide.qrUrls && slide.qrUrls.length > 0 && (
          <motion.div
            variants={textVariants}
            className="p-8 bg-white rounded-lg shadow-lg"
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
