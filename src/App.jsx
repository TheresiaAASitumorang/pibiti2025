import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThoughtsProvider } from './context/ThoughtsContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ZSpirit from './pages/ZSpirit';
import ZTune from './pages/ZTune';
import ZTips from './pages/ZTips';
import NotFound from './pages/NotFound';
import Footer from './components/Footer'; 

function App() {
  return (
    <ThoughtsProvider>
      <Router>
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fdf6ff', minHeight: '100vh' }}>
          <nav className="flex gap-4 p-4 bg-gray-200">
            <Link to="/" className="text-blue-500">Home</Link>
            <Link to="/about" className="text-blue-500">About</Link>
            <Link to="/contact" className="text-blue-500">Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ztips" element={<ZTips />} />
            <Route path="/zspirit" element={<ZSpirit />} />
            <Route path="/ztune" element={<ZTune />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThoughtsProvider>
  );
}

export default App;
