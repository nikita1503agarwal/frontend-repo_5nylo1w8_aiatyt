export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="bg-white border border-neutral-200 rounded-lg p-4">
        <h5 className="font-bold mb-3">Topik Hangat</h5>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-red-600">Pemilu 2025</a></li>
          <li><a href="#" className="hover:text-red-600">Ekonomi Global</a></li>
          <li><a href="#" className="hover:text-red-600">Teknologi AI</a></li>
          <li><a href="#" className="hover:text-red-600">Liga Nasional</a></li>
        </ul>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg p-4">
        <h5 className="font-bold mb-3">Newsletter</h5>
        <p className="text-sm text-neutral-600">Dapatkan ringkasan berita terbaik setiap pagi.</p>
        <form className="mt-3 space-y-2" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih sudah berlangganan!'); }}>
          <input type="email" required placeholder="Email Anda" className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none" />
          <button className="w-full py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700">Langganan</button>
        </form>
      </div>
    </aside>
  );
}
