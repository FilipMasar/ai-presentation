'use client';

import { motion } from 'framer-motion';

interface FlowDiagramProps {
  items: Array<{
    name: string;
    description?: string;
    level?: number;
    children?: string[];
  }>;
}

export function FlowDiagram({ items }: FlowDiagramProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const classicalProgramming = items.find(item => item.level === 0);
  const machineLearning = items.find(item => item.level === 1);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center space-y-20 max-w-6xl mx-auto"
    >
      {/* Classical Programming Section */}
      {classicalProgramming && (
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center justify-center">
            {/* Left side inputs stacked vertically */}
            <div className="flex flex-col space-y-8 mr-20">
              {/* Rules Input */}
              <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-bold text-lg">Rules</span>
              </motion.div>

              {/* Data Input */}
              <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-bold text-lg">Data</span>
              </motion.div>
            </div>

            {/* Arrows pointing to center */}
            <div className="absolute left-40 top-1/2 transform -translate-y-1/2">
              <motion.div 
                className="text-gray-400 text-4xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                →
              </motion.div>
            </div>

            {/* Classical Programming Box */}
            <motion.div 
              className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 flex items-center justify-center min-w-[200px] shadow-lg mx-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <div className="text-white font-bold text-lg">Classical</div>
                <div className="text-white font-bold text-lg">Programming</div>
              </div>
            </motion.div>

            {/* Arrow to output */}
            <motion.div 
              className="text-gray-400 text-4xl mx-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              →
            </motion.div>

            {/* Answers Output */}
            <motion.div 
              className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-bold text-lg">Answers</span>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Machine Learning Section */}
      {machineLearning && (
        <motion.div variants={itemVariants} className="relative">
          <div className="flex items-center justify-center">
            {/* Left side inputs stacked vertically */}
            <div className="flex flex-col space-y-8 mr-20">
              {/* Data Input */}
              <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-bold text-lg">Data</span>
              </motion.div>

              {/* Answers Input */}
              <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-bold text-lg">Answers</span>
              </motion.div>
            </div>

            {/* Arrows pointing to center */}
            <div className="absolute left-40 top-1/2 transform -translate-y-1/2">
              <motion.div 
                className="text-gray-400 text-4xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                →
              </motion.div>
            </div>

            {/* Machine Learning Box */}
            <motion.div 
              className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 flex items-center justify-center min-w-[200px] shadow-lg mx-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="text-white font-bold text-lg">Machine</div>
                <div className="text-white font-bold text-lg">Learning</div>
              </div>
            </motion.div>

            {/* Arrow to output */}
            <motion.div 
              className="text-gray-400 text-4xl mx-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              →
            </motion.div>

            {/* Rules Output */}
            <motion.div 
              className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-bold text-lg">Rules</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 