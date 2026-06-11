import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiStar, FiGitCommit, FiCode } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const githubStats = [
  { label: 'Repositories', value: '10+', icon: FiCode, color: '#38BDF8' },
  { label: 'Commits', value: '200+', icon: FiGitCommit, color: '#8B5CF6' },
  { label: 'Stars Earned', value: '5+', icon: FiStar, color: '#FBBF24' },
];

const topLanguages = [
  { name: 'Python', percent: 55, color: '#3B82F6' },
  { name: 'JavaScript', percent: 25, color: '#F59E0B' },
  { name: 'C++', percent: 12, color: '#06B6D4' },
  { name: 'Others', percent: 8, color: '#6366F1' },
];

// Simulated contribution grid
function ContributionGrid() {
  const weeks = 26;
  const days = 7;
  const levels = [0, 0.15, 0.4, 0.7, 1.0];

  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const rand = Math.random();
      if (rand < 0.4) return 0;
      if (rand < 0.6) return 1;
      if (rand < 0.75) return 2;
      if (rand < 0.88) return 3;
      return 4;
    })
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-max">
        {grid.map((week, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {week.map((level, d) => (
              <motion.div
                key={`${w}-${d}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (w * 7 + d) * 0.002 }}
                className="w-3 h-3 rounded-sm"
                style={{
                  background: level === 0
                    ? 'rgba(56,189,248,0.08)'
                    : `rgba(56,189,248,${levels[level]})`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHub() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="github" className="section relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl bg-[rgba(56,189,248,0.03)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#38BDF8] font-mono text-sm mb-3 tracking-widest uppercase">Open Source</p>
          <h2 className="section-heading text-[#F8FAFC]">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {githubStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-6 border border-[#1E293B] hover:border-[rgba(56,189,248,0.3)] transition-all text-center group"
            >
              <stat.icon
                className="mx-auto mb-3 transition-transform group-hover:scale-110"
                size={24}
                style={{ color: stat.color }}
              />
              <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#475569] font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 border border-[#1E293B] mb-6"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FiGithub className="text-[#38BDF8]" size={18} />
              <span className="font-mono text-sm text-[#94A3B8]">
                @{personalInfo.githubUsername}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#475569] font-mono">
              <span>Less</span>
              {[0.08, 0.15, 0.4, 0.7, 1.0].map((o, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm"
                  style={{ background: `rgba(56,189,248,${o})` }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
          <ContributionGrid />
          <p className="text-xs text-[#475569] font-mono mt-3">
            Contribution activity — last 26 weeks (illustrative)
          </p>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6 border border-[#1E293B]"
        >
          <h3 className="text-sm font-mono text-[#94A3B8] uppercase tracking-widest mb-5">Most Used Languages</h3>

          <div className="flex gap-1 h-3 rounded-full overflow-hidden mb-5">
            {topLanguages.map(lang => (
              <motion.div
                key={lang.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ background: lang.color }}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {topLanguages.map(lang => (
              <div key={lang.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: lang.color }} />
                <span className="text-xs font-mono text-[#94A3B8]">{lang.name}</span>
                <span className="text-xs font-mono text-[#475569]">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiGithub size={16} />
            Visit GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
