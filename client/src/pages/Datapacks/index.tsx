/* eslint-disable react/jsx-no-constructed-context-values */
import { Icon } from '@iconify/react';
import React, { createContext, useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import MiscButtons from '../../components/MiscButtons';
import Selector from '../../components/Selector';
import Category from './Category';

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

export interface IDatapacks {
  category: string;
  packs: Datapack[];
  warning?: Warning;
}

export const Context = createContext<{
  selected: { [key: string]: Datapack[] },
  setSelected:(_selected: { [key: string]: Datapack[] }) => void,
  hover: Datapack | null,
  setHover: (_hover: Datapack | null) => void,
  version: number
    }>({
      selected: {},
      setSelected() { },
      hover: null,
      setHover() { },
      version: 18,
    });

function Datapacks() {
  const [data, setData] = useState<IDatapacks[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: Datapack[] }>({});
  const [hover, setHover] = useState<Datapack | null>(null);
  const [version, setVersion] = useState<number>(18);

  useEffect(() => {
    setData([]);
    setSelected({});

    fetch(`https://cors-anywhere.thecodeblog.net/vanillatweaks.net/assets/resources/json/1.${version}/dpcategories.json`)
      .then((response) => response.json())
      .then((d) => setData(d.categories));
  }, [version]);

  return (
    <Context.Provider value={{
      selected, setSelected, hover, setHover, version,
    }}
    >
      <div className="flex flex-1 gap-4 min-h-0">
        <div className="flex-1 h-full mb-16 mr-0 flex flex-col">
          <div className={`min-w-0 h-full m-8  mr-0 flex-col overflow-scroll bg-[#696969] rounded-lg shadow-lg p-8 ${data.length === 0 && 'flex'}`}>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-white tracking-widest drop-shadow-md">Datapacks</h1>
              <div className="flex items-center text-white gap-2">
                <button type="button" onClick={() => version > 13 && setVersion(version - 1)}>
                  <Icon icon="uil:angle-left" className="text-2xl" />
                </button>
                {Array(6).fill(0).map((_, i) => (
                  <>
                    {i > 0 && <span className="text-lg font-medium">/</span>}
                    <button type="button" onClick={() => setVersion(i + 13)} className={`text-lg tracking-wider after:absolute after:border-b-2 after:border-b-[#E99743] after:-bottom-0.5 after:shadow-md after:left-1/2 after:-translate-x-1/2 after:transition-all relative drop-shadow-md transition-all after:rounded-md after:w-0 ${version === i + 13 && 'after:!w-1/2 text-[1.6rem]'}`}>
                      1.
                      {i + 13}
                    </button>
                  </>
                ))}
                <button type="button" onClick={() => version < 18 && setVersion(version + 1)}>
                  <Icon icon="uil:angle-right" className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="min-w-0 flex-1 overflow-auto flex flex-col gap-2 mt-8">
              {data.length > 0 ? data.map((category, index) => (
                <Category key={category.category} category={category} index={index} />
              )) : (
                <div className="w-full h-full -mt-8 flex items-center justify-center">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-72 m-8  gap-4 flex flex-col overflow-hidden flex-shrink-[9999] position-relative ml-0">
          <Selector selected={selected} name="datapacks" display="Datapacks" version={version} />
          <MiscButtons />
        </div>
      </div>
    </Context.Provider>
  );
}

export default Datapacks;
