import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { Context, ICraftingTweaks } from "..";
import PackItem from "./Pack";

function Category({
  category,
  index,
}: {
  category: ICraftingTweaks;
  index: number;
}) {
  const [isOpen, setOpen] = useState(index === 0);
  const { selected, setSelected } = useContext(Context);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          if (!(e.target as HTMLButtonElement)?.classList.contains("cath")) {
            setOpen(!isOpen);
          }
        }}
        className="text-lg text-white tracking-widest bg-[#525252] rounded-md shadow-md px-4 py-2 flex items-center justify-between"
      >
        <div className="flex items-center gap-1">
          <Icon
            icon="uil:angle-right"
            className={`text-[#E99743] w-6 h-6 transition-all ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          <span className="mt-0.5">{category.category}</span>
        </div>
        {isOpen && (
          <button
            type="button"
            onClick={() => {
              const newSelected = { ...selected };
              if (newSelected[category.category] === category.packs) {
                delete newSelected[category.category];
              } else {
                newSelected[category.category] = category.packs;
              }

              setSelected(newSelected);
            }}
            className="flex items-center gap-2 text-sm group cath"
          >
            <p className="text-white tracking-wide hidden group-hover:block cath">
              Pick all
            </p>
            <img
              src="https://vanillatweaks.net/assets/images/pickall.png"
              alt="pick all"
              className="w-6 h-6 cath"
            />
          </button>
        )}
      </button>
      <div
        className={`grid min-w-0 gap-4 px-0 sm:px-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] transition-all overflow-hidden duration-700 ${
          isOpen ? "max-h-[180rem] py-4" : "max-h-0 py-0"
        }`}
      >
        {category.packs.map((pack) => (
          <PackItem key={pack.name} pack={pack} category={category.category} />
        ))}
      </div>
    </>
  );
}

export default Category;
