import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { IDatapacks } from '.'
import PackItem from './Pack'

function Category({ category, index }: {
  category: IDatapacks,
  index: number
}) {
  const [isOpen, setOpen] = useState(index === 0);

  return (
    <>
      <button onClick={() => setOpen(!isOpen)} className="text-lg text-white tracking-widest bg-[#525252] rounded-md shadow-md px-4 py-2 gap-1 flex items-center">
        <Icon icon="uil:angle-right" className={`text-[#E99743] w-6 h-6 transition-all ${isOpen ? "rotate-90" : ""}`} />
        <span className="mt-0.5">{category.category}</span>
      </button>
      <div className={`grid min-w-0 gap-4 px-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] transition-all overflow-hidden duration-700 ${isOpen ? "max-h-[150rem] py-4" : "max-h-0 py-0"}`}>
        {category.packs.map((pack) => (
          <PackItem pack={pack} category={category.category} />
        ))}
      </div>
    </>
  )
}

export default Category