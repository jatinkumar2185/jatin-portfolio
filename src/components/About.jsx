import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiBriefcase, FiAward, FiCpu } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const stats = [
  { label: 'CGPA', value: '8.5', icon: FiAward },
  { label: 'Projects', value: '4+', icon: FiBriefcase },
  { label: 'Languages', value: '5+', icon: FiCode },
  { label: 'ML Models', value: '3+', icon: FiCpu },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-[#38BDF8] font-mono text-sm mb-3 tracking-widest uppercase">Get to know me</p>
            <h2 className="section-heading text-[#F8FAFC]">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left – visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="glass animated-border rounded-2xl p-8 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

                <div className="relative z-10">
                  {/* Terminal-style header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-xs font-mono text-[#475569] ml-2">about.json</span>
                  </div>

                  <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-[#475569]">{'{'}</span>{'\n'}
                      <span className="text-[#38BDF8]">  "name"</span>
                      <span className="text-[#94A3B8]">: </span>
                      <span className="text-green-400">"Jatin Kumar Singh"</span>
                      <span className="text-[#94A3B8]">,</span>{'\n'}
                      <span className="text-[#38BDF8]">  "role"</span>
                      <span className="text-[#94A3B8]">: </span>
                      <span className="text-green-400">"CSE Student"</span>
                      <span className="text-[#94A3B8]">,</span>{'\n'}
                      <span className="text-[#38BDF8]">  "university"</span>
                      <span className="text-[#94A3B8]">: </span>
                      <span className="text-green-400">"IILM University"</span>
                      <span className="text-[#94A3B8]">,</span>{'\n'}
                      <span className="text-[#38BDF8]">  "specialization"</span>
                      <span className="text-[#94A3B8]">: </span>
                      <span className="text-green-400">"AI & ML"</span>
                      <span className="text-[#94A3B8]">,</span>{'\n'}
                      <span className="text-[#38BDF8]">  "interests"</span>
                      <span className="text-[#94A3B8]">: [</span>{'\n'}
                      <span className="text-yellow-400">    "Machine Learning"</span>
                      <span className="text-[#94A3B8]">,</span>{'\n'}
                      <span className="text-yellow-400">    "Full Stack Dev"</span>
                      <span className="text-[#94A3B8]">,</span>{'\n'}
                      <span className="text-yellow-400">    "Problem Solving"</span>{'\n'}
                      <span className="text-[#94A3B8]">  ],</span>{'\n'}
                      <span className="text-[#38BDF8]">  "available"</span>
                      <span className="text-[#94A3B8]">: </span>
                      <span className="text-orange-400">true</span>{'\n'}
                      <span className="text-[#475569]">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl blur-3xl bg-gradient-to-br from-[rgba(56,189,248,0.06)] to-[rgba(139,92,246,0.06)] -z-10" />
            </motion.div>

            {/* Right – text */}
            <div>
              <motion.p
                variants={itemVariants}
                className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-8"
              >
                {personalInfo.about}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-[#94A3B8] leading-relaxed mb-10"
              >
                My goal is to combine deep ML expertise with clean frontend engineering to ship products that are both intelligent and beautiful. I am currently seeking internships and collaborative projects in AI/ML and Full Stack development.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="glass rounded-xl p-4 text-center border border-[rgba(56,189,248,0.1)] hover:border-[rgba(56,189,248,0.3)] transition-all group"
                  >
                    <Icon className="mx-auto mb-2 text-[#38BDF8] group-hover:scale-110 transition-transform" size={20} />
                    <div className="text-2xl font-black gradient-text">{value}</div>
                    <div className="text-xs text-[#475569] font-mono mt-1">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
