import { useState, useEffect } from 'react';

const roles = ['Fullstack Developer', 'Backend Web Developer', 'AI Engineer', 'Data Scientist', 'Machine Learning Engineer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx + 1)); setCharIdx(charIdx + 1); }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx(charIdx - 1); }, 40);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

        {/* ── Profile Photo ── */}
        <div className="flex-shrink-0 relative">
          {/* Glowing ring */}
          <div
            className="absolute -inset-1.5 rounded-full opacity-50 blur-sm"
            style={{ background: 'linear-gradient(135deg, var(--accent), #7B2FBE)' }}
          />
          <div
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2"
            style={{ borderColor: 'var(--accent)' }}
          >
            {/* Replace /profile.png with your real photo */}
            <img
              src="/profile.jpg"
              alt="Ricky Dwi Setyawan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback avatar */}
            <div
              className="w-full h-full items-center justify-center text-6xl font-bold hidden"
              style={{ background: 'linear-gradient(135deg, var(--accent)20, #7B2FBE20)', color: 'var(--accent)', display: 'none' }}
            >
              R
            </div>
          </div>
          {/* Available badge */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-white text-xs font-mono font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-lg"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Available for project
          </div>
        </div>

        {/* ── Text Content ── */}
        <div className="flex-1 text-center md:text-left">
          {/* Heading */}
          <div className="space-y-3 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
              <span className="t-text">Hi, I'm</span>
              <br />
              <span style={{ color: 'var(--accent)' }}>Ricky Dwi S.</span>
            </h1>
            <div className="flex items-center gap-3 text-2xl md:text-3xl font-semibold justify-center md:justify-start" style={{ color: 'var(--text-muted)' }}>
              <span className="font-mono text-xl" style={{ color: '#7B2FBE' }}>&gt;</span>
              <span className="font-mono t-text">{displayed}</span>
              <span className="font-mono animate-blink" style={{ color: 'var(--accent)' }}>|</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-xl leading-relaxed mb-8 t-muted">
            Profesional IT dengan pengalaman di{' '}
            <span className="t-text font-semibold">Fullstack Web Development</span>,{' '}
            <span className="font-semibold" style={{ color: 'var(--accent)' }}>Artificial Intelligence</span>, dan{' '}
            <span className="t-text font-semibold">Analisis Data</span>.
            Lulusan Teknik Informatika Politeknik Negeri Jember.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-white font-bold px-8 py-4 rounded-full text-base active:scale-95 transition-all duration-200"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-h)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
            >
              See My Work →
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="font-bold px-8 py-4 rounded-full text-base active:scale-95 transition-all duration-200 t-text"
              style={{ border: '2px solid var(--border)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-h)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto md:mx-0">
            {[
              { num: '4+', label: 'Years Exp.' },
              { num: '6+', label: 'Projects' },
              { num: '3.81', label: 'IPK / GPA' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="rounded-2xl p-4 text-center transition-colors t-bg-card"
                style={{ border: '1px solid var(--border)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--accent)' }}>{num}</p>
                <p className="text-xs mt-1 font-mono t-dim">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-32 right-0 w-72 h-72 rounded-full opacity-100 blur-3xl pointer-events-none" style={{ background: 'var(--blob-1)' }} />
      <div className="absolute top-80 right-32 w-48 h-48 rounded-full opacity-100 blur-2xl pointer-events-none" style={{ background: 'var(--blob-2)' }} />
    </section>
  );
}
