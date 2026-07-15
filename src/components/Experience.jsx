const experiences = [
  {
    company: 'Apex Horizon',
    period: 'Juni 2026 – Sekarang',
    role: 'Senior Fullstack Developer',
    roles: [
      'Senior Fullstack Developer: Memimpin desain arsitektur dan pengembangan aplikasi web end-to-end, dari frontend hingga backend.',
      'Technical Leadership: Menetapkan standar kode, code review, dan best practice untuk menjaga kualitas & skalabilitas produk.',
      'System Design: Merancang API, database, dan integrasi layanan yang efisien, aman, dan mudah dikelola.',
    ],
    color: '#6366F1',
    logo: '/projects/apex-logo.avif',
  },
  {
    company: 'Jember Mini Zoo',
    period: 'Mei 2025 – Sekarang',
    roles: [
      'IT Staff: Bertanggung jawab dalam pemeliharaan infrastruktur jaringan dan sistem informasi zoo.',
      'Software Developer: Mengembangkan dan mengelola aplikasi internal untuk efisiensi operasional.',
      'Sistem Manajemen: Implementasi solusi digital untuk manajemen pengunjung dan inventaris.',
    ],
    color: '#FF006E',
    logo: '/projects/jemberminizoo.webp',
  },
  {
    company: 'Badan Riset dan Inovasi Nasional (BRIN)',
    period: 'Agustus 2024 – Desember 2024',
    roles: [
      'Data Analyst: Analisis dan interpretasi data untuk pengambilan keputusan.',
      'Data Engineer: Merancang infrastruktur dan pipeline data yang efisien.',
      'AI Engineer: Mengembangkan solusi berbasis kecerdasan buatan untuk riset.',
      'Data Scientist: Menerapkan machine learning untuk wawasan dari data besar.',
    ],
    color: '#00D4FF',
    logo: '/projects/brin.png',
  },
  {
    company: 'Gamelab.ID (MSIB Bootcamp)',
    period: 'Januari 2024 – Mei 2024',
    roles: [
      'Fullstack Web Developer: Mengembangkan web untuk keperluan marketing.',
      'Desain Web: Merancang tampilan dan UX/UI yang menarik dan mudah digunakan.',
      'Pengembangan Fitur: Membuat fitur yang meningkatkan interaksi pengguna.',
    ],
    color: '#7B2FBE',
    logo: '/projects/gamelabid.png',
  },
  {
    company: 'Roda Jaya',
    period: 'Desember 2023 – Februari 2024',
    roles: [
      'Fullstack Web Developer: Mengembangkan web untuk keperluan marketing.',
      'Desain Web: Merancang tampilan dan UI/UX yang menarik dan mudah digunakan.',
      'Pengembangan Fitur: Membuat fitur fungsional yang bermanfaat bagi pengguna.',
    ],
    color: '#3A86FF',
    logo: '/projects/rodajayalogo.png',
  },
  {
    company: 'Freelance',
    period: 'Januari 2022 – Sekarang',
    roles: [
      'AI Projects: Mengerjakan proyek terkait AI, pengembangan model dan algoritma.',
      'Database Projects: Menangani desain, pengelolaan, dan optimasi database.',
      'Data Engineer: Merancang pipeline data yang efisien dan tepat waktu.',
      'Data Scientist: Menerapkan machine learning dan statistik untuk prediksi.',
    ],
    color: '#00D4FF',
    logo: '/projects/github.png', // Using github logo for freelance/projects
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>02.</span>
        <h2 className="text-3xl md:text-5xl font-bold t-text">Pengalaman Kerja</h2>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      {/* Modern CV list */}
      <div>
        {experiences.map((exp, idx) => {
          const current = /sekarang/i.test(exp.period);
          return (
            <div
              key={idx}
              className="group grid md:grid-cols-[210px_1fr] gap-5 md:gap-10 py-9 transition-all duration-300"
              style={{ borderTop: '1px solid var(--border)' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = exp.color)}
              onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = 'var(--border)')}
            >
              {/* Left meta — prominent company logo */}
              <div className="flex md:flex-col md:items-start items-center gap-4">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden flex items-center justify-center p-2.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ border: `1px solid ${exp.color}40`, backgroundColor: `${exp.color}12` }}
                >
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[13px] font-semibold" style={{ color: exp.color }}>
                    {exp.period}
                  </span>
                  {current && (
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
                      style={{ color: '#22C55E', border: '1px solid rgba(34,197,94,0.35)', backgroundColor: 'rgba(34,197,94,0.08)' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      Now
                    </span>
                  )}
                </div>
              </div>

              {/* Right content */}
              <div className="md:pl-10 md:border-l" style={{ borderColor: 'var(--border)' }}>
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold t-text leading-tight">{exp.company}</h3>
                  <p className="font-mono text-xs mt-1" style={{ color: exp.color }}>
                    {exp.role || exp.roles[0].split(':')[0]}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.roles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm t-muted leading-relaxed">
                      <span
                        className="mt-2 w-1.5 h-1.5 rotate-45 flex-shrink-0"
                        style={{ backgroundColor: exp.color }}
                      />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
        <div style={{ borderTop: '1px solid var(--border)' }} />
      </div>
    </section>
  );
}
