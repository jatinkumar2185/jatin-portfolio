import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import { useCopyToClipboard } from '../hooks';

function ContactItem({ icon: Icon, label, value, href, canCopy }) {
  const [copied, copy] = useCopyToClipboard();

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(56,189,248,0.1)] hover:border-[rgba(56,189,248,0.3)] transition-all group"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(56,189,248,0.1)] text-[#38BDF8] group-hover:bg-[rgba(56,189,248,0.15)] transition-colors flex-shrink-0">
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-[#475569] font-mono uppercase tracking-wider mb-0.5">{label}</div>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors text-sm truncate block">
            {value}
          </a>
        ) : (
          <span className="text-[#94A3B8] text-sm truncate block">{value}</span>
        )}
      </div>
      {canCopy && (
        <button
          onClick={() => copy(value)}
          className="flex-shrink-0 text-[#475569] hover:text-[#38BDF8] transition-colors p-1"
          title="Copy"
        >
          {copied ? <FiCheck size={14} className="text-green-400" /> : <FiCopy size={14} />}
        </button>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section relative">
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full blur-3xl bg-[rgba(56,189,248,0.04)] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 rounded-full blur-3xl bg-[rgba(139,92,246,0.04)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#38BDF8] font-mono text-sm mb-3 tracking-widest uppercase">Let's build together</p>
          <h2 className="section-heading text-[#F8FAFC]">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg mx-auto">
            Open to internships, freelance projects, and collaborations. Reach out and I'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-6">Contact Details</h3>
            <div className="flex flex-col gap-3 mb-8">
              <ContactItem icon={FiMail} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} canCopy />
              <ContactItem icon={FiPhone} label="Phone" value={personalInfo.phone} canCopy />
              <ContactItem icon={FiLinkedin} label="LinkedIn" value="jatin-kumar-singh" href={personalInfo.linkedin} />
              <ContactItem icon={FiGithub} label="GitHub" value={`@${personalInfo.githubUsername}`} href={personalInfo.github} />
            </div>

            <div className="glass rounded-xl p-5 border border-[rgba(139,92,246,0.2)] bg-[rgba(139,92,246,0.04)]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-mono text-[#94A3B8]">Status: Open to opportunities</span>
              </div>
              <p className="text-xs text-[#475569]">
                Actively seeking AI/ML and Full Stack internships for 2025.
              </p>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-6 border border-[#1E293B]">
              <h3 className="text-[#F8FAFC] font-bold text-lg mb-6">Send a Message</h3>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono flex items-center gap-2"
                >
                  <FiCheck size={16} />
                  Message sent! I'll respond within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-[#475569] uppercase tracking-wider block mb-1.5">Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#475569] uppercase tracking-wider block mb-1.5">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-[#475569] uppercase tracking-wider block mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's it about?"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#475569] uppercase tracking-wider block mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message..."
                    required
                    className="form-input resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center gap-2 w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-[#020617]/40 border-t-[#020617] rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
