import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbare.jsx';
import HeroSection from './components/Hero';     
import Trainer from './components/Trainer';
import Contact from './components/Contact';
import Games from './components/Games';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/games" element={<Games />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;





