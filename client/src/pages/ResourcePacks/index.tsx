/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable indent */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Icon } from '@iconify/react';
import React, { createContext, useEffect, useState } from 'react';
import MiscButtons from '../../components/MiscButtons';
import Category from './Category';
import Selector from '../../components/Selector';
import Loading from '../../components/Loading';

export enum PreviewExtension {
  'gif',
}

export interface Resourcepack {
  name: string;
  display: string;
  previewExtension?: PreviewExtension;
  description: string;
  incompatible: string[];
  video?: string;
}

export interface Warning {
  text: string;
  color: string;
}

export interface IResourcePacks {
  category: string;
  packs: Resourcepack[];
  warning?: Warning;
}

export const Context = createContext<{
  selected: { [key: string]: Resourcepack[] };
  setSelected: (selected: { [key: string]: Resourcepack[] }) => void;
  hover: Resourcepack | null;
  setHover: (hover: Resourcepack | null) => void;
  version: number;
}>({
  selected: {},
  setSelected: () => {},
  hover: null,
  setHover: () => {},
  version: 19,
});

function ResourcePack() {
  const [data, setData] = useState<IResourcePacks[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: Resourcepack[] }>(
    {},
  );
  const [hover, setHover] = useState<Resourcepack | null>(null);
  const [version, setVersion] = useState<number>(19);

  useEffect(() => {
    setData([]);
    setSelected({});

    fetch(
      `https://cors-anywhere.thecodeblog.net/vanillatweaks.net/assets/resources/json/1.${version}/rpcategories.json`,
    )
      .then((response) => response.json())
      .then((d) => setData(d.categories));
  }, [version]);

  return (
    <Context.Provider
      value={{
        selected,
        setSelected,
        hover,
        setHover,
        version,
      }}
    >
      <div className="flex flex-col lg:flex-row flex-1 gap-4 min-h-0 mt-20">
        <div className="flex-1 h-full lg:mb-16 mr-0 flex flex-col">
          <div
            className={`min-w-0 h-full flex-col m-8 lg:mr-0 overflow-scroll bg-[#696969] rounded-lg shadow-lg p-8 ${
              data.length === 0 && 'flex'
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl text-white tracking-widest drop-shadow-md">
                Resource Packs
              </h1>
              <div className="flex items-center text-white gap-2">
                <button
                  type="button"
                  onClick={() => version > 11 && setVersion(version - 1)}
                >
                  <Icon icon="uil:angle-left" className="text-2xl" />
                </button>
                {Array(9)
                  .fill(0)
                  .map((_, i) => (
                    <>
                      {i > 0 && <span className="text-lg font-medium">/</span>}
                      <button
                        type="button"
                        onClick={() => setVersion(i + 11)}
                        className={`text-lg tracking-wider after:absolute after:border-b-2 after:border-b-[#E99743] after:-bottom-0.5 after:shadow-md after:left-1/2 after:-translate-x-1/2 after:transition-all relative drop-shadow-md transition-all after:rounded-md after:w-0 ${
                          version === i + 11 && 'after:!w-1/2 text-[1.6rem]'
                        }`}
                      >
                        1.
                        {i + 11}
                      </button>
                    </>
                  ))}
                <button
                  type="button"
                  onClick={() => version < 18 && setVersion(version + 1)}
                >
                  <Icon icon="uil:angle-right" className="text-2xl" />
                </button>
              </div>
            </div>
            {version === 19 && (
              <div className="w-full p-6 bg-[#E94D43] mb-4 rounded-md text-white">
                If you are using 1.19, 1.19.1, or 1.19.2, you can safely ignore
                the &quot;made for a newer version of Minecraft&quot; warning
                when applying your resource pack in-game, as it is incorrect.
                <br />
                (If you are using 1.19.3, you won&apos;t see this warning.)
              </div>
            )}
            <div className="min-w-0 flex-1 overflow-auto flex flex-col gap-2">
              {data.length > 0 ? (
                data.map((category, index) => (
                  <Category
                    key={category.category}
                    category={category}
                    index={index}
                  />
                ))
              ) : (
                <div className="w-full h-full -mt-8 flex items-center justify-center">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-auto lg:w-72 m-8 mt-0 lg:mt-8 gap-4 flex flex-col overflow-hidden flex-shrink-[9999] position-relative lg:ml-0">
          <div className="hidden lg:block w-full bg-[#696969] shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-[#E99743] flex items-center gap-3 text-white text-lg">
              {hover ? (
                <>
                  <img
                    src={`https://vanillatweaks.net/assets/resources/icons/resourcepacks/1.${version}/${hover.name}.png`}
                    alt={hover.name}
                    className="w-8 h-8 shadow-lg"
                  />
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
              <img
                alt=""
                src={`https://vanillatweaks.net/assets/resources/previews/resourcepacks/1.${version}/${
                  hover.name
                }.${hover.previewExtension || 'png'}?v2`}
                className="w-full aspect-video object-contain"
              />
            )}
            {!hover && (
              <div className="text-zinc-400 h-[162px] text-xl tracking-wide text-center flex items-center justify-center">
                Preview
              </div>
            )}
          </div>
          <Selector
            selected={selected}
            name="resourcepacks"
            display="Resource Packs"
            version={version}
          />
          <MiscButtons />
        </div>
      </div>
    </Context.Provider>
  );
}

export default ResourcePack;
