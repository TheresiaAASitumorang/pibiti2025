import React from "react";
import { motion } from "framer-motion";
import mascotImg from "/public/2.png"; // pastikan file ini ada di folder assets

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center text-indigo-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ✨ Tentang ZZZone ✨
      </motion.h1>

      <motion.img
        src={mascotImg}
        alt="Gen Z Mascot"
        className="w-40 mx-auto mb-8 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />

      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">🌀 ZZZone Itu Apa Sih?</h2>
          <p>
            ZZZone itu kayak tongkrongan online-nya Gen Z buat bebas ekspresi! Di sini kamu bisa curhat anonim, nentuin genre lagu sesuai mood, pake timer biar fokus, sampai baca tips kece khas anak muda zaman now.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">🤔 Kenapa ZZZone Ada?</h2>
          <p>
            Kadang kita butuh ruang buat jadi diri sendiri tanpa tekanan. Nah, ZZZone hadir jadi tempat aman, asik, dan relate abis buat nyalurin pikiran, perasaan, dan vibes kamu tanpa takut dihakimi.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-500 mb-2">🌱 Manfaatnya Buat Kamu?</h2>
          <p>
            ZZZone bisa bantu kamu:
            <ul className="list-disc ml-6 mt-2">
              <li>Lepas stres dan overthinking lewat curhat atau journaling</li>
              <li>Fokus belajar pakai timer yang estetik</li>
              <li>Explore musik yang cocok sama mood kamu</li>
              <li>Dapetin insight dan tips hidup kece ala Gen Z</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-500 mb-2">🎯 Goal Kita?</h2>
          <p>
            Bikin platform yang relate, supportive, dan empowering. Di ZZZone, kamu bisa jadi diri sendiri, dapet semangat, dan tumbuh bareng sampai jadi gen z sigma super keren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-500 mb-2">💫 Harapan Buat Kamu</h2>
          <p>
            Harapan kami, ZZZone bisa jadi safe space yang bikin kamu nyaman dan happy. Tetap ekspresif, tetap kreatif, dan jangan lupa: kamu berharga dan luar biasa ✨💖
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
