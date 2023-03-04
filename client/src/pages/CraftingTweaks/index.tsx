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

export interface CraftingTweak {
  name: string;
  display: string;
  version: string;
  description: string;
  incompatible: string[];
  lastupdated?: number;
  video: string;
}

export interface ICraftingTweaks {
  category: string;
  packs: CraftingTweak[];
}

export const Context = createContext<{
  selected: { [key: string]: CraftingTweak[] };
  setSelected: (_selected: { [key: string]: CraftingTweak[] }) => void;
  hover: CraftingTweak | null;
  setHover: (_hover: CraftingTweak | null) => void;
  version: number;
}>({
  selected: {},
  setSelected() {},
  hover: null,
  setHover() {},
  version: 19,
});

function CraftingTweaks() {
  const [data, setData] = useState<ICraftingTweaks[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: CraftingTweak[] }>(
    {}
  );
  const [hover, setHover] = useState<CraftingTweak | null>(null);
  const [version, setVersion] = useState(19);

  useEffect(() => {
    setData([]);
    setSelected({});

    fetch(
      `https://cors-anywhere.thecodeblog.net/vanillatweaks.net/assets/resources/json/1.${version}/ctcategories.json`
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
              data.length === 0 && "flex"
            }`}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-white tracking-widest drop-shadow-md">
                Crafting Tweaks
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
          <div className="w-full bg-[#696969] shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-[#E99743] flex items-center gap-3 text-white text-lg">
              {hover ? (
                <>
                  <img
                    src={`https://vanillatweaks.net/assets/resources/icons/craftingtweaks/1.${version}/${hover.name}.png`}
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
                src={`https://vanillatweaks.net/assets/resources/previews/craftingtweaks/1.${version}/${hover.name}.png?v2`}
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
            name="craftingtweaks"
            display="Crafting Tweaks"
            version={version}
          />
          <MiscButtons />
        </div>
      </div>
    </Context.Provider>
  );
}

export default CraftingTweaks;
