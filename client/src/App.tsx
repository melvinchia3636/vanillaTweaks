import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import HowToInstall from './pages/HowToInstall';
import ResourcePack from './pages/ResourcePacks';
import Datapacks from './pages/Datapacks';
import CraftingTweaks from './pages/CraftingTweaks';
import Footer from './components/Footer';
import About from './pages/About';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Feedback from './pages/Feedback';

function App() {
  const location = useLocation();
  return (
    <div
      className={`App w-full ${
        ['/installation', '/about', '/toc', '/privacy', '/feedback'].includes(
          location.pathname,
        )
          ? 'lg:min-h-screen'
          : 'lg:h-screen'
      } flex flex-col relative`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/installation" element={<HowToInstall />} />
        <Route path="/toc" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="/resource-packs" element={<ResourcePack />} />
        <Route path="/datapacks" element={<Datapacks />} />
        <Route path="/crafting-tweaks" element={<CraftingTweaks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
