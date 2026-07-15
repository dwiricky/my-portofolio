import { useState, useEffect, useRef } from 'react';

const roles = ['Senior Fullstack Developer', 'Backend Web Developer', 'AI Engineer', 'Data Scientist', 'Machine Learning Engineer'];

const stats = [
  { num: 4, suffix: '+', label: 'Tahun Pengalaman' },
  { num: 10, suffix: '+', label: 'Proyek Selesai' },
  { num: 3, suffix: '', label: 'Instansi Kerja' },
];

function useCountUp(target, duration = 1400, start = false) {
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

function Stat({ target, suffix, label, animate }) {
  const count = useCountUp(target, 1300, animate);
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold font-mono t-text">
        {animate ? count : 0}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </p>
      <p className="text-xs mt-1 t-dim leading-tight">{label}</p>
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
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx + 1)); setCharIdx(charIdx + 1); }, 70);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx(charIdx - 1); }, 35);
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
    <section id="about" className="min-h-screen flex items-center px-6 pt-28 pb-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-10 items-center w-full">

        {/* ── Text Content ── */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* Availability eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-xs t-muted mb-6 px-3 py-1.5 rounded-full" style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping" style={{ backgroundColor: '#22C55E' }} />
              <span className="relative inline-flex w-2 h-2 rounded-full" style={{ backgroundColor: '#22C55E' }} />
            </span>
            Available for work
          </div>

          {/* Code annotation */}
          <p className="font-mono text-xs md:text-sm mb-3" style={{ color: 'var(--text-dim)' }}>
            <span style={{ color: 'var(--accent-2)' }}>const</span>{' '}
            <span style={{ color: 'var(--accent)' }}>developer</span> = {'{'} <span className="t-muted">role</span>: <span className="t-muted">'Senior Fullstack'</span> {'}'}
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
            <span className="t-text">Ricky Dwi</span>
            <br />
            <span className="text-gradient">Setyawan.</span>
          </h1>

          {/* Typed role */}
          <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold justify-center md:justify-start mb-6" style={{ color: 'var(--text-muted)' }}>
            <span className="font-mono" style={{ color: 'var(--accent-2)' }}>&gt;</span>
            <span className="font-mono t-text">{displayed}</span>
            <span className="font-mono animate-blink" style={{ color: 'var(--accent)' }}>_</span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg max-w-xl leading-relaxed mb-8 t-muted mx-auto md:mx-0">
            Membangun aplikasi web end-to-end yang bersih, cepat, dan mudah diskalakan — dari{' '}
            <span className="t-text font-medium">arsitektur backend</span> hingga{' '}
            <span className="t-text font-medium">antarmuka</span>, dengan sentuhan{' '}
            <span className="font-medium" style={{ color: 'var(--accent)' }}>AI &amp; Data</span>.
          </p>

          {/* Actions — clean & minimal */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-12">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-h)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group px-6 py-3 rounded-xl text-sm font-semibold t-text transition-all duration-200 inline-flex items-center gap-2"
              style={{ border: '1px solid var(--border)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              View Work
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Stats — inline, minimal, no boxes */}
          <div ref={statsRef} className="flex items-center gap-6 md:gap-8 justify-center md:justify-start">
            {stats.map(({ num, suffix, label }, i) => (
              <div key={label} className="flex items-center gap-6 md:gap-8">
                {i > 0 && <span className="w-px h-10 self-center" style={{ backgroundColor: 'var(--border)' }} />}
                <Stat target={num} suffix={suffix} label={label} animate={statsVisible} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Portrait ── */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* soft accent glow */}
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at 30% 20%, var(--accent), transparent 60%), radial-gradient(circle at 70% 90%, var(--accent-2), transparent 60%)' }}
            />
            <div
              className="relative w-56 h-72 md:w-72 md:h-[22rem] rounded-[2rem] overflow-hidden"
              style={{ border: '1px solid var(--border-h)', boxShadow: '0 24px 60px -20px rgba(0,0,0,0.6)' }}
            >
              <img
                src="/profile.jpeg"
                alt="Ricky Dwi Setyawan"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div
                className="w-full h-full items-center justify-center text-6xl font-bold hidden text-gradient"
                style={{ display: 'none' }}
              >
                R
              </div>
              {/* subtle top gradient for depth */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent 45%)' }} />
            </div>

            {/* floating mono chip */}
            <div
              className="absolute -bottom-4 -left-4 font-mono text-xs px-3 py-2 rounded-xl backdrop-blur"
              style={{ border: '1px solid var(--border)', backgroundColor: 'var(--navbar-bg)', color: 'var(--text-muted)' }}
            >
              <span style={{ color: 'var(--accent)' }}>~/</span>ricky <span style={{ color: '#22C55E' }}>●</span> main
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
