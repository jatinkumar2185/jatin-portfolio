import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

const categoryColors = {
  'Programming Languages': { accent: '#38BDF8', bg: 'rgba(56,189,248,0.05)', border: 'rgba(56,189,248,0.15)' },
  'Frontend': { accent: '#34D399', bg: 'rgba(52,211,153,0.05)', border: 'rgba(52,211,153,0.15)' },
  'Backend': { accent: '#F472B6', bg: 'rgba(244,114,182,0.05)', border: 'rgba(244,114,182,0.15)' },
  'Databases': { accent: '#FBBF24', bg: 'rgba(251,191,36,0.05)', border: 'rgba(251,191,36,0.15)' },
  'Machine Learning': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.05)', border: 'rgba(139,92,246,0.15)' },
  'Tools': { accent: '#FB923C', bg: 'rgba(251,146,60,0.05)', border: 'rgba(251,146,60,0.15)' },
};

const skillIcons = {
  'C++': '⚡', 'Java': '☕', 'Python': '🐍', 'JavaScript': '🟨', 'SQL': '🗄️',
  'HTML': '🌐', 'CSS': '🎨', 'React.js': '⚛️', 'Tailwind CSS': '🌊',
  'Node.js': '🟢', 'Express.js': '🚀',
  'MySQL': '🐬',
  'Pandas': '🐼', 'Scikit-Learn': '🤖', 'OpenCV': '👁️',
  'Git': '🔀', 'GitHub': '🐙', 'VS Code': '💻',
};

function SkillCard({ category, items, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const colors = categoryColors[category] || categoryColors['Tools'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="glass rounded-2xl p-6 glass-hover"
      style={{ borderColor: colors.border, background: `${colors.bg}` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-2 h-8 rounded-full"
          style={{ background: `linear-gradient(180deg, ${colors.accent}, transparent)` }}
        />
        <h3
          className="font-bold text-sm uppercase tracking-widest font-mono"
          style={{ color: colors.accent }}
        >
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="skill-badge flex items-center gap-1.5"
            style={{
              background: `rgba(${hexToRgb(colors.accent)}, 0.08)`,
              borderColor: `rgba(${hexToRgb(colors.accent)}, 0.2)`,
              color: '#94A3B8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.accent;
              e.currentTarget.style.borderColor = `rgba(${hexToRgb(colors.accent)}, 0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94A3B8';
              e.currentTarget.style.borderColor = `rgba(${hexToRgb(colors.accent)}, 0.2)`;
            }}
          >
            <span>{skillIcons[skill] || '•'}</span>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '56, 189, 248';
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="section relative">
      {/* BG accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full blur-3xl bg-[rgba(139,92,246,0.05)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#38BDF8] font-mono text-sm mb-3 tracking-widest uppercase">What I work with</p>
          <h2 className="section-heading text-[#F8FAFC]">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg mx-auto">
            A curated set of tools I use to build full-stack applications and intelligent systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCard key={category} category={category} items={items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
