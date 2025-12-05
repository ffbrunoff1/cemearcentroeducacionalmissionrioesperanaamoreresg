import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './components/Services';
import ActivityDetail from './pages/ActivityDetail';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/atividades" element={<Activities showAll />} />
          <Route path="/atividades/:slug" element={<ActivityDetail />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/voluntario" element={<Volunteer />} />
          <Route path="/doacoes" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
