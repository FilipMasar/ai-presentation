# 🤖 AI Presentation App

Made in [Macaly](macaly.com), fine-tuned in Cursor.

A stunning educational presentation web app that explains **"What is AI and How Do Tools Like ChatGPT Work?"** Built with modern web technologies and inspired by Apple's keynote presentations, Linear's minimalist design, and Stripe's modern gradients.

## 🚀 [Live Demo](https://ai-presentation-sigma.vercel.app)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Presentation Content](#presentation-content)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 📖 Overview

This interactive presentation takes viewers on a journey through the evolution of AI, from the 1950 Turing Test to modern ChatGPT. It explains complex concepts like neural networks, transformers, and generative AI in an accessible way using beautiful visualizations and smooth animations.

### What You'll Learn:
- The history of AI development
- How machine learning works
- Neural networks and deep learning
- The transformer architecture
- How ChatGPT and similar models are built
- Practical applications and future implications

## ✨ Features

### 🎨 **Design Highlights**
- **Premium Dark Theme**: Deep navy background with electric blue and purple gradients
- **Apple-inspired Typography**: Inter font with bold headings and clean hierarchy  
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Timeline**: Progress tracking with smooth transitions
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile

### 📊 **Slide Types**
- **Title Slides**: Large gradient text with engaging subtitles
- **Content Slides**: Single concepts with supporting explanations
- **Timeline Slides**: Interactive historical progression
- **Diagram Slides**: Visual representations of ML concepts
- **Quote Slides**: Elegant typography for impactful statements
- **Interactive Elements**: Neural network visualizations, perceptron demos

### ⌨️ **Navigation**
- **Keyboard Controls**: Arrow keys (← →) and Spacebar
- **Click Navigation**: Floating navigation panel
- **Progress Tracking**: Visual progress indicators
- **Smooth Transitions**: Seamless slide transitions

## 🛠 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FilipMasar/ai-presentation.git
   cd ai-presentation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📖 Usage

### Navigation Controls
- **Arrow Keys**: Navigate between slides (← →)
- **Spacebar**: Move to next slide
- **Mouse/Touch**: Click navigation buttons

### Presentation Mode
The app automatically enters presentation mode with:
- Full-screen optimized layout
- Distraction-free interface
- Smooth slide transitions
- Progress indicators during timeline sections

## 📚 Presentation Content

The presentation covers:

1. **Introduction** - What is AI?
2. **Historical Timeline** - From Turing Test (1950) to ChatGPT (2022)
3. **Machine Learning Fundamentals** - How ML differs from traditional programming
4. **Neural Networks** - From perceptrons to deep learning
5. **The Transformer Revolution** - "Attention is All You Need" (2017)
6. **Generative AI** - How ChatGPT works under the hood
7. **Modern Techniques** - Prompt engineering, reasoning strategies
8. **Future Implications** - AI as a tool vs. understanding electricity

## 📁 Project Structure

```
ai-presentation/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── presentation/      # Presentation components
│   │   ├── slides/        # Individual slide components
│   │   ├── Presentation.tsx
│   │   └── slides.ts      # Slide data
│   └── ui/                # Reusable UI components
├── public/                # Static assets
├── lib/                   # Utility functions
└── hooks/                 # Custom React hooks
```

## 🤝 Contributing

Contributions are welcome! Whether you want to:
- Add new slide types
- Improve animations
- Fix bugs
- Enhance documentation
- Add new presentation content

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Star ⭐ this repository if you found it helpful!**

## 🔗 Links

- [Live Demo](https://ai-presentation-sigma.vercel.app)
- [Report Bug](https://github.com/FilipMasar/ai-presentation/issues)
- [Request Feature](https://github.com/FilipMasar/ai-presentation/issues)

---

Made with ❤️ using modern web technologies for an exceptional presentation experience.