import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">404 - Halaman Tidak Ditemukan</h1>
      <Link to="/" className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded">Kembali ke Home</Link>
    </div>
  );
}

export default NotFound;
