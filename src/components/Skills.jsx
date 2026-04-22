const skills = [
  {
    name: 'Backend Web Development',
    level: 'Expert',
    icon: '⚙️',
    color: '#00D4FF',
    desc: 'Merancang dan mengembangkan bagian belakang aplikasi web, termasuk pengelolaan server, API, dan database.',
  },
  {
    name: 'Backend Mobile Development',
    level: 'Advanced',
    icon: '📱',
    color: '#7B2FBE',
    desc: 'Mengembangkan bagian backend aplikasi mobile, termasuk pengelolaan server dan database yang mendukung aplikasi mobile.',
  },
  {
    name: 'Artificial Intelligence Engineering',
    level: 'Advanced',
    icon: '🤖',
    color: '#3A86FF',
    desc: 'Merancang dan mengembangkan solusi berbasis kecerdasan buatan, termasuk pembuatan algoritma dan implementasi AI untuk sistem prediktif.',
  },
  {
    name: 'Data Analysis',
    level: 'Expert',
    icon: '📊',
    color: '#00D4FF',
    desc: 'Menganalisis dan menafsirkan data untuk mendapatkan wawasan yang dapat digunakan untuk pengambilan keputusan berbasis data.',
  },
  {
    name: 'Data Engineering',
    level: 'Advanced',
    icon: '🛠️',
    color: '#7B2FBE',
    desc: 'Merancang dan membangun infrastruktur data dan pipeline untuk pengolahan dan pemrosesan data besar.',
  },
  {
    name: 'Machine Learning Engineering',
    level: 'Advanced',
    icon: '🧠',
    color: '#3A86FF',
    desc: 'Mengembangkan dan mengimplementasikan algoritma machine learning untuk membuat model yang dapat belajar dari data dan membuat prediksi.',
  },
  {
    name: 'Data Science',
    level: 'Advanced',
    icon: '🔬',
    color: '#00D4FF',
    desc: 'Menggunakan analisis data dan machine learning untuk menggali wawasan dari data yang kompleks dan besar, serta mengembangkan model untuk mendukung keputusan bisnis atau penelitian.',
  },
];

const levelColor = {
  Expert: '#00D4FF',
  Advanced: '#7B2FBE',
  Intermediate: '#3A86FF',
};

const techStack = [
  'Python', 'Backend Web', 'REST API', 'AI Engineering', 'Machine Learning', 'Data Science',
  'Data Engineering', 'Database', 'Algorithm', 'Mobile Backend', 'Data Analysis', 'Backend Mobile',
  'Python', 'Backend Web', 'REST API', 'AI Engineering', 'Machine Learning', 'Data Science',
  'Data Engineering', 'Database', 'Algorithm', 'Mobile Backend', 'Data Analysis', 'Backend Mobile',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>03.</span>
        <h2 className="text-3xl md:text-5xl font-bold t-text">Kemampuan</h2>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      {/* Skill Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {skills.map(({ name, level, icon, color, desc }) => (
          <div
            key={name}
            className="group rounded-xl p-5 transition-all duration-200"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = color}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  {icon}
                </span>
                <span className="font-bold text-sm t-text group-hover:opacity-90 transition-colors leading-tight">
                  {name}
                </span>
              </div>
              <span
                className="font-mono text-xs font-bold px-3 py-1 rounded-full border flex-shrink-0 ml-2"
                style={{
                  color: levelColor[level],
                  borderColor: `${levelColor[level]}40`,
                  background: `${levelColor[level]}10`,
                }}
              >
                {level}
              </span>
            </div>
            {/* Description */}
            <p className="text-xs leading-relaxed pl-12 t-muted group-hover:opacity-80 transition-colors">
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="mb-16">
        <h3 className="text-sm font-semibold t-dim mb-4 uppercase tracking-widest">Bahasa</h3>
        <div className="flex gap-3">
          {['🇮🇩 Indonesia', '🇬🇧 Inggris'].map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 rounded-full text-sm font-mono font-semibold t-muted transition-all cursor-default hover:scale-105"
              style={{ border: '1px solid var(--border)' }}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="overflow-hidden py-4 -mx-6 px-6" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
          {techStack.map((t, i) => (
            <span
              key={i}
              className="font-mono text-sm font-bold uppercase tracking-widest"
              style={{ color: i % 2 === 0 ? 'var(--accent)' : '#7B2FBE' }}
            >
              {t} <span className="mx-2" style={{ color: 'var(--border)' }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
