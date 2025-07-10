import React from 'react';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'rgb(216, 211, 190)' }}>
      <Hero />
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        <Card 
          title=" Z-Tips" 
          description="Tips produktif ala Gen Z. Ringan, lucu, dan gak maksa. Cocok buat kamu yang pengen ngerjain tugas, tapi... scroll dulu." 
          emoji="⏰"
        />
        <Card 
          title="Z-Spirit"  
          description="Fitur motivasi harian buat kamu yang bangun pagi aja udah capek. Isinya kalimat-kalimat absurd, sarkas, dan kadang terlalu jujur buat diterima logika." 
          emoji="🌈"
        />
        <Card 
          title="Z-Tune" 
          description="Lo gabut? Lagi mellow? Lagi pengen joget? Nih, lagu random biar hidup lo ada backsound-nya." 
          emoji="🎵"
        />
        <Card 
          title="Z-Thoughts" 
          description="Pengen ngomel? Nangis? Ngaku dosa kecil? Tulis aja. Bebas, absurd, jujur — kayak hati lo. Gak ada nama, gak ada hakim, cuma lo & semesta digital."
          emoji="📝"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
