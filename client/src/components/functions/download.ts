import axios from 'axios';
import {CraftingTweak} from '../pages/CraftingTweaks';
import {Datapack} from '../pages/Datapacks';
import {Resourcepack} from '../pages/ResourcePacks';

const download = async (
	selected: {[key: string]: (Datapack | Resourcepack | CraftingTweak)[]},
	type: string,
) => {
	if (JSON.stringify(selected) !== '{}') {
		const {data: {link, status}} = await axios({
			url: 'http://localhost:3001/download/' + type,
			method: 'POST',
			data: selected,
		});
		if (status === 'success') {
			const a = document.createElement('a');
			a.href = 'https://vanillatweaks.net' + link;
			a.download = link.split('/').pop();
			a.click();
		}
	}
};

export default download;
