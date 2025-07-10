import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ZTips() {
  const [activity, setActivity] = useState('');
  const [step, setStep] = useState('input');
  const [timerType, setTimerType] = useState(null);
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('focusHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [startTime, setStartTime] = useState(null);
  const [currentMotivation, setCurrentMotivation] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const audioRef = useRef(null);

  const motivations = [
    "🔥 Fokus dulu, scroll nanti!",
    "🚀 You got this!",
    "🌈 Jangan lupa senyum ya!",
    "📢 Konsentrasi itu seksi.",
    "💡 Tugas dulu, rebahan nanti!",
    "🥤 Ngopi? Boleh. Tapi jangan kabur!",
    "✨ Gen Z paling bisa multitasking.",
    "🧠 Otak encer, fokus bener.",
  ];

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setTimeout(() => {
        if (timerType === 'countdown') {
          if (timeLeft > 0) {
            setTimeLeft(prev => prev - 1);
          } else {
            audioRef.current?.play();
            saveHistory(duration * 60);
            setIsRunning(false);
            setStep('done');
            setShowSuccess(true); // Notifikasi saat selesai
          }
        } else if (timerType === 'forward') {
          setTimeLeft(prev => prev + 1);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, timerType]);

  useEffect(() => {
    localStorage.setItem('focusHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const random = motivations[Math.floor(Math.random() * motivations.length)];
        setCurrentMotivation(random);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const saveHistory = (usedSeconds) => {
    const now = new Date();
    const entry = {
      activity,
      duration: `${Math.floor(usedSeconds / 60)}m ${usedSeconds % 60}s`,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };
    setHistory(prev => [...prev, entry]);
  };

  const handleStart = () => {
    if (timerType === 'countdown') {
      setTimeLeft(duration * 60);
    } else {
      setTimeLeft(0);
    }
    setStartTime(Date.now());
    setIsRunning(true);
    setStep('timer');
  };

  const handleStop = () => {
    const used = Math.floor((Date.now() - startTime) / 1000);
    saveHistory(used);
    audioRef.current?.play();
    alert("😒 Yah... nyerah di tengah jalan. Tapi gapapa sih. Kita simpan riwayatnya.");
    setIsRunning(false);
    setStep('done');
  };

  const deleteEntry = (indexToDelete) => {
    const confirmDelete = window.confirm("Yakin mau hapus riwayat ini? 😢");
    if (confirmDelete) {
      const updated = history.filter((_, index) => index !== indexToDelete);
      setHistory(updated);
    }
  };

  const resetHistory = () => {
    if (history.length <= 1) {
      alert("Riwayat terlalu sedikit untuk di-reset.");
      return;
    }
    if (window.confirm("Yakin mau hapus semua riwayat kecuali yang terakhir? 😱")) {
      const lastItem = history[history.length - 1];
      setHistory([lastItem]);
    }
  };

  const navigate = useNavigate();


  return (
    <div className="p-8 max-w-3xl mx-auto text-center font-sans relative">
      <h1 className="text-3xl font-bold mb-4 text-pink-500">⏰ Z-Freeze</h1>
      <p className="mb-6 text-gray-700">Timer lucu ala Gen Z. Fokus bentar, rebahan lama 😎</p>

      <audio ref={audioRef} src="/alarm.mp3" preload="auto" />

      {/* ✅ Notifikasi Sukses */}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white text-center p-6 rounded-lg shadow-xl border-4 border-green-400 animate-bounce">
            <h2 className="text-3xl font-bold text-green-600 mb-2">🎉 Selamat!</h2>
            <p className="text-lg text-gray-700">Kamu berhasil menyelesaikan waktu fokusmu! Bangga banget!</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Makasih! ❤️
            </button>
          </div>
        </div>
      )}

      {/* Step Input */}
      {step === 'input' && (
        <div className="space-y-4">
          <p className="text-lg">Fokus untuk kegiatan apa nih?</p>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="Contoh: Kerjain Tugas PPKN"
            className="border rounded-lg px-4 py-2 w-full text-center"
          />
          <button
            onClick={() => setStep('chooseType')}
            disabled={!activity}
            className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition"
          >
            Lanjut ➤
          </button>
        </div>
      )}

      {step === 'chooseType' && (
        <div className="space-y-4">
          <p>Pilih tipe timer:</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => { setTimerType('forward'); setStep('confirm'); }} className="btn bg-violet-600 text-white px-4 py-2 rounded-lg">Timer Maju ⏱️</button>
            <button onClick={() => { setTimerType('countdown'); setStep('countdownSetup'); }} className="btn bg-violet-600 text-white px-4 py-2 rounded-lg">Timer Mundur ⏳</button>
          </div>
        </div>
      )}

      {step === 'countdownSetup' && (
        <div className="space-y-4">
          <p>Mau fokus berapa menit?</p>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            placeholder="Contoh: 25"
            className="border rounded-lg px-4 py-2 w-24 text-center"
          />
          <button
            onClick={() => setStep('confirm')}
            disabled={duration <= 0}
            className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500"
          >
            Lanjut ➤
          </button>
        </div>
      )}

      {step === 'confirm' && (
        <div className="space-y-4">
          <p className="text-lg">Serius mau mulai fokus untuk:</p>
          <h3 className="font-semibold text-pink-600">{activity}</h3>
          <div className="flex justify-center gap-4">
            <button onClick={handleStart} className="bg-green-500 text-white px-4 py-2 rounded-lg">Ya, sangat serius!</button>
            <button onClick={() => setStep('input')} className="bg-red-400 text-white px-4 py-2 rounded-lg">Tidak jadi</button>
          </div>
        </div>
      )}

      {step === 'timer' && (
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-pink-500 animate-bounce">{formatTime(timeLeft)}</h2>
          <p className="text-gray-600">Sedang fokus: <span className="font-semibold">{activity}</span></p>
          <p className="text-5xl bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent font-extrabold animate-pulse mt-4">
            {currentMotivation}
          </p>
          {timerType === 'forward' ? (
            <button
              onClick={() => {
                if (window.confirm("Yakin udah selesai? Fokusnya baru sebentar loh.")) {
                  const used = Math.floor((Date.now() - startTime) / 1000);
                  saveHistory(used);
                  setIsRunning(false);
                  setStep('done');
                  audioRef.current?.play();
                }
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >Selesai ✅</button>
          ) : (
            <button
              onClick={() => {
                if (window.confirm("Yakin mau nyerah sekarang?")) {
                  handleStop();
                }
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >Berhenti</button>
          )}
        </div>
      )}

      {step === 'done' && (
        <div className="space-y-4">
          <p>Mau ulang atau istirahat dulu?</p>
          <div className="flex justify-center gap-4">
            <button onClick={handleStart} className="bg-purple-500 text-white px-4 py-2 rounded-lg">Ulangi 🔁</button>
            <button onClick={() => {
              setStep('input');
              setActivity('');
              setDuration(0);
              setTimeLeft(0);
              setTimerType(null);
            }} className="bg-red-400 text-white px-4 py-2 rounded-lg">Berhenti</button>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-10">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-pink-500">📜 Riwayat Fokus</h3>
            <button
              onClick={resetHistory}
              className="bg-red-300 hover:bg-red-500 text-white px-3 py-1 rounded"
            >
              Reset Semua
            </button>
          </div>
          <table className="table-auto w-full border-collapse text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="py-2 px-4 border">Nama Kegiatan</th>
                <th className="py-2 px-4 border">Durasi Fokus</th>
                <th className="py-2 px-4 border">Tanggal</th>
                <th className="py-2 px-4 border">Jam</th>
                <th className="py-2 px-4 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border">{item.activity}</td>
                  <td className="py-2 px-4 border">{item.duration}</td>
                  <td className="py-2 px-4 border">{item.date}</td>
                  <td className="py-2 px-4 border">{item.time}</td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => deleteEntry(index)}
                      className="bg-red-400 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-10">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-600">⬅️ Kembali ke Home
        </button>
      </div>
    </div>
  );
}

export default ZTips;
