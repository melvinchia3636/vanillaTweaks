/* eslint-disable func-call-spacing */
/* eslint-disable no-spaced-func */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Icon } from "@iconify/react";
import React, { createContext, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import MiscButtons from "../../components/MiscButtons";
import Selector from "../../components/Selector";
import VersionSelector from "../../components/VersionSelector";
import Category from "./components/Category";

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
  selected: { [key: string]: Datapack[] };
  setSelected: (_selected: { [key: string]: Datapack[] }) => void;
  hover: Datapack | null;
  setHover: (_hover: Datapack | null) => void;
  version: number;
}>({
  selected: {},
  setSelected() {},
  hover: null,
  setHover() {},
  version: 19,
});

function Datapacks() {
  const [data, setData] = useState<IDatapacks[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: Datapack[] }>({});
  const [hover, setHover] = useState<Datapack | null>(null);
  const [version, setVersion] = useState<number>(19);

  useEffect(() => {
    setData([]);
    setSelected({});

    fetch(
      `https://cors-anywhere.thecodeblog.net/vanillatweaks.net/assets/resources/json/1.${version}/dpcategories.json`
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
            className={`min-w-0 h-full m-8 lg:mr-0 flex-col overflow-scroll bg-[#696969] rounded-lg shadow-lg p-8 ${
              data.length === 0 && "flex"
            }`}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-white tracking-widest drop-shadow-md">
                Datapacks
              </h1>
              <VersionSelector
                version={version}
                setVersion={setVersion}
                versionCount={7}
                versionStart={13}
              />
            </div>
            <div className="min-w-0 flex-1 overflow-auto flex flex-col gap-2 mt-8">
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
          <Selector
            selected={selected}
            name="datapacks"
            display="Datapacks"
            version={version}
          />
          <MiscButtons />
        </div>
      </div>
    </Context.Provider>
  );
}

export default Datapacks;
