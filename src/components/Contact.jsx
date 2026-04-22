import { useState } from 'react';

export default function Contact() {
  const socials = [
    { label: 'GitHub', href: 'https://github.com/dwiricky', icon: '⌥', color: '#333' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ricky-dwi-setyawan', icon: 'in', color: '#0077B5' },
    { label: 'WhatsApp', href: 'https://wa.me/628998034007', icon: '📞', color: '#25D366' },
    { label: 'Email', href: 'mailto:dwiricky47@gmail.com', icon: '@', color: 'var(--accent)' },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 mb-16 text-center">
        <span className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>05. What's Next?</span>
        <h2 className="text-4xl md:text-6xl font-bold t-text">Get In Touch</h2>
        <div className="w-24 h-1 mt-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl leading-relaxed mb-12 t-muted">
          Punya proyek yang ingin dikerjakan, pertanyaan, atau sekadar ingin menyapa? 
          Saya selalu terbuka untuk diskusi baru dan peluang menarik. 
          Hubungi saya langsung melalui salah satu platform di bawah ini:
        </p>

        {/* Big Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {socials.map(({ label, href, icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1"
              style={{ 
                border: '1px solid var(--border)', 
                backgroundColor: 'var(--bg-card)',
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 10px 30px ${color}15`;
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-mono text-xl font-bold transition-all duration-300"
                  style={{ background: `${color}15`, border: `1px solid ${color}30`, color: color }}
                >
                  {icon}
                </span>
                <div className="text-left">
                  <span className="block text-xs font-mono t-dim uppercase tracking-widest">{label}</span>
                  <span className="block text-lg font-bold t-text group-hover:opacity-90">{label === 'Email' ? 'Kirim Pesan' : 'Hubungi Saya'}</span>
                </div>
              </div>
              <span className="text-xl opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: color }}>→</span>
            </a>
          ))}
        </div>

        {/* Main Email Highlight */}
        <div className="inline-block relative">
          <a 
            href="mailto:dwiricky47@gmail.com"
            className="text-2xl md:text-4xl font-bold transition-colors hover:text-[var(--accent)] t-text"
          >
            dwiricky47@gmail.com
          </a>
          <div className="h-0.5 w-full mt-1 bg-current opacity-20" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="font-mono text-xs t-dim">
          © 2026 Ricky Dwi Setyawan — Built with React + Tailwind
        </p>
        <p className="font-mono text-xs t-dim">
          Dibuat dengan <span style={{ color: 'var(--accent)' }}>♥</span> & Semangat
        </p>
      </div>
    </section>
  );
}
