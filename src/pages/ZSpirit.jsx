import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quotesByCategory, categories } from "./quotes";
import "../App.css";

const ZSpirit = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [shuffling, setShuffling] = useState(false);
  const [finalQuote, setFinalQuote] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShuffling(true);
    setFinalQuote(null);
    setShowOptions(false);

    const quotes = quotesByCategory[category];
    let count = 0;
    const interval = setInterval(() => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setFinalQuote(random);
      count++;
      if (count >= 6) {
        clearInterval(interval);
        setShuffling(false);
        setShowOptions(true);
      }
    }, 400);
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setFinalQuote(null);
    setShowOptions(false);
  };

  return (
    <div className="zspirit-container">
      {!selectedCategory && (
        <>
          <h1 className="title">Tips kayak gimana yang kamu butuhin hari ini? 😌</h1>
          <div className="category-buttons">
            {categories.map((cat, index) => (
              <button
                key={index}
                className="cat-btn"
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </>
      )}

      {finalQuote && (
        <div className="quote-card-horizontal">
          <div className="quote-text-area">
            <p className="quote-text-side">"{finalQuote.text}"</p>
          </div>
          <img src={finalQuote.image} alt="meme" className="quote-img-side" />
        </div>
      )}

      {showOptions && (
        <div className="options">
          <h3 className="text-xl font-semibold mb-3">Mau coba lagi atau udahan nih?</h3>
          <button onClick={handleReset} className="retry-btn">🔁 Cari Quote Lagi</button>
          <button onClick={() => setSelectedCategory("done")} className="stop-btn">Udahan Aja</button>
        </div>
      )}

      {selectedCategory === "done" && (
        <div className="farewell">
          <h2>✨ Makasih udah main di Z-Spirit 🎉</h2>
          <p>Semoga hari kamu makin seru dan semangat! Sampai jumpa lagi 🤍</p>
        </div>
      )}

      <div className="mt-10 back-home">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-400 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          ⬅️ Balik ke Home
        </button>
      </div>
    </div>
  );
};

export default ZSpirit;
