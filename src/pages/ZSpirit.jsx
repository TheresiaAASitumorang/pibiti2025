import React from 'react';
import { Link } from 'react-router-dom';

function ZSpirit() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Z-Spirit</h1>
      <p>Halaman motivasi absurd. Kadang nyentil, kadang nyemangatin.</p>
      <Link to="/" style={{ display: 'block', marginTop: '20px', color: 'blue' }}>
        ← Kembali ke Home
      </Link>
    </div>
  );
}

export default ZSpirit;
