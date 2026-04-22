import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const socials = [
    { label: 'GitHub', href: 'https://github.com/dwiricky', icon: '⌥' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ricky-dwi-setyawan', icon: 'in' },
    { label: 'WhatsApp', href: 'https://wa.me/628998034007', icon: '📞' },
    { label: 'Email', href: 'mailto:dwiricky47@gmail.com', icon: '@' },
  ];

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    color: 'var(--text)',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>05.</span>
        <h2 className="text-3xl md:text-5xl font-bold t-text">Get In Touch</h2>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left: Info */}
        <div>
          <p className="text-lg leading-relaxed mb-10 t-muted">
            Punya proyek yang ingin dikerjakan, pertanyaan, atau sekadar ingin menyapa —
            inbox saya selalu terbuka. Saya akan membalas dalam <strong className="t-text">24 jam</strong>.
            Atau hubungi langsung via{' '}
            <span className="font-semibold" style={{ color: 'var(--accent)' }}>dwiricky47@gmail.com</span>.
          </p>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-3">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all duration-200"
                  style={{ background: 'var(--accent)20', border: '1px solid var(--accent)30', color: 'var(--accent)' }}
                >
                  {icon}
                </span>
                <span className="text-sm font-semibold t-muted">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {sent && (
            <div
              className="rounded-xl px-4 py-3 text-sm font-mono font-semibold animate-pop-in"
              style={{ background: 'var(--accent)10', border: '1px solid var(--accent)', color: 'var(--accent)' }}
            >
              ✓ Pesan terkirim! Saya akan segera membalas.
            </div>
          )}

          {[
            { label: 'Nama', name: 'name', type: 'text', placeholder: 'Nama Anda' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'email@contoh.com' },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-xs font-mono t-dim mb-2 uppercase tracking-widest">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
          ))}

          <div>
            <label className="block text-xs font-mono t-dim mb-2 uppercase tracking-widest">Pesan</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Ada yang ingin Anda sampaikan?"
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-bold py-4 rounded-xl text-sm active:scale-95 transition-all duration-200"
            style={{ backgroundColor: 'var(--accent)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-h)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
          >
            Kirim Pesan →
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="font-mono text-xs t-dim">
          © 2025 Ricky Dwi Setyawan — Built with React + Tailwind
        </p>
        <p className="font-mono text-xs t-dim">
          Made with <span style={{ color: 'var(--accent)' }}>♥</span> & lots of coffee
        </p>
      </div>
    </section>
  );
}
