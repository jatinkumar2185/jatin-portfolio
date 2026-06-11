import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[#1E293B] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-[#020617]"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #8B5CF6)' }}>
                JK
              </span>
              <span className="font-bold text-[#F8FAFC] font-mono">jatin.dev</span>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed max-w-xs">
              AI/ML Enthusiast & Full Stack Developer. Building the future one commit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#475569] hover:text-[#38BDF8] transition-colors text-sm font-mono"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: FiGithub, href: personalInfo.github },
                { icon: FiLinkedin, href: personalInfo.linkedin },
                { icon: FiMail, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-[rgba(56,189,248,0.15)] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[rgba(56,189,248,0.4)] transition-all"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
            <p className="text-[#475569] text-xs font-mono">{personalInfo.email}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#1E293B] gap-4">
          <p className="text-[#475569] text-xs font-mono">
            © {year} Jatin Kumar Singh — Built with React & ☕
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-[#475569] hover:text-[#38BDF8] transition-colors text-xs font-mono"
          >
            Back to top <FiArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
