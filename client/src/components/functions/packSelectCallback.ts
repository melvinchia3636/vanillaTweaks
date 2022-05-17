import { CraftingTweak } from '../pages/CraftingTweaks';
import { Datapack } from '../pages/Datapacks';
import { Resourcepack } from '../pages/ResourcePacks';

const packSelectCallback = (
  selected: {[key: string]: (Resourcepack | Datapack | CraftingTweak)[]},
  setSelected: (_selected: any) => void,
  category: string,
  pack: Resourcepack | Datapack | CraftingTweak,
) => {
  if (selected[category]) {
    if (selected[category].filter((e) => e.name === pack.name).length) {
      const newSelected = { ...selected };
      newSelected[category] = newSelected[category].filter((e) => e.name !== pack.name);
      if (!newSelected[category].length) {
        delete newSelected[category];
      }

      setSelected(newSelected);
    } else {
      const newSelected = { ...selected };
      newSelected[category] = [...(newSelected[category] || []), pack];
      setSelected(newSelected);
    }
  } else {
    const newSelected = { ...selected };
    newSelected[category] = [pack];
    setSelected(newSelected);
  }
};

export default packSelectCallback;
