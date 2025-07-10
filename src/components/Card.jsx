import React from 'react';

function Card({ title, description, emoji, children }) {
  return (
    <div className="card" style={{
      backgroundColor: 'rgb(253, 241, 251)',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '280px',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2rem' }}>{emoji}</div>
      <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{title}</h3>
      <p style={{ color: '#666' }}>{description}</p>
      {children}
    </div>
  );
}

export default Card;
