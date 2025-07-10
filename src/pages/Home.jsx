import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import ZThoughtsCard from '../components/ZThoughtsCard';

export default function Home() {
  return (
    <div>
      <Hero />

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <Card
          title="Z-Freeze"
          description="Nyalain Z-Freeze dan buktiin kamu bisa kerja tanpa scroll-scroll dulu."
          emoji="⏰"
          to="/ztips"
        />
        <Card
          title="Z-Spirit"
          description="Motivasi harian absurd dan jujur. Tetap lanjut hidup."
          emoji="🌈"
          to="/zspirit"
        />
        <Card
          title="Z-Tune"
          description="Playlist random sesuai mood kamu."
          emoji="🎵"
          to="/ztune"
        />
      </div>

      <div style={{ padding: '20px', marginTop: '20px' }}>
        <ZThoughtsCard />
      </div>
    </div>
  );
}
