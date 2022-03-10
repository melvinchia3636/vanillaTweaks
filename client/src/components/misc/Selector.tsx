import React from 'react';
import {Icon} from '@iconify/react';
import download from '../functions/download';
import {Datapack} from '../pages/Datapacks';
import {Resourcepack} from '../pages/ResourcePacks';
import {CraftingTweak} from '../pages/CraftingTweaks';

function Selector({selected, name, display}: {
  selected: {[key: string]: (Datapack | Resourcepack | CraftingTweak)[]}
  name: string,
  display: string,
}) {
	return (
		<div className="w-full flex-1 bg-[#696969] shadow-lg rounded-lg overflow-hidden flex flex-col">
			<div className="p-4 bg-[#E99743] flex items-center gap-3 text-white text-lg">
				<div className="w-6 h-8 flex items-center justify-center">
					<Icon icon="uil:align-center-v" className="w-6 h-6" />
				</div>
				<span className="block truncate">{display} Selector</span>
			</div>
			<div className="flex-1 p-4 overflow-auto h-max flex flex-col gap-4">
				{Object.entries(selected).map(([category, packs]) => (
					<div key={category} className="flex flex-col gap-2">
						<h2 className="text-xl text-white flex items-center gap-2">
							<Icon icon="uil:direction" className="w-6 h-6 flex-shrink-0" />
							{category}
						</h2>
						<div className="flex flex-col gap-2">
							{packs.map(pack => (
								<div key={pack.name} className="flex items-center gap-2 ml-6 text-white">
									<Icon icon="uil:direction" className="w-6 h-6 flex-shrink-0" />
									<img src={`https://vanillatweaks.net/assets/resources/icons/${name}/1.18/${pack.name}.png`} alt={pack.name} className="w-4 h-4" />
									<span className="block truncate">{pack.display}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<button onClick={() => download(selected, name)} className="bg-[#E99743] text-white w-full py-3">Download</button>
		</div>
	);
}

export default Selector;
