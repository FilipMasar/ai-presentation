'use client';

import { Slide } from './slides';
import {
  EmojiSlide,
  TitleSlide,
  ContentSlide,
  BulletsSlide,
  QuoteSlide,
  TimelineSlide,
  VisualSlide,
  DiagramSlide,
  InteractiveSlide,
  HowDidWeGetHereSlide,
  PerceptronSlide,
  NeuralNetworkSlide,
  TransformerSlide,
  FinalSlide
} from './slides/';

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
}

export function SlideContent({ slide, isActive }: SlideContentProps) {
  console.log('SlideContent rendering:', slide.id, isActive);

  if (!isActive) return null;

  // Route to the appropriate slide component based on slide type
  switch (slide.type) {
    case 'emoji':
      return <EmojiSlide slide={slide} />;
    
    case 'title':
      return <TitleSlide slide={slide} />;
    
    case 'content':
      return <ContentSlide slide={slide} />;
    
    case 'bullets':
      return <BulletsSlide slide={slide} />;
    
    case 'quote':
      return <QuoteSlide slide={slide} />;
    
    case 'timeline':
      return <TimelineSlide slide={slide} />;
    
    case 'visual':
      return <VisualSlide slide={slide} />;

    case 'interactive':
      return <InteractiveSlide slide={slide} />;

    case 'diagram':
      return <DiagramSlide slide={slide} />;
    
    case 'how-did-we-get-here':
      return <HowDidWeGetHereSlide slide={slide} />;
    
    case 'perceptron':
      return <PerceptronSlide slide={slide} />;
    
    case 'neural-network':
      return <NeuralNetworkSlide slide={slide} />;
    
    case 'transformer':
      return <TransformerSlide slide={slide} />;

    case 'final':
      return <FinalSlide slide={slide} />;
    
    default:
      console.warn('Unknown slide type:', slide.type);
      return null;
  }
}