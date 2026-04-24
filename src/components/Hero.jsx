import { useState, useEffect, useRef } from 'react';

const roles = ['Fullstack Developer', 'Backend Web Developer', 'AI Engineer', 'Data Scientist', 'Machine Learning Engineer'];

const stats = [
  { num: 4, suffix: '+', label: 'Tahun Pengalaman' },
  { num: 10, suffix: '+', label: 'Proyek Selesai' },
  { num: 3, suffix: '', label: 'Instansi Kerja' },
];

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ target, suffix, label, animate }) {
  const count = useCountUp(target, 1200, animate);
  return (
    <div
      className="rounded-2xl p-4 text-center transition-all duration-300"
      style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <p className="text-2xl md:text-3xl font-bold font-mono" style={{ color: 'var(--accent)' }}>
        {animate ? count : 0}{suffix}
      </p>
      <p className="text-xs mt-1 font-mono t-dim leading-tight">{label}</p>
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

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
              src="/profile.jpeg"
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
            {/* Hire Me - Prominent Button */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="relative group overflow-hidden text-white font-bold px-8 py-4 rounded-full text-base active:scale-95 transition-all duration-300 shadow-lg flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #7B2FBE)',
                boxShadow: '0 0 24px rgba(247,37,133,0.45), 0 4px 15px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(247,37,133,0.7), 0 8px 25px rgba(0,0,0,0.4)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(247,37,133,0.45), 0 4px 15px rgba(0,0,0,0.3)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* Shimmer effect */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)',
                  transform: 'skewX(-15deg)',
                }}
              />
              <span className="relative flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-white"
                  style={{ animation: 'pulse 1.5s infinite' }}
                />
                Hire Me
                <span className="text-lg">✦</span>
              </span>
            </a>

            {/* See My Work */}
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="font-bold px-8 py-4 rounded-full text-base active:scale-95 transition-all duration-200 t-text"
              style={{ border: '2px solid var(--border)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = ''; }}
            >
              See My Work →
            </a>
          </div>

          {/* Stats with animated counter */}
          <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-sm mx-auto md:mx-0">
            {stats.map(({ num, suffix, label }) => (
              <StatCard key={label} target={num} suffix={suffix} label={label} animate={statsVisible} />
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
