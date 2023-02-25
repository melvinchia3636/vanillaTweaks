/* eslint-disable react/no-danger */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import { Context, CraftingTweak } from '..';
import isIncompatible from '../../../functions/isIncompatible';
import packSelectCallback from '../../../functions/packSelectCallback';

function PackItem({
  pack,
  category,
}: {
  pack: CraftingTweak;
  category: string;
}) {
  const { selected, setSelected, hover, setHover, version } =
    useContext(Context);
  const [itemHover, setItemHover] = useState(false);

  return (
    <button
      type="button"
      onClick={() => packSelectCallback(selected, setSelected, category, pack)}
      onMouseEnter={() => {
        setHover(pack);
        setItemHover(true);
      }}
      onMouseLeave={() => {
        if (hover?.name === pack.name) {
          setHover(null);
        }

        setItemHover(false);
      }}
      className={`${
        Object.values(selected).filter(
          (e) => e.filter((f) => f.name === pack.name).length,
        ).length
          ? isIncompatible(selected, pack)
            ? 'bg-red-400'
            : 'bg-[#777777]'
          : 'bg-[#525252] hover:bg-[#606060]'
      } rounded-md relative shadow-md py-8 px-4 gap-1 flex flex-col justify-start items-center transition-all`}
    >
      {pack.description && (
        <div
          className={`px-4 bg-neutral-800 w-full text-sm rounded-md break-words text-white absolute bottom-0 overflow-auto left-1/2 -translate-x-1/2 transition-all duration-500 ${
            itemHover ? 'max-h-[75%] py-4' : 'max-h-0'
          }`}
          dangerouslySetInnerHTML={{ __html: pack.description }}
        />
      )}
      <img
        src={`https://vanillatweaks.net/assets/resources/icons/craftingtweaks/1.${version}/${pack.name}.png`}
        alt=""
        className="w-20 h-20"
      />
      <div className="text-white text-center pt-4">{pack.display}</div>
      {selected[category]?.includes(pack) && isIncompatible(selected, pack) && (
        <div
          className={`px-4 bg-red-500 w-full text-sm rounded-md break-words text-white absolute bottom-0 overflow-auto left-1/2 -translate-x-1/2 transition-all duration-500 ${
            itemHover ? 'max-h-[75%] py-4' : 'max-h-0'
          }`}
        >
          Incompatible with {pack.incompatible.join(', ')}
        </div>
      )}
    </button>
  );
}

export default PackItem;
