import { CraftingTweak } from '../pages/CraftingTweaks';
import { Datapack } from '../pages/Datapacks';
import { Resourcepack } from '../pages/ResourcePacks';

function isIncompatible(
  selected: {[key: string]: (Datapack | Resourcepack | CraftingTweak)[]},
  pack: Datapack | Resourcepack | CraftingTweak,
) {
  return Object.values(selected).flat().some((e) => e.incompatible.includes(pack.name));
}

export default isIncompatible;
