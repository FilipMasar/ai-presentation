export interface Slide {
  id: number;
  type:
    | 'title'
    | 'content'
    | 'timeline'
    | 'emoji'
    | 'bullets'
    | 'diagram'
    | 'quote'
    | 'visual'
    | 'pipeline'
    | 'how-did-we-get-here'
    | 'perceptron'
    | 'neural-network'
    | 'transformer'
    | 'final';
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
  pipeline?: Array<{
    label: string;
    emoji?: string;
  }>;
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
    type: 'bullets',
    title: 'Pretraining',
    bullets: [
      'Massive web-scale corpus',
      'Self-supervised next-token prediction',
      'Base model emerges'
    ]
  },
  {
    id: 26,
    type: 'bullets',
    title: 'Supervised Fine Tuning',
    bullets: [
      'Curated question/answer pairs',
      'Model learns to follow instructions',
      'Produces an SFT model'
    ]
  },
  {
    id: 27,
    type: 'bullets',
    title: 'RLHF',
    bullets: [
      'Humans rank model outputs',
      'Train reward model on preferences',
      'Optimize with reinforcement learning'
    ]
  },
  {
    id: 28,
    type: 'pipeline',
    title: 'Training Pipeline',
    pipeline: [
      { label: 'Pretraining', emoji: '📚' },
      { label: 'SFT', emoji: '🛠️' },
      { label: 'RLHF', emoji: '👍' },
      { label: 'ChatGPT', emoji: '🤖' }
    ]
  },
  {
    id: 29,
    type: 'content',
    title: 'Obviously this can\'t be everything to chatGPT',
    subtitle: 'Back to timeline...'
  },
  {
    id: 30,
    type: 'title',
    title: 'GPT-2'
  },
  {
    id: 31,
    type: 'bullets',
    title: 'Prompt Engineering',
    bullets: [
      'Zero/Few-Shot examples',
      'Role prompting'
    ]
  },
  {
    id: 32,
    type: 'bullets',
    title: 'Reasoning Strategies',
    bullets: [
      'Chain-of-Thought (CoT)',
      'Tree-of-Thought (ToT)'
    ]
  },
  {
    id: 33,
    type: 'bullets',
    title: 'Tool Use & Augmentation',
    bullets: [
      'ReAct pattern',
      'Retrieval-Augmented Generation (RAG)',
      'Function calling & APIs'
    ]
  },
  {
    id: 34,
    type: 'title',
    title: 'Now these are being baked into the model'
  },
  {
    id: 35,
    type: 'content',
    title: 'What do we have?',
    subtitle: 'A tool that understands human language'
  },
  {
    id: 36,
    type: 'content',
    title: 'Looks Like Magic ✨',
    subtitle: 'Underneath it predicts tokens'
  },
  {
    id: 37,
    type: 'content',
    title: 'Reasoning & Tools',
    subtitle: 'Add superpowers to the model'
  },
  {
    id: 38,
    type: 'content',
    title: 'Still a Black Box',
    subtitle: 'Interpretable AI tries to explain it'
  },
  {
    id: 39,
    type: 'content',
    title: 'Hope this made things clearer',
    subtitle: "But it's fine if you don't care"
  },
  {
    id: 40,
    type: 'content',
    title: "I don't really know how electricity works ⚡️",
    subtitle: 'And I use it every day'
  },
  {
    id: 41,
    type: 'final',
    title: 'Thank you!',
    subtitle: 'Questions?',
    emoji: '🙏'
  }
];

export const timelineSlides = slides.filter(slide => slide.type === 'timeline');