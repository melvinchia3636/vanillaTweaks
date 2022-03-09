import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import ResourcePack from './components/ResourcePacks';
import Datapacks from './components/Datapacks';

function App() {
  return (
    <div className="App w-full h-full flex flex-col overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource-packs" element={<ResourcePack />} />
          <Route path="/datapacks" element={<Datapacks />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App