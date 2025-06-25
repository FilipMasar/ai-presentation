export interface Slide {
  id: number;
  type: 'title' | 'content' | 'timeline' | 'emoji' | 'bullets' | 'diagram' | 'quote' | 'visual' | 'how-did-we-get-here' | 'perceptron' | 'neural-network' | 'transformer';
  title?: string;
  subtitle?: string;
  content?: string;
  emoji?: string;
  bullets?: string[];
  timelineYear?: string;
  timelineEvent?: string;
  animation?: string;
  quote?: string;
  author?: string;
  visual?: string;
  diagram?: {
    type: 'hierarchy' | 'flow' | 'nested' | 'concentric';
    items: Array<{
      name: string;
      description?: string;
      level?: number;
      children?: string[];
    }>;
  };
}

export const slides: Slide[] = [
  {
    id: 1,
    type: 'emoji',
    emoji: '🤖'
  },
  {
    id: 2,
    type: 'title',
    title: 'What is AI?'
  },
  {
    id: 3,
    type: 'title',
    title: 'How do tools like ChatGPT work?'
  },
  {
    id: 4,
    type: 'timeline',
    title: 'AI Timeline',
    timelineYear: '1950',
    timelineEvent: 'Turing Test'
  },
  {
    id: 5,
    type: 'timeline',
    title: 'AI Timeline',
    timelineYear: '1956',
    timelineEvent: 'Artificial Intelligence'
  },
  {
    id: 6,
    type: 'timeline',
    title: 'AI Timeline',
    timelineYear: '1950-1970',
    timelineEvent: 'Government Investment Era'
  },
  {
    id: 7,
    type: 'timeline',
    title: 'AI Timeline',
    timelineYear: '1970-1990',
    timelineEvent: 'AI Winter'
  },
  {
    id: 8,
    type: 'timeline',
    title: 'AI Timeline',
    timelineYear: '2000s-Present',
    timelineEvent: 'Machine Learning & Big Data'
  },
  {
    id: 9,
    type: 'timeline',
    title: 'AI Timeline',
    timelineYear: '2012',
    timelineEvent: 'Deep Learning Revolution'
  },
  {
    id: 10,
    type: 'timeline',
    title: 'AI Timeline',
    timelineYear: '2022',
    timelineEvent: 'Generative AI Era'
  },
  {
    id: 11,
    type: 'how-did-we-get-here',
    title: 'So how do we get here?'
  },
  {
    id: 12,
    type: 'title',
    title: 'Machine Learning'
  },
  {
    id: 13,
    type: 'diagram',
    diagram: {
      type: 'flow',
      items: [
        {
          name: 'Classical Programming',
          description: 'Rules + Data → Answers',
          level: 0
        },
        {
          name: 'Machine Learning',
          description: 'Data + Answers → Rules',
          level: 1
        }
      ]
    }
  },
  {
    id: 14,
    type: 'bullets',
    title: 'Many Approaches',
    bullets: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Reinforcement Learning'
    ]
  },
  {
    id: 15,
    type: 'bullets',
    title: 'Many Architectures',
    bullets: [
      'Linear Regression',
      'Decision Trees',
      'Support Vector Machines',
      'CNN, GAN, ...'
    ]
  },
  {
    id: 16,
    type: 'perceptron',
    title: 'The Perceptron',
    subtitle: '1957'
  },
  {
    id: 17,
    type: 'neural-network',
    title: 'Neural Networks',
    subtitle: 'Multiple Perceptrons Working Together'
  },
  {
    id: 18,
    type: 'content',
    title: 'This is the model',
    subtitle: 'This is the brain of AI'
  },
  {
    id: 19,
    type: 'bullets',
    title: 'Deep Learning',
    bullets: [
      'Reviews → 0, 1 (sentiment)',
      'Image → cat or dog',
      'Text → predict next word'
    ]
  },
  {
    id: 20,
    type: 'transformer',
    title: '2017: Transformers',
    subtitle: '"Attention is All You Need"'
  },
  {
    id: 21,
    type: 'content',
    title: 'Evolution',
    subtitle: 'Perceptron → Neural Networks → Transformers'
  },
  {
    id: 22,
    type: 'title',
    title: 'Generative AI'
  },
  {
    id: 23,
    type: 'bullets',
    title: 'The Recipe',
    bullets: [
      'Data (the internet)',
      'Architecture (transformer)',
      'Powerful hardware',
      'Train for months'
    ]
  },
  {
    id: 24,
    type: 'content',
    title: 'Output?',
    subtitle: 'Token prediction model - LLM'
  },
  {
    id: 25,
    type: 'content',
    title: 'Obviously this can\'t be everything to chatGPT',
    subtitle: 'Back to timeline...'
  },
  {
    id: 26,
    type: 'title',
    title: 'GPT-2'
  },
  {
    id: 27,
    type: 'bullets',
    title: 'Prompt Engineering',
    bullets: [
      'Zero/Few-Shot examples',
      'Role prompting'
    ]
  },
  {
    id: 28,
    type: 'bullets',
    title: 'Reasoning Strategies',
    bullets: [
      'Chain-of-Thought (CoT)',
      'Tree-of-Thought (ToT)'
    ]
  },
  {
    id: 29,
    type: 'bullets',
    title: 'Tool Use & Augmentation',
    bullets: [
      'ReAct pattern',
      'Retrieval-Augmented Generation (RAG)',
      'Function calling & APIs'
    ]
  },
  {
    id: 30,
    type: 'title',
    title: 'Now these are being baked into the model'
  },
  {
    id: 31,
    type: 'content',
    title: 'What do we have?',
    subtitle: 'A tool that understands human language'
  },
  {
    id: 32,
    type: 'content',
    title: 'Conclusion',
    subtitle: 'It\'s a black box - even to people who work with it'
  },
  {
    id: 33,
    type: 'title',
    title: 'Interpretable AI'
  },
  {
    id: 34,
    type: 'content',
    title: 'But on a higher level',
    subtitle: 'It doesn\'t have to be'
  },
  {
    id: 35,
    type: 'content',
    title: 'You know it\'s a token generator',
    subtitle: '+ all the tools'
  },
  {
    id: 36,
    type: 'content',
    title: 'If you don\'t care how it works',
    subtitle: 'That\'s OK'
  },
  {
    id: 37,
    type: 'content',
    title: 'I don\'t really know how electricity works',
    subtitle: 'And I use it every day'
  }
];

export const timelineSlides = slides.filter(slide => slide.type === 'timeline');