import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, achievements } from '../data/portfolio';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

function TimelineItem({ item, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 pb-10"
    >
      {/* Line */}
      {!isLast && (
        <div className="absolute left-5 top-12 w-0.5 bottom-0 timeline-line opacity-30" />
      )}

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl border border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.05)] z-10"
      >
        {item.icon}
      </motion.div>

      {/* Card */}
      <div className="flex-1 glass rounded-xl p-5 glass-hover">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-[#F8FAFC] font-bold">{item.institution}</h3>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-[#38BDF8] bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.2)]">
            {item.score}
          </span>
        </div>

        <p className="text-[#94A3B8] text-sm mb-3">{item.degree}</p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] font-mono">
          <span className="flex items-center gap-1.5">
            <FiCalendar size={11} />
            {item.period}
          </span>
          {item.location && (
            <span className="flex items-center gap-1.5">
              <FiMapPin size={11} />
              {item.location}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function AchievementCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-5 border border-[rgba(56,189,248,0.1)] hover:border-[rgba(56,189,248,0.3)] transition-all"
    >
      <div className="text-2xl mb-3">{item.icon}</div>
      <h4 className="text-[#F8FAFC] font-bold text-sm mb-1">{item.title}</h4>
      <p className="text-[#94A3B8] text-xs leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

export default function Education() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="education" className="section relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full blur-3xl bg-[rgba(139,92,246,0.04)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#38BDF8] font-mono text-sm mb-3 tracking-widest uppercase">Academic journey</p>
          <h2 className="section-heading text-[#F8FAFC]">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-[#38BDF8] uppercase tracking-widest mb-8"
            >
              Education Timeline
            </motion.h3>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} total={education.length} />
            ))}
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-[#8B5CF6] uppercase tracking-widest mb-8"
            >
              Highlights
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <AchievementCard key={i} item={item} index={i} />
              ))}
            </div>

            {/* Quote / banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 glass rounded-xl p-5 border border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.04)]"
            >
              <div className="text-[#8B5CF6] text-2xl mb-2">"</div>
              <p className="text-[#94A3B8] text-sm italic leading-relaxed">
                Passionate about building AI systems that solve real problems. Always learning, always shipping.
              </p>
              <div className="text-sm font-mono text-[#475569] mt-3">— Jatin Kumar Singh</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
