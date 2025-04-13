'use client';

import { motion } from 'framer-motion';

export default function EmotionMap() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif italic tracking-tight text-gray-900 dark:text-gray-100"
        >
          Emotion Map
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 dark:text-gray-300"
        >
          Coming soon...
        </motion.p>
      </div>
    </main>
  );
} 