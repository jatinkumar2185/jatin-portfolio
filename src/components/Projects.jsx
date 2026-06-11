import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { personalInfo } from '../data/portfolio';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isPrimary = project.color === 'cyan';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="project-card glass rounded-2xl overflow-hidden border border-[#1E293B] hover:border-[rgba(56,189,248,0.3)] transition-all duration-300 group relative flex flex-col"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] text-[#020617]">
          <FiStar size={10} />
          Featured
        </div>
      )}

      {/* Project visual */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${
        isPrimary
          ? 'from-[rgba(56,189,248,0.08)] to-[rgba(56,189,248,0.02)]'
          : 'from-[rgba(139,92,246,0.08)] to-[rgba(139,92,246,0.02)]'
      }`}>
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid opacity-60" />

        {/* Central icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-24 h-24 rounded-2xl flex items-center justify-center text-5xl border ${
            isPrimary ? 'border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.06)]'
                      : 'border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.06)]'
          } group-hover:scale-110 transition-transform duration-300`}>
            {project.icon}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0F172A] to-transparent`} />

        {/* Glow on hover */}
        <div className={`project-gradient absolute inset-0 ${
          isPrimary
            ? 'bg-gradient-to-br from-[rgba(56,189,248,0.08)] to-transparent'
            : 'bg-gradient-to-br from-[rgba(139,92,246,0.08)] to-transparent'
        }`} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[#F8FAFC] font-bold text-lg mb-2 group-hover:text-[#38BDF8] transition-colors">
          {project.title}
        </h3>

        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Feature list */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.features.slice(0, 3).map(f => (
              <span key={f} className="text-xs text-[#64748B] font-mono">
                ✓ {f}
              </span>
            ))}
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span key={t} className={`tech-tag ${isPrimary ? '' : 'purple'}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-[#1E293B]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors font-medium"
          >
            <FiGithub size={15} />
            Code
          </a>
          <a
            href="#"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ml-auto ${
              isPrimary ? 'text-[#38BDF8] hover:text-[#7DD3FC]' : 'text-[#A78BFA] hover:text-[#C4B5FD]'
            }`}
          >
            Live Demo
            <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="section relative">
      <div className="absolute left-0 top-1/3 w-80 h-80 rounded-full blur-3xl bg-[rgba(56,189,248,0.04)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#38BDF8] font-mono text-sm mb-3 tracking-widest uppercase">Things I've built</p>
          <h2 className="section-heading text-[#F8FAFC]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg mx-auto">
            A selection of AI, ML, and full-stack projects — each solving a real problem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiGithub size={18} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
