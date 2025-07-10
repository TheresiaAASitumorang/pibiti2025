import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const moodQuotes = {
  happy: "Keep the vibes high and your volume higher! 🎶",
  sad: "It’s okay to not be okay. Here’s something to lift you up 💙",
  chill: "Just relax and let the music take over 🌊",
  energetic: "Let’s turn that energy into a beat! 🔥",
  kids: "Fun and smiles with every note! 🧸🎵",
  love: "Feel the heartbeat in every note 💖",
  workout: "Push harder, you’ve got this! 💪",
  study: "Stay focused, stay groovy 📚🎧",
  nostalgic: "Take a trip down memory lane 🎞️",
  party: "Let’s get this party started! 🎉",
  romantic: "Fall in love with the melody 💘",
  roadtrip: "The best tunes for the open road 🚗",
  calm: "Breathe in, breathe out... relax 🌿",
  motivation: "You’re unstoppable! 🚀",
  night: "Perfect vibes to end your day 🌙",
  rain: "Let the rain and rhythm soothe you 🌧️",
  angry: "Channel your fire with powerful beats 🔥",
  jazzy: "Smooth and classy — just like you 🎷",
  upbeat: "Brighten your day with these bops ☀️",
  mellow: "Soft sounds for soft moments 🍃",
  funky: "Get funky and move your feet 🕺",
  galau: "Galaunya jangan sendirian, ada musik yang nemenin 😢",
  baper: "Bikin baper? Musik ini cocok banget 🥺",
  semangat: "Gas terus! Jangan kasih kendor 💥",
  rebahan: "Musik santai buat kaum rebahan 😴",
  ngantuk: "Lagu slow buat nemenin merem 💭",
  berisik: "Lagu rame buat ngusir sepi 🔊",
  vibes: "Lagu yang vibe-nya kena banget ✨",
  ngedown: "Saat hati low, musik bisa jadi pelukannya 💔",
  santuy: "Musik santuy biar tetep chill 😎",
  bangkit: "Saatnya bangkit, semangat lagi! 💫",
};

const categories = [
  'happy', 'sad', 'chill', 'energetic', 'kids',
  'love', 'workout', 'study', 'nostalgic', 'party',
  'romantic', 'roadtrip', 'calm', 'motivation', 'night',
  'rain', 'angry', 'jazzy', 'upbeat', 'mellow',
  'funky', 'galau', 'baper', 'semangat', 'rebahan',
  'ngantuk', 'berisik', 'vibes', 'ngedown', 'santuy', 'bangkit'
];

const genzLabels = {
  happy: 'Seneng Pol 😄',
  sad: 'Lagi Down 😢',
  chill: 'Santai Aja 😎',
  energetic: 'Full Power 💥',
  kids: 'Buat Bocil 🧒',
  love: 'Lagi Sayang 💖',
  workout: 'NgeGym Time 🏋️',
  study: 'Belajar Kuy 📚',
  nostalgic: 'Kenangan Lama 😌',
  party: 'Pesta Gaskeun 🎉',
  romantic: 'Romantis Banget 💘',
  roadtrip: 'Ngetrip Yuk 🚗',
  calm: 'Tenang Dulu 🌿',
  motivation: 'Gaspol Lagi 🚀',
  night: 'Malam Vibes 🌙',
  rain: 'Hujan Datang 🌧️',
  angry: 'Kesel Nih 😤',
  jazzy: 'Smooth Banget 🎷',
  upbeat: 'Semangat Terus ☀️',
  mellow: 'Lembut & Syahdu 🍃',
  funky: 'Gerak Terus 🕺',
  galau: 'Galau Nation 💔',
  baper: 'Baper Mode On 🥺',
  semangat: 'Semangat 45 🔥',
  rebahan: 'Kaum Rebahan 😴',
  ngantuk: 'Ngantuk Banget 😪',
  berisik: 'Ramein Yuk 🔊',
  vibes: 'Feel the Vibes ✨',
  ngedown: 'Lagi Drop 😞',
  santuy: 'Santuy Mode 😌',
  bangkit: 'Bangkit Lagi 💫'
};

const ZTune = () => {
  const [songs, setSongs] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');

  const fetchSongs = async (mood) => {
    try {
      const response = await axios.get("https://deezerdevs-deezer.p.rapidapi.com/search", {
        params: { q: mood },
        headers: {
          'X-RapidAPI-Key': '966f243836msh59f516e8b849794p123fecjsn7b2889d8bec8',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      });
      setSongs(response.data.data);
      setSelectedMood(mood);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  const formatDuration = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6 bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-pink-700 drop-shadow-md">🎧 Z-Tune - Pilih Mood, Nikmati Lagu!</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-semibold px-5 py-2 rounded-full shadow-md transition-transform hover:scale-105"
            onClick={() => fetchSongs(cat)}
          >
            {genzLabels[cat] || cat.toUpperCase()}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="text-center text-xl italic text-purple-700 font-medium mb-6">
          {moodQuotes[selectedMood] || `Enjoy your ${selectedMood} vibes!`}
        </div>
      )}

      {songs.length > 0 && (
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-purple-200">
                <th className="text-left px-4 py-2">Judul Lagu</th>
                <th className="text-left px-4 py-2">Penyanyi</th>
                <th className="text-left px-4 py-2">Kategori</th>
                <th className="text-left px-4 py-2">Durasi</th>
                <th className="text-left px-4 py-2">Preview</th>
              </tr>
            </thead>
            <tbody>
              {songs.slice(0, 10).map((song) => (
                <tr key={song.id} className="border-b">
                  <td className="px-4 py-2">{song.title}</td>
                  <td className="px-4 py-2">{song.artist.name}</td>
                  <td className="px-4 py-2 capitalize">{genzLabels[selectedMood] || selectedMood}</td>
                  <td className="px-4 py-2">{formatDuration(song.duration)}</td>
                  <td className="px-4 py-2">
                    {song.preview && (
                      <audio controls src={song.preview} className="w-36" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-center mt-10">
        <Link to="/" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105">
          ⬅️ Balik ke Home
        </Link>
      </div>
    </div>
  );
};

export default ZTune;