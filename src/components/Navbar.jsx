import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-xl font-bold tracking-tight" style={{ color: 'var(--accent)' }}>
          &lt;Ricky.dev/&gt;
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className="text-sm font-medium transition-colors duration-200 cursor-pointer t-muted"
                style={{ '--hover': 'var(--accent)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                {link}
              </button>
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggle}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 text-lg"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-muted)',
              }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>

          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-h)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile: Theme + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-full border flex items-center justify-center text-base"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            className="flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 t-text ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text)' }} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text)' }} />
            <span className={`block h-0.5 w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-4" style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-left text-base font-medium transition-colors cursor-pointer t-muted"
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              {link}
            </button>
          ))}
          <a
            href="#contact"
            className="text-white text-sm font-semibold px-5 py-2 rounded-full text-center"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
