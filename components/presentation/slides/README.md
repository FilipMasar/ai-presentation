# Slide Components Architecture

This directory contains the refactored slide component system that replaces the monolithic `SlideContent.tsx` approach with individual, specialized slide components.

## Benefits of This Architecture

- **Scalability**: Easy to add new slide types without modifying existing code
- **Maintainability**: Each slide type is self-contained and focused
- **Reusability**: Common functionality is shared through `SlideWrapper`
- **Type Safety**: Each component has its own props interface
- **Separation of Concerns**: Rendering logic is separated by slide type

## Core Components

### SlideWrapper
The base wrapper component that provides:
- Common animation variants (`slideVariants`, `textVariants`)
- Consistent layout structure
- Entry/exit animations

### Individual Slide Components
Each slide type has its own component:

- `EmojiSlide` - Large emoji displays
- `TitleSlide` - Title and subtitle combinations
- `ContentSlide` - General content with title/subtitle/content
- `BulletsSlide` - Bulleted lists with animations
- `QuoteSlide` - Formatted quotes with attribution
- `TimelineSlide` - Timeline events with year/description
- `VisualSlide` - Visual layouts (grids, etc.)
- `DiagramSlide` - Renders diagrams (concentric, flow, etc.)

## Adding New Slide Types

### Step 1: Create the Component
Create a new file in the `slides/` directory:

```tsx
// components/presentation/slides/MyCustomSlide.tsx
'use client';

import { motion } from 'framer-motion';
import { SlideWrapper, textVariants } from './SlideWrapper';
import { Slide } from '../slides';

interface MyCustomSlideProps {
  slide: Slide;
}

export function MyCustomSlide({ slide }: MyCustomSlideProps) {
  return (
    <SlideWrapper slideId={slide.id}>
      <div className="space-y-12">
        <motion.h2 
          variants={textVariants}
          className="text-6xl font-bold gradient-text leading-tight"
        >
          {slide.title}
        </motion.h2>
        {/* Your custom content here */}
      </div>
    </SlideWrapper>
  );
}
```

### Step 2: Export the Component
Add the export to `index.ts`:

```tsx
export { MyCustomSlide } from './MyCustomSlide';
```

### Step 3: Update Slide Types
Add your new slide type to the `Slide` interface in `slides.ts`:

```tsx
export interface Slide {
  // ... existing properties ...
  type: 'title' | 'content' | 'timeline' | 'emoji' | 'bullets' | 'diagram' | 'quote' | 'visual' | 'mycustom';
  // Add any custom properties your slide type needs
  myCustomProperty?: string;
}
```

### Step 4: Update SlideContent Router
Add the case to `SlideContent.tsx`:

```tsx
import { MyCustomSlide } from './slides/';

// In the switch statement:
case 'mycustom':
  return <MyCustomSlide slide={slide} />;
```

## Best Practices

1. **Use SlideWrapper**: Always wrap your content in `SlideWrapper` for consistency
2. **Use textVariants**: Apply `textVariants` to text elements for consistent animations
3. **Follow Naming**: Use descriptive names ending in "Slide"
4. **Type Safety**: Define proper TypeScript interfaces for your props
5. **Responsive Design**: Use responsive classes for different screen sizes
6. **Animation Consistency**: Follow the established animation patterns

## Example: InteractiveSlide

The `InteractiveSlide.tsx` demonstrates how to create slides with custom interactivity while maintaining the consistent structure and animations.

## Migration from Old System

The old monolithic approach required modifying a single large file for each slide type. Now:

- **Before**: Add new slide type logic to `SlideContent.tsx`
- **After**: Create new component file and register it in the router

This makes the codebase much more maintainable and allows multiple developers to work on different slide types simultaneously. 