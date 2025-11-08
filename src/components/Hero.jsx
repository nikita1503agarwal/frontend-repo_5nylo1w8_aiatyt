export default function Hero() {
  return (
    <section className="bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 bg-white rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
            alt="Headline utama"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-600">Headline</span>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight">
              Rangkuman Berita Utama Hari Ini: Sorotan Nasional hingga Dunia
            </h1>
            <p className="mt-3 text-neutral-600">
              Ikuti perkembangan terbaru dari berbagai penjuru dengan analisis tajam dan fakta terverifikasi.
            </p>
          </div>
        </article>

        <div className="grid grid-rows-2 gap-6">
          <article className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt="Sorotan 1"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg leading-snug">Kebijakan Baru Pemerintah Diperdebatkan Publik</h2>
            </div>
          </article>
          <article className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
              alt="Sorotan 2"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg leading-snug">Inovasi Teknologi AI Memasuki Tahap Baru</h2>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
