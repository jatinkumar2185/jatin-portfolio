import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useScrollProgress } from '../hooks';

// Loading screen
export function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-[#020617] mb-6"
        style={{ background: 'linear-gradient(135deg, #38BDF8, #8B5CF6)' }}
      >
        JK
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-mono text-[#38BDF8] text-sm mb-8"
      >
        Initializing portfolio...
      </motion.div>

      <div className="w-48 h-0.5 bg-[#1E293B] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: 'linear-gradient(90deg, #38BDF8, #8B5CF6)',
          }}
        />
      </div>

      <div className="font-mono text-xs text-[#475569] mt-3">
        {Math.min(Math.round(progress), 100)}%
      </div>
    </motion.div>
  );
}

// Scroll progress bar
export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}

// Back to top button
export function BackToTopButton() {
  const progress = useScrollProgress();
  const show = progress > 15;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-xl flex items-center justify-center text-[#020617] shadow-lg"
          style={{ background: 'linear-gradient(135deg, #38BDF8, #8B5CF6)' }}
          aria-label="Back to top"
        >
          <FiArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
