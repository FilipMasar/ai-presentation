import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Fundamentals: Understanding How ChatGPT Works",
  description: "An interactive presentation exploring AI fundamentals, machine learning, neural networks, and how modern AI tools like ChatGPT actually work. From the Turing Test to Transformers.",
  keywords: [
    "AI",
    "Artificial Intelligence", 
    "Machine Learning",
    "ChatGPT",
    "Neural Networks",
    "Transformers",
    "Deep Learning",
    "Perceptron",
    "AI Timeline",
    "Educational",
    "Presentation"
  ],
  authors: [{ name: "Filip" }],
  creator: "Filip",
  publisher: "Filip",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-presentation-your-domain.vercel.app'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'AI Fundamentals: Understanding How ChatGPT Works',
    description: 'An interactive presentation exploring AI fundamentals, machine learning, neural networks, and how modern AI tools like ChatGPT actually work. From the Turing Test to Transformers.',
    siteName: 'AI Fundamentals Presentation',
    images: [
      {
        url: '/nn.jpeg',
        width: 1200,
        height: 630,
        alt: 'AI Fundamentals Presentation - Neural Networks and Machine Learning',
      },
      {
        url: '/transformer.webp',
        width: 1200,
        height: 630,
        alt: 'Transformer Architecture Explained',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Fundamentals: Understanding How ChatGPT Works',
    description: 'An interactive presentation exploring AI fundamentals, machine learning, neural networks, and how modern AI tools like ChatGPT actually work.',
    images: ['/nn.jpeg'],
    creator: '@your-twitter-handle', // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here if needed
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}