import './index.css';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import ConstellationBackground from './components/ConstellationBackground';
import Reveal from './components/Reveal';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="noise relative min-h-screen overflow-x-hidden t-bg t-text" style={{ transition: 'background-color 0.3s, color 0.3s' }}>
        {/* Animated constellation / plexus network (behind everything) */}
        <ConstellationBackground />
        {/* Faint grid for subtle coding structure */}
        <div className="fixed inset-0 pointer-events-none grid-bg opacity-[0.18]" style={{ zIndex: 1 }} />

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Reveal variant="left"><Experience /></Reveal>
          <Reveal variant="right"><Skills /></Reveal>
          <Reveal variant="scale"><Projects /></Reveal>
          <Reveal variant="blur"><Contact /></Reveal>
        </main>

        {/* Scroll To Top */}
        <a
          href="#"
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 z-40"
          style={{ backgroundColor: 'var(--accent)' }}
          title="Back to top"
        >
          ↑
        </a>
      </div>
    </ThemeProvider>
  );
}
