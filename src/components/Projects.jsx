const projects = [
  {
    id: 11,
    title: 'Jember Mini Zoo',
    year: '2025 - Sekarang',
    description: 'Website resmi Jember Mini Zoo. Platform informasi wisata edukasi yang menyajikan berbagai informasi terkait satwa, wahana, paket kegiatan, dan pemesanan tiket.',
    tags: ['Web', 'Company Profile', 'Tourism'],
    color: '#E87D00', // Orange matching the theme in the image
    image: '/projects/jemberminizoo.png',
    live: 'https://jemberminizoo.com',
    github: '#',
  },
  {
    id: 12,
    title: 'Career Jember Mini Zoo',
    year: '2025 - Sekarang',
    description: 'Portal karir resmi Jember Mini Zoo. Memfasilitasi proses rekrutmen pegawai dengan informasi lowongan kerja, magang, dan informasi seputar karir di Jember Mini Zoo.',
    tags: ['Web', 'Career', 'Portal'],
    color: '#E3C16F', // Yellowish matching the theme
    image: '/projects/careerjmz.png',
    live: 'https://career.jemberminizoo.com',
    github: '#',
  },
  {
    id: 7,
    title: 'Sistem Penjualan Tiket Online',
    year: '2026',
    description: 'Platform manajemen dan penjualan tiket terintegrasi. Memudahkan proses transaksi pengunjung dan pelaporan data secara real-time.',
    tags: ['Laravel', 'MySQL', 'Fullstack'],
    color: '#FF006E',
    image: '/projects/ticket.png',
    live: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'IoT Smart Gate System',
    year: '2026',
    description: 'Sistem otomatisasi gerbang masuk menggunakan sensor dan mikrokontroler. Terintegrasi dengan database untuk validasi akses.',
    tags: ['Arduino Uno', 'C++', 'IoT', 'Hardware'],
    color: '#00D4FF',
    image: null,
    live: '#',
    github: '#',
  },
  {
    id: 9,
    title: 'Aplikasi Absensi Pegawai',
    year: '2026',
    description: 'Sistem manajemen kehadiran karyawan dengan fitur pelaporan otomatis dan dashboard monitoring tingkat lanjut.',
    tags: ['Laravel', 'Backend', 'Management'],
    color: '#7B2FBE',
    image: '/projects/attendance.png',
    live: '#',
    github: '#',
  },
  {
    id: 10,
    title: 'Smart Cafe POS & Inventory',
    year: '2026',
    description: 'Aplikasi penjualan untuk cafe yang terintegrasi langsung dengan manajemen stok barang otomatis untuk efisiensi bisnis.',
    tags: ['Flutter', 'Mobile', 'Inventory'],
    color: '#3A86FF',
    image: '/projects/cafe.png',
    live: '#',
    github: '#',
  },
  {
    id: 1,
    title: 'SPBE.AI',
    year: '2025',
    description: 'Website berbasis Artificial Intelligence GPT untuk mendukung pengembangan sistem pemerintahan berbasis elektronik (SPBE). Mengintegrasikan GPT untuk pembuatan konten otomatis, chatbot pintar, dan analisis data.',
    tags: ['AI', 'GPT', 'Web', 'SPBE'],
    color: '#00D4FF',
    image: '/projects/spbeai.png',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Smart Tourism BRIN x POLJE',
    year: '2024',
    description: 'Kolaborasi BRIN dan Politeknik Negeri Jember. Website Smart Tourism yang memanfaatkan teknologi informasi berbasis data dan kecerdasan buatan untuk akses informasi wisata yang lebih mudah.',
    tags: ['AI', 'Data Science', 'Tourism', 'BRIN'],
    color: '#7B2FBE',
    image: '/projects/smarttourism.png',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Dataset Wisata Unggulan Indonesia',
    year: '2024',
    description: 'Dataset 5 Destinasi Wisata Unggulan Indonesia mencakup data lokasi, fasilitas, rating, dan informasi pendukung. Digunakan untuk analisis wisata dan rekomendasi berbasis data.',
    tags: ['Data Engineering', 'Dataset', 'Analytics'],
    color: '#3A86FF',
    image: null,
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Website Roda Jaya',
    year: '2023 & 2026',
    description: 'Platform marketing Roda Jaya yang memperkenalkan produk dan layanan perusahaan serta memfasilitasi interaksi pelanggan dengan berbagai fitur yang bermanfaat.',
    tags: ['Fullstack', 'Web', 'UI/UX', 'Marketing'],
    color: '#00D4FF',
    image: '/projects/rodajaya.png',
    live: 'https://rodajayajember.com',
    github: '#',
  },
  {
    id: 5,
    title: 'Hep2Lab — Deteksi Sel Hep2',
    year: '2023',
    description: 'Website platform layanan deteksi dan analisis sel Hep2. Memperkenalkan layanan terkait deteksi penyakit melalui analisis sel, serta memberikan informasi penelitian dan teknologi terkait.',
    tags: ['AI', 'Healthcare', 'Web', 'Analysis'],
    color: '#7B2FBE',
    image: '/projects/hep2lab.png',
    live: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Go-Rent',
    year: '2022',
    description: 'Aplikasi mobile dan website untuk pemesanan sewa kendaraan secara online tanpa perlu ke tempat pemesanan. Website berfungsi sebagai admin yang mengatur kendaraan yang ditampilkan di aplikasi.',
    tags: ['Mobile', 'Fullstack', 'Web', 'Backend'],
    color: '#3A86FF',
    image: '/projects/gorent.png',
    live: '#',
    github: '#',
  },
];

