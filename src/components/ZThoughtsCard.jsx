import React, { useState, useContext, useEffect } from 'react';
import { ThoughtsContext } from '../context/ThoughtsContext';

function ZThoughtsCard() {
  const { thoughts, setThoughts } = useContext(ThoughtsContext);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Ambil dari localStorage saat pertama kali render
  useEffect(() => {
    const storedThoughts = localStorage.getItem('zthoughts');
    if (storedThoughts) {
      setThoughts(JSON.parse(storedThoughts));
    }
  }, [setThoughts]);

  // Simpan ke localStorage setiap kali ada perubahan thoughts
  useEffect(() => {
    localStorage.setItem('zthoughts', JSON.stringify(thoughts));
  }, [thoughts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      alert("Isi curhatan tidak boleh kosong.");
      return;
    }

    const now = new Date();
    const newThought = {
      text: input.trim(),
      timestamp: now.toLocaleString(),
    };

    if (editIndex !== null) {
      const updated = [...thoughts];
      updated[editIndex] = newThought;
      setThoughts(updated);
      console.log('Curhat berhasil diperbarui:', newThought);
      setEditIndex(null);
    } else {
      setThoughts([newThought, ...thoughts]);
      console.log('Curhat berhasil dikirim:', newThought);
    }

    setInput('');
  };

  const handleEdit = (index) => {
    setInput(thoughts[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = thoughts.filter((_, i) => i !== index);
    setThoughts(updated);
    setInput('');
    setEditIndex(null);
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: 'rgb(253, 241, 251)',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px',
        padding: '20px',
        textAlign: 'left',
        margin: '0 auto',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📝 Z-Thoughts</h3>
      <p style={{ color: '#666' }}>Curhat bebas dan anonim di sini ✨</p>
      <p style={{ color: '#666' }}>
        Pengen ngomel? Nangis? Ngaku dosa kecil? Tulis aja. Bebas, absurd, jujur — kayak hati lo.
        Gak ada nama, gak ada hakim, cuma lo & semesta digital.
      </p>

      {/* Form Kirim Curhat */}
      <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
        <textarea
          rows="4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis isi hati kamu di sini..."
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            resize: 'none',
            fontFamily: 'inherit',
          }}
        />
        <button
          type="submit"
          className="btn"
          style={{
            marginTop: '10px',
            padding: '10px 16px',
            borderRadius: '8px',
            backgroundColor: '#7c3aed',
            color: 'white',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {editIndex !== null ? 'Update Curhat' : 'Kirim Curhat'}
        </button>
      </form>

      {/* Daftar Curhatan */}
      <div style={{ marginTop: '20px' }}>
        {thoughts.map((thought, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              padding: '12px',
              marginBottom: '10px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              position: 'relative',
            }}
          >
            <p style={{ marginBottom: '6px' }}>{thought.text}</p>
            <small style={{ fontSize: '0.75rem', color: '#999' }}>
              {thought.timestamp}
            </small>
            <div style={{ marginTop: '8px' }}>
              <button
                className="btn"
                onClick={() => handleEdit(index)}
                style={{
                  marginRight: '8px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid #999',
                }}
              >
                Edit
              </button>
              <button
                className="btn"
                onClick={() => handleDelete(index)}
                style={{
                  backgroundColor: '#ff6b6b',
                  padding: '6px 12px',
                  color: 'white',
                  borderRadius: '6px',
                  border: 'none',
                }}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZThoughtsCard;
