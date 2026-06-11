import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LoadingScreen, ScrollProgressBar, BackToTopButton } from './components/UI';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative bg-[#020617] min-h-screen noise">
          <ScrollProgressBar />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <GitHub />
            <Contact />
          </main>

          <Footer />
          <BackToTopButton />
        </div>
      )}
    </>
  );
}
