import React, {createContext, useEffect, useState} from 'react';
import Loading from '../../misc/Loading';
import MiscButtons from '../../misc/MiscButtons';
import Selector from '../../misc/Selector';
import Category from './Category';

export interface IDatapacks {
	category: string;
	packs: Datapack[];
	warning?: Warning;
}

export interface Datapack {
	name: string;
	display: string;
	version: string;
	description: string;
	incompatible: string[];
	lastupdated: number;
	video: string;
	requires?: string[];
}

export interface Warning {
	text: string;
	color: string;
}

export const Context = createContext<{
	selected: {[key: string]: Datapack[]},
	setSelected:(_selected: {[key: string]: Datapack[]}) => void,
	hover: Datapack | null,
	setHover: (_hover: Datapack|null) => void,
		}>({
			selected: {},
			setSelected() {},
			hover: null,
			setHover() {},
		});

function Datapacks() {
	const [data, setData] = useState<IDatapacks[]>([]);
	const [selected, setSelected] = useState<{[key: string]: Datapack[]}>({});
	const [hover, setHover] = useState<Datapack | null>(null);

	useEffect(() => {
		// fetch('https://cors-anywhere.thecodeblog.net/vanillatweaks.net/assets/resources/json/1.18/dpcategories.json')
		// 	.then(response => response.json())
		// 	.then(data => setData(data.categories));
	}, []);

	return (
		<Context.Provider value={{
			selected, setSelected, hover, setHover,
		}}>
			<div className="flex min-h-full gap-4 items-stretch">
				<div className="flex-1 h-full mr-0 pb-16 flex flex-col">
					<div className="min-w-0 h-full m-8 mb-12 mr-0 overflow-scroll bg-[#696969] rounded-lg shadow-lg p-8">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl text-white tracking-widest">Datapacks</h1>
						</div>
						<div className="min-w-0 overflow-auto flex flex-col gap-2 mt-8">
							{data.length > 0 ? data.map((category, index) => (
								<Category key={category.category} category={category} index={index} />
							)) : <div>
								<Loading />
							</div>}
						</div>
					</div>
				</div>
				<div className="w-72 m-8 mb-28 gap-4 flex flex-col overflow-hidden flex-shrink-[9999] position-relative ml-0">
					<Selector selected={selected} name="datapacks" display="Datapacks" />
					<MiscButtons />
				</div>
			</div>
		</Context.Provider>
	);
}

export default Datapacks;
