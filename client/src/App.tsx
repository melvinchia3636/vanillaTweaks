import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/misc/Navbar';
import HowToInstall from './components/pages/HowToInstall';
import ResourcePack from './components/pages/ResourcePacks';
import Datapacks from './components/pages/Datapacks';
import CraftingTweaks from './components/pages/CraftingTweaks';

function App() {
	return (
		<div className="App w-full h-full flex flex-col overflow-hidden">
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
			</Router>
		</div>
	);
}

export default App;
