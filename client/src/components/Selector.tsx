/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-negated-condition */
import React from 'react';
import { Icon } from '@iconify/react';
import download from '../functions/download';
import { Datapack } from '../pages/Datapacks';
import { Resourcepack } from '../pages/ResourcePacks';
import { CraftingTweak } from '../pages/CraftingTweaks';
import isIncompatible from '../functions/isIncompatible';

function Selector({
  selected,
  name,
  display,
  version,
}: {
  selected: { [key: string]: (Datapack | Resourcepack | CraftingTweak)[] };
  name: string;
  display: string;
  version: number;
}) {
  return (
    <div className="min-h-[24rem] lg:min-h-[auto] w-full flex-1 bg-[#696969] shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div className="p-4 bg-[#E99743] flex items-center gap-3 text-white text-lg">
        <div className="w-6 h-8 flex items-center justify-center">
          <Icon icon="uil:align-center-v" className="w-6 h-6" />
        </div>
        <span className="block truncate">{display} Selector</span>
      </div>
      <div className="flex-1 p-4 py-5 overflow-auto h-max flex flex-col gap-4">
        {JSON.stringify(selected) !== '{}' ? (
          Object.entries(selected).map(([category, packs]) => (
            <div key={category} className="flex flex-col gap-2">
              <h2 className="text-xl text-white flex items-center gap-2">
                <Icon icon="uil:direction" className="w-6 h-6 flex-shrink-0" />
                {category}
              </h2>
              <div className="flex flex-col gap-2">
                {packs.map((pack) => (
                  <div
                    key={pack.name}
                    className={`flex items-center gap-2 ml-6 text-white ${
                      isIncompatible(selected, pack)
                        ? 'text-red-500'
                        : 'text-white'
                    }`}
                  >
                    <Icon
                      icon="uil:direction"
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <img
                      src={`https://vanillatweaks.net/assets/resources/icons/${name}/1.${version}/${pack.name}.png`}
                      alt={pack.name}
                      className="w-5 h-5"
                    />
                    <span className="block truncate">{pack.display}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400">
            Select a {display}!
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => download(selected, name, version)}
        className="bg-[#E99743] hover:bg-[#dd8a38] transition-all text-white w-full py-3"
      >
        Download
      </button>
    </div>
  );
}

export default Selector;
