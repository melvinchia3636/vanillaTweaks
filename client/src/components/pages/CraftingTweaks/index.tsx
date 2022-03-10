import {Icon} from '@iconify/react';
import React, {createContext, useEffect, useState} from 'react';
import MiscButtons from '../../misc/MiscButtons';
import Selector from '../../misc/Selector';
import Category from './Category';

export interface CraftingTweak {
	name: string;
	display: string;
	version: string;
	description: string;
	incompatible: string[];
	lastupdated?: number;
	video: string;
}

export interface ICraftingTweaks {
	category: string;
	packs: CraftingTweak[];
}

export const Context = createContext<{
	selected: {[key: string]: CraftingTweak[]},
	setSelected:(_selected: {[key: string]: CraftingTweak[]}) => void,
	hover: CraftingTweak | null,
	setHover: (_hover: CraftingTweak|null) => void,
		}>({
			selected: {},
			setSelected() {},
			hover: null,
			setHover() {},
		});

function CraftingTweaks() {
	const [data, setData] = useState<ICraftingTweaks[]>([]);
	const [selected, setSelected] = useState<{[key: string]: CraftingTweak[]}>({});
	const [hover, setHover] = useState<CraftingTweak | null>(null);

	useEffect(() => {
		fetch('https://cors-anywhere.thecodeblog.net/vanillatweaks.net/assets/resources/json/1.18/ctcategories.json')
			.then(response => response.json())
			.then(data => setData(data.categories));
	}, []);

	return (
		<Context.Provider value={{
			selected, setSelected, hover, setHover,
		}}>
			<div className="flex h-full gap-8">
				<div className="flex-1 h-full mr-0 pb-16 flex flex-col">
					<div className="min-w-0 m-8 mb-12 mr-0 overflow-scroll bg-[#696969] rounded-lg shadow-lg p-8">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl text-white tracking-widest">Crafting Tweaks</h1>
						</div>
						<div className="min-w-0 overflow-auto flex flex-col gap-2 mt-8">
							{data.length > 0 && data.map((category, index) => (
								<Category key={category.category} category={category} index={index} />
							))}
						</div>
					</div>
				</div>
				<div className="w-72 m-8 mb-28 gap-4 flex flex-col overflow-hidden flex-shrink-[9999] position-relative ml-0">
					<div className="w-full bg-[#696969] shadow-lg rounded-lg overflow-hidden">
						<div className="p-4 bg-[#E99743] flex items-center gap-3 text-white text-lg">
							{hover
								? (
									<>
										<img src={`https://vanillatweaks.net/assets/resources/icons/craftingtweaks/1.18/${hover.name}.png`} alt={hover.name} className="w-8 h-8 shadow-lg" />
										<span className="block truncate">{hover.display}</span>
									</>
								)
								: (
									<>
										<div className="w-8 h-8 flex items-center justify-center">
											<Icon icon="uil:cube" className="w-6 h-6" />
										</div>
										<span className="block truncate">Preview</span>
									</>
								)}
						</div>
						{hover && (
							<>
								<img src={`https://vanillatweaks.net/assets/resources/previews/craftingtweaks/1.18/${hover.name}.png?v2`} className="w-full aspect-video object-contain" />
							</>
						)}
						{!hover && (
							<div className="text-zinc-400 h-[162px] text-xl tracking-wide text-center flex items-center justify-center">Preview</div>
						)}
					</div>
					<Selector selected={selected} name="craftingtweaks" display="Crafting Tweaks" />
					<MiscButtons />
				</div>
			</div>
		</Context.Provider>
	);
}

export default CraftingTweaks;
