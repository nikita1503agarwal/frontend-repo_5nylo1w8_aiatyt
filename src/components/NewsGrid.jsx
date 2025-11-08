const articles = [
  {
    id: 1,
    category: 'Nasional',
    title: 'Ekonomi Tumbuh Stabil di Tengah Tantangan Global',
    image: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Internasional',
    title: 'Pertemuan Puncak Dunia Bahas Iklim dan Energi',
    image: 'https://images.unsplash.com/photo-1479659929431-4342107adfc1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Teknologi',
    title: 'Perusahaan Rintisan Lokal Rilis Chip Hemat Energi',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Olahraga',
    title: 'Tim Nasional Catat Kemenangan Bersejarah',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Bisnis',
    title: 'Investasi Asing Meningkat di Sektor Teknologi',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'Gaya Hidup',
    title: 'Tren Kesehatan 2025: Hidup Aktif dan Seimbang',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function NewsGrid() {
  return (
    <section id="terkini" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-xl font-extrabold">Berita Terkini</h3>
          <a href="#" className="text-sm text-red-600 hover:underline">Lihat semua</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-red-600">{a.category}</span>
                <h4 className="mt-1 font-bold leading-snug">{a.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