const isReal = (url) => url && url !== '#';

function Placeholder({ color }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${color}12, transparent 70%)` }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 opacity-50" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>04.</span>
        <h2 className="text-3xl md:text-5xl font-bold t-text">Karya & Proyek</h2>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = project.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            {/* Media */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Placeholder color={project.color} />
              )}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.28), transparent 55%)' }} />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              {/* Year + category dot */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                <span className="font-mono text-xs t-dim">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold t-text leading-snug mb-1.5">{project.title}</h3>

              {/* Description */}
              <p className="t-muted text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

              {/* Tags — minimal mono line */}
              <p className="font-mono text-[11px] t-dim mb-4 mt-auto">
                {project.tags.join('  ·  ')}
              </p>

              {/* Links — only when real */}
              {(isReal(project.live) || isReal(project.github)) && (
                <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  {isReal(project.live) && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono transition-colors"
                      style={{ color: project.color }}
                    >
                      Live Demo
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {isReal(project.github) && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono t-muted transition-colors hover:t-text"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* GitHub Profile Highlight */}
      <div className="mt-20">
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="h-px w-16 md:w-32" style={{ backgroundColor: 'var(--border)' }} />
          <h3 className="text-lg md:text-xl font-bold t-dim tracking-wider uppercase">Open Source & Contributions</h3>
          <div className="h-px w-16 md:w-32" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        <div className="text-center">
          <a
            href="https://github.com/dwiricky"
            target="_blank"
            rel="noreferrer"
            className="group relative block rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 max-w-5xl mx-auto"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {/* Image display */}
            <div className="relative overflow-hidden" style={{ maxHeight: '600px' }}>
              <img
                src="/projects/github.png"
                alt="Ricky Dwi GitHub Portfolio"
                className="w-full h-auto object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Overlay on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4"
                style={{ background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(2px)' }}
              >
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                  <span className="text-white font-bold text-3xl md:text-5xl drop-shadow-lg">
                    Visit GitHub Profile
                  </span>
                  <span className="text-white font-mono text-sm md:text-base border border-white/40 bg-black/40 px-6 py-2 rounded-full flex items-center gap-2">
                    github.com/dwiricky
                    <span className="text-xl leading-none">↗</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
