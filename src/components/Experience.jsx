const experiences = [
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
    icon: '🏛️',
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
    icon: '🎮',
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
    icon: '🏢',
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
    icon: '💼',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>02.</span>
        <h2 className="text-3xl md:text-5xl font-bold t-text">Pengalaman Kerja</h2>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--border)' }} />
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative md:pl-20">
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 items-center justify-center transition-all duration-300 group-hover:scale-125"
                style={{ borderColor: exp.color, backgroundColor: `${exp.color}20` }}
              />
              {/* Card */}
              <div
                className="rounded-2xl p-6 transition-all duration-300"
                style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = exp.color}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{exp.icon}</span>
                    <h3 className="text-lg font-bold t-text">{exp.company}</h3>
                  </div>
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full border"
                    style={{ color: exp.color, borderColor: `${exp.color}50` }}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.roles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm t-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
