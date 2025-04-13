'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif italic tracking-tight text-gray-900 dark:text-gray-100"
        >
          La Gela Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light"
        >
          We shape emotion through technology, art, and silence.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 italic"
        >
          A poetic future, born from dreams.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          href="/emotion-map"
          className="inline-block mt-8 px-8 py-4 text-lg border border-gray-300 dark:border-gray-700 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
        >
          Enter the Dream
        </motion.a>
      </div>
    </main>
  );
}
