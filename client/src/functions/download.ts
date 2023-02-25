/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';
import { CraftingTweak } from '../pages/CraftingTweaks';
import { Datapack } from '../pages/Datapacks/components';
import { Resourcepack } from '../pages/ResourcePacks';

const download = async (
  selected: { [key: string]: (Datapack | Resourcepack | CraftingTweak)[] },
  type: string,
  version: number,
) => {
  const data: {
    [x: string]: (Datapack | Resourcepack | CraftingTweak | string)[];
  } = { ...selected };

  for (const key in selected) {
    data[key] = selected[key].map((e) => e.name);
  }

  if (JSON.stringify(selected) !== '{}') {
    const { data: { link, status } } = await axios({
      url: `http://localhost:3001/download/${type}`,
      method: 'POST',
      data: {
        data,
        version,
      },
    });
    if (status === 'success') {
      const a = document.createElement('a');
      a.href = `https://vanillatweaks.net${link}`;
      a.download = link.split('/').pop();
      a.click();
    }
  }
};

export default download;
