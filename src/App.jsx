import Header from './components/Header';
import Hero from './components/Hero';
import NewsGrid from './components/NewsGrid';
import Sidebar from './components/Sidebar';

function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block h-5 w-5 bg-red-600 rounded-sm" />
            <span className="font-extrabold">ilmu baru</span>
          </div>
          <p className="text-neutral-600">Portal berita yang menyajikan informasi ringkas, akurat, dan relevan setiap hari.</p>
        </div>
        <div>
          <h6 className="font-bold mb-2">Kategori</h6>
          <ul className="space-y-1 text-neutral-700">
            <li><a href="#" className="hover:text-red-600">Nasional</a></li>
            <li><a href="#" className="hover:text-red-600">Internasional</a></li>
            <li><a href="#" className="hover:text-red-600">Teknologi</a></li>
            <li><a href="#" className="hover:text-red-600">Olahraga</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Perusahaan</h6>
          <ul className="space-y-1 text-neutral-700">
            <li><a href="#" className="hover:text-red-600">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-red-600">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-red-600">Syarat & Ketentuan</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-2">Ikuti Kami</h6>
          <p className="text-neutral-600">Instagram · X · YouTube</p>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} ilmu baru. Semua hak cipta.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter','Manrope','IBM Plex Sans',system-ui,sans-serif]">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <NewsGrid />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
