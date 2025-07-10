import React from 'react';
import { Link } from 'react-router-dom';

function ZTune() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Z-Tune</h1>
      <p>Putar lagu sesuai suasana hatimu. Mellow, joget, atau random banget!</p>
      <Link to="/" style={{ display: 'block', marginTop: '20px', color: 'blue' }}>
        ← Kembali ke Home
      </Link>
    </div>
  );
}

export default ZTune;
