import { Icon } from '@iconify/react';
import React, { createContext, useEffect, useState } from 'react'
import MiscButtons from '../MiscButtons';
import Category from './Category';
import axios from 'axios';
import download from '../download';

export interface IResourcePacks {
  category: string;
  packs:    Pack[];
  warning?: Warning;
}

export interface Pack {
  name:              string;
  display:           string;
  previewExtension?: PreviewExtension;
  description:       string;
  incompatible:      string[];
  video?:            string;
}

export enum PreviewExtension {
  GIF = "gif",
}

export interface Warning {
  text:  string;
  color: string;
}

export const Context = createContext<{
  selected: {[key: string]: Pack[]},
  setSelected: (selected: {[key: string]: Pack[]}) => void,
  hover: Pack | null,
  setHover: (hover: Pack|null) => void,
}>({
  selected: {},
  setSelected: () => {},
  hover: null,
  setHover: () => {},
});

function ResourcePack() {
  const [data, setData] = useState<IResourcePacks[]>([])
  const [selected, setSelected] = useState<{[key: string]: Pack[]}>({});
  const [hover, setHover] = useState<Pack | null>(null);

  useEffect(() => {
    fetch('https://cors-anywhere.thecodeblog.net/vanillatweaks.net/assets/resources/json/1.18/rpcategories.json')
      .then(response => response.json())
      .then(data => setData(data.categories))
  }, [])

  return (
    <Context.Provider value={{
      selected, setSelected, hover, setHover,
    }}>
      
      <div className="flex h-full gap-8">
        <div className="flex-1 h-full mr-0 pb-16 flex flex-col">
          <div className="min-w-0 m-8 mb-12 mr-0 overflow-scroll bg-[#696969] rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-white tracking-widest">Resource Packs</h1>
            </div>
            <div className="min-w-0 overflow-auto flex flex-col gap-2 mt-8">
                {data.length > 0 && data.map((category, index) => (
                  <Category category={category} index={index} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-72 m-8 mb-28 gap-4 flex flex-col overflow-hidden flex-shrink-[9999] position-relative ml-0">
          <div className="w-full bg-[#696969] shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-[#E99743] flex items-center gap-3 text-white text-lg">
              {hover ? (
                <>
                  <img src={`https://vanillatweaks.net/assets/resources/icons/resourcepacks/1.18/${hover.name}.png`} alt={hover.name} className="w-8 h-8 shadow-lg" />
                  <span className="block truncate">{hover.display}</span>
                </>
              ) : (
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
                <img src={`https://vanillatweaks.net/assets/resources/previews/resourcepacks/1.18/${hover.name}.${hover.previewExtension || 'png'}?v2`} className="w-full aspect-video object-contain" />
              </>
            )}
            {!hover && (
              <div className="text-zinc-400 h-[162px] text-xl tracking-wide text-center flex items-center justify-center">Preview</div>
            )}
          </div>
          <div className="w-full flex-1 bg-[#696969] shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 bg-[#E99743] flex items-center gap-3 text-white text-lg">
              <div className="w-6 h-8 flex items-center justify-center">
                <Icon icon="uil:align-center-v" className="w-6 h-6" />
              </div>
              <span className="block truncate">Resource Pack Selector</span>
            </div>
            <div className="flex-1 p-4 overflow-auto h-max flex flex-col gap-4">
              {Object.entries(selected).map(([category, packs]) => (
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl text-white flex items-center gap-2">
                    <Icon icon="uil:direction" className="w-6 h-6 flex-shrink-0" />
                    {category}
                  </h2>
                  <div className="flex flex-col gap-2">
                    {packs.map(pack => (
                      <div className="flex items-center gap-2 ml-6 text-white">
                        <Icon icon="uil:direction" className="w-6 h-6 flex-shrink-0" />
                        <img src={`https://vanillatweaks.net/assets/resources/icons/resourcepacks/1.18/${pack.name}.png`} alt={pack.name} className="w-4 h-4" />
                        <span className="block truncate">{pack.display}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => download(selected, 'resourcepacks')} className="bg-[#E99743] text-white w-full py-3">Download</button>
          </div>
          <MiscButtons />
        </div>
      </div>
    </Context.Provider>
  )
}

export default ResourcePack
