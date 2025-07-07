import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What is AI? How ChatGPT Works?",
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
  metadataBase: new URL('https://ai-presentation-sigma.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'What is AI? How ChatGPT Works?',
    description: 'An interactive presentation exploring AI fundamentals, machine learning, neural networks, and how modern AI tools like ChatGPT actually work. From the Turing Test to Transformers.',
    siteName: 'AI Fundamentals Presentation',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'What is AI? How ChatGPT Works?',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is AI? How ChatGPT Works?',
    description: 'An interactive presentation exploring AI fundamentals, machine learning, neural networks, and how modern AI tools like ChatGPT actually work.',
    images: ['/preview.png'],
    creator: '@filipmasar1',
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
  }
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