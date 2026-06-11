import profileImg from "../assets/profile.jpg";
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { HiArrowDown } from 'react-icons/hi';
import { useTypingEffect } from '../hooks';
import { personalInfo } from '../data/portfolio';

const typingWords = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'Python Developer',
  'Problem Solver',
  'Open Source Builder',
];

// Animated background particles
function FloatingOrb({ delay, size, x, y, color }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        opacity: 0.12,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.15, 0.9, 1],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Hero() {
  const typedText = useTypingEffect(typingWords);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Orbs */}
      <FloatingOrb delay={0} size="500px" x="-10%" y="10%" color="radial-gradient(circle, #38BDF8, transparent)" />
      <FloatingOrb delay={3} size="400px" x="70%" y="5%" color="radial-gradient(circle, #8B5CF6, transparent)" />
      <FloatingOrb delay={6} size="300px" x="30%" y="60%" color="radial-gradient(circle, #38BDF8, transparent)" />
      <FloatingOrb delay={2} size="250px" x="85%" y="65%" color="radial-gradient(circle, #8B5CF6, transparent)" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(56,189,248,0.25)] bg-[rgba(56,189,248,0.05)] text-[#38BDF8] text-sm font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            Available for Internships & Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-4 text-[#F8FAFC] leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text block sm:inline">Jatin Kumar</span>
            <br className="hidden sm:block" />
            <span className="text-[#F8FAFC]">Singh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-[#94A3B8] mb-4 h-8"
          >
            <span className="text-[#38BDF8] font-mono">&gt; </span>
            <span className="typing-cursor">{typedText}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
          >
            <a
              href="#"
              className="btn-primary flex items-center gap-2 text-sm"
              onClick={(e) => e.preventDefault()}
            >
              <FiDownload size={16} />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline flex items-center gap-2 text-sm"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline flex items-center gap-2 text-sm"
            >
              <FiMail size={16} />
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <span className="text-[#475569] text-sm font-mono">connect</span>
            <div className="w-8 h-px bg-[#1E293B]" />
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[rgba(56,189,248,0.15)] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[rgba(56,189,248,0.4)] transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(56,189,248,0.2)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-dashed border-[rgba(139,92,246,0.2)]"
            />

            {/* Avatar circle */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-[rgba(56,189,248,0.3)] bg-gradient-to-br from-[rgba(56,189,248,0.1)] to-[rgba(139,92,246,0.1)]">
              <div className="w-full h-full flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 glass rounded-xl px-3 py-2 text-xs font-mono text-[#38BDF8] border border-[rgba(56,189,248,0.2)]"
            >
              AI/ML 🤖
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-2 glass rounded-xl px-3 py-2 text-xs font-mono text-[#A78BFA] border border-[rgba(139,92,246,0.2)]"
            >
              Full Stack 💻
            </motion.div>

            {/* Glow */}
            <div className="absolute inset-8 rounded-full blur-2xl bg-gradient-to-br from-[rgba(56,189,248,0.15)] to-[rgba(139,92,246,0.15)] -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] hover:text-[#38BDF8] transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
