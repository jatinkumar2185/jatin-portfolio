import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../data/portfolio';
import { useActiveSection } from '../hooks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(['about', 'skills', 'projects', 'education', 'github', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-[#1E293B]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-[#020617]"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #8B5CF6)' }}>
                JK
              </span>
              <span className="font-bold text-sm text-[#F8FAFC] hidden sm:block font-mono">
                jatin<span className="text-[#38BDF8]">.</span>dev
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = active === sectionId;
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleClick(link.href)}
                    whileHover={{ y: -1 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-mono ${
                      isActive
                        ? 'text-[#38BDF8] bg-[rgba(56,189,248,0.1)]'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm ml-2"
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#94A3B8] hover:text-[#38BDF8] transition-colors p-2"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="relative flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleClick(link.href)}
                  className="text-2xl font-bold text-[#94A3B8] hover:text-[#38BDF8] transition-colors font-mono"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                onClick={() => handleClick('#contact')}
                className="btn-primary mt-4"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
