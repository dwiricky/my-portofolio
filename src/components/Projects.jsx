import { useState } from 'react';

const projects = [
  {
    id: 7,
    title: 'Sistem Penjualan Tiket Online',
    year: '2026',
    description: 'Platform manajemen dan penjualan tiket terintegrasi. Memudahkan proses transaksi pengunjung dan pelaporan data secara real-time.',
    tags: ['Laravel', 'MySQL', 'Fullstack'],
    color: '#FF006E',
    image: null,
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
    image: null,
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
    image: null,
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
    year: '2023',
    description: 'Platform marketing Roda Jaya yang memperkenalkan produk dan layanan perusahaan serta memfasilitasi interaksi pelanggan dengan berbagai fitur yang bermanfaat.',
    tags: ['Fullstack', 'Web', 'UI/UX', 'Marketing'],
    color: '#00D4FF',
    image: '/projects/rodajaya.png',
    live: '#',
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

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>04.</span>
        <h2 className="text-3xl md:text-5xl font-bold t-text">Karya & Proyek</h2>
        <div className="flex-1 h-px ml-4" style={{ backgroundColor: 'var(--border)' }} />
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              border: `1px solid ${hovered === project.id ? project.color : 'var(--border)'}`,
              backgroundColor: 'var(--bg-card)',
            }}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Color accent bar */}
            <div
              className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 z-10"
              style={{ backgroundColor: project.color }}
            />

            {/* Project Image */}
            {project.image ? (
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                  style={{ background: `${project.color}20`, backdropFilter: 'blur(2px)' }}
                >
                  <a
                    href={project.github}
                    className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold text-white transition-all hover:scale-110"
                    style={{ backgroundColor: 'rgba(0,0,0,0.7)', borderColor: 'rgba(255,255,255,0.3)' }}
                    title="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GH
                  </a>
                  <a
                    href={project.live}
                    className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                    style={{ backgroundColor: project.color, borderColor: project.color, color: 'white' }}
                    title="Live Demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ↗
                  </a>
                </div>
              </div>
            ) : (
              /* Placeholder for projects without image */
              <div
                className="h-24 flex items-center justify-center text-4xl opacity-30"
                style={{ background: `linear-gradient(135deg, ${project.color}10, transparent)` }}
              >
                {project.id === 3 ? '📊' : '🌐'}
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold t-text group-hover:opacity-90 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs t-dim">{project.year}</span>
                </div>
                {/* Links for no-image cards */}
                {!project.image && (
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a href={project.github} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold t-muted hover:t-text transition-colors" style={{ border: '1px solid var(--border)' }} title="GitHub">GH</a>
                    <a href={project.live} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors" style={{ border: `1px solid ${project.color}`, color: project.color }} title="Live Demo">↗</a>
                  </div>
                )}
              </div>
              <p className="t-muted text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{ backgroundColor: 'var(--bg-card-h)', color: 'var(--text-muted)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
