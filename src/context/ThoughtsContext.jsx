import React, { createContext, useState, useEffect } from 'react';

export const ThoughtsContext = createContext();

export const ThoughtsProvider = ({ children }) => {
  // ✅ Ambil dari localStorage saat pertama render
  const [thoughts, setThoughts] = useState(() => {
    const stored = localStorage.getItem('thoughts');
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Simpan ke localStorage saat 'thoughts' berubah
  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(thoughts));
  }, [thoughts]);

  return (
    <ThoughtsContext.Provider value={{ thoughts, setThoughts }}>
      {children}
    </ThoughtsContext.Provider>
  );
};
