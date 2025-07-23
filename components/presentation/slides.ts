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
    | 'video'
    | 'pipeline'
    | 'how-did-we-get-here'
    | 'perceptron'
    | 'neural-network'
    | 'transformer'
    | 'image'
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
  image?: string;
  videoUrls?: Array<{ url: string; title?: string }>;
  qrUrls?: string[];
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
    title: 'Sentiment Analysis',
    subtitle: 'Is this review positive or negative?'
  },
  {
    id: 19,
    type: 'content',
    title: 'Image Classification',
    subtitle: 'Is it a cat or a dog?'
  },
  {
    id: 20,
    type: 'content',
    title: 'Next Word Prediction',
    subtitle: 'Predict the next word'
  },
  {
    id: 21,
    type: 'content',
    title: 'Neural Network Model',
    subtitle: 'This is the brain of AI 🧠'
  },
  {
    id: 22,
    type: 'image',
    title: 'Deep Learning',
    subtitle: 'Neural Networks with many layers',
    image: '/deeplearning.webp'
  },
  {
    id: 23,
    type: 'transformer',
    title: '2017: Transformers',
    subtitle: '"Attention is All You Need"'
  },
  {
    id: 24,
    type: 'title',
    title: 'Generative AI'
  },
  {
    id: 25,
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
    id: 26,
    type: 'content',
    title: 'Output?',
    subtitle: 'Token prediction model - base model'
  },
  {
    id: 27,
    type: 'pipeline',
    title: 'Training Pipeline',
    pipeline: [
      { label: 'Pretraining', emoji: '📚' },
      { label: 'SFT', emoji: '🛠️' },
      { label: 'RLHF', emoji: '👍' },
      { label: '"ChatGPT"', emoji: '🤖' }
    ]
  },
  {
    id: 28,
    type: 'image',
    title: 'Textbook analogy',
    image: '/textbook.jpeg'
  },
  {
    id: 29,
    type: 'content',
    title: 'This can\'t be everything to ChatGPT, right?',
  },
  {
    id: 30,
    type: 'title',
    title: 'GPT-3',
    subtitle: 'InstructGPT, 2022'
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
      'Structured Outputs & Function calling'
    ]
  },
  {
    id: 34,
    type: 'title',
    title: 'Now these are being baked into the model',
    subtitle: 'or abstracted away by applications like ChatGPT'
  },
  {
    id: 35,
    type: 'content',
    title: 'What do we have?',
    subtitle: 'A tool that understands human language'
  },
  {
    id: 36,
    type: 'bullets',
    title: 'Beyond Text: Other Modalities',
    subtitle: 'AI can now see, hear, and create',
    bullets: [
      'Images: DALL-E, Midjourney, Stable Diffusion',
      'Audio: Whisper, ElevenLabs, Suno',
      'Video: Sora, Veo 3, Pika',
      'Multimodal: GPT-4V, Claude 3, Gemini Pro'
    ]
  },
  {
    id: 37,
    type: 'image',
    title: 'AlphaFold: Solving Biology',
    subtitle: 'CASP14: From decades of work to minutes of prediction',
    image: '/casp.webp'
  },
  {
    id: 38,
    type: 'image',
    title: 'From Sequence to Structure',
    subtitle: '200M+ proteins predicted • Drug discovery accelerated',
    image: '/alphafold.gif'
  },
  {
    id: 39,
    type: 'content',
    title: 'Looks Like Magic ✨',
    subtitle: 'Underneath it predicts tokens'
  },
  {
    id: 40,
    type: 'content',
    title: 'Reasoning & Tools',
    subtitle: 'Add superpowers to the model'
  },
  {
    id: 41,
    type: 'content',
    title: 'Hope this made things clearer',
    subtitle: "But it's fine if you don't care"
  },
  {
    id: 42,
    type: 'content',
    title: "I don't really know how electricity works ⚡️",
    subtitle: 'And I use it every day'
  },
  {
    id: 43,
    type: 'video',
    videoUrls: [
      {
        url: 'https://www.youtube.com/embed/7xTGNNLPyMI?si=bLdR6gD8M-xc49_a',
        title: 'Demo 1'
      },
      {
        url: 'https://www.youtube.com/embed/EWvNQjAaOHw?si=nZr7irPLrspL-wLM',
        title: 'Demo 2'
      }
    ],
    qrUrls: [
      'https://www.youtube.com/@AndrejKarpathy'
    ]
  },
  {
    id: 44,
    type: 'final',
    title: 'Thank you!',
    subtitle: 'Questions?',
    emoji: '🙏'
  }
];

export const timelineSlides = slides.filter(slide => slide.type === 'timeline');