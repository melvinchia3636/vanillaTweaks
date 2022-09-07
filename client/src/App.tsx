import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import HowToInstall from './pages/HowToInstall';
import ResourcePack from './pages/ResourcePacks';
import Datapacks from './pages/Datapacks';
import CraftingTweaks from './pages/CraftingTweaks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App w-full lg:h-screen flex flex-col">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/installation" element={<HowToInstall />} />

          <Route path="/resource-packs" element={<ResourcePack />} />
          <Route path="/datapacks" element={<Datapacks />} />
          <Route path="/crafting-tweaks" element={<CraftingTweaks />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
