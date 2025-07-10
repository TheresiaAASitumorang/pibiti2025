export default function Contact() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg border border-pink-200">
      <h1 className="text-3xl font-extrabold text-pink-600 mb-2 text-center">
        🗣️ Punya Saran atau Unek-Unek?
      </h1>

      <p className="text-center text-gray-700 mb-6">
        Tenang bestie, tim Zzzone siap dengerin kamu! Apa pun yang mau kamu sampein — masukin aja ke sini 💬✨
      </p>

      <div className="bg-white rounded-xl p-4 shadow-inner mb-4 space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-pink-500 text-xl">👥</span>
          <p className="text-gray-800 font-medium">Zzzone Support Squad</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-pink-500 text-xl">💌</span>
          <p className="text-gray-800">support@zzzone.id</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-pink-500 text-xl">📞</span>
          <p className="text-gray-800">+62 812-3456-7890</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-pink-500 text-xl">📍</span>
          <p className="text-gray-800">Jl. Inspirasi No. 99, Jakarta</p>
        </div>
      </div>

      <div className="bg-pink-50 rounded-lg p-4 text-sm text-gray-600 italic">
        ⏰ Kita bakal coba respon dalam waktu 1x24 jam ya, khususnya pas hari kerja. 
        Jadi jangan buru-buru baper kalau belum dibales, oke? 🧃
      </div>

      <p className="text-center mt-6 text-gray-500 text-xs">
        Terima kasih udah jadi bagian dari <span className="font-bold text-pink-500">Zzzone</span> 🌈✨
      </p>
    </div>
  );
}
