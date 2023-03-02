import React from 'react';
import { Icon } from '@iconify/react';

function MiscButtons() {
  return (
    <div className="flex flex-col gap-2">
      <a
        href="/installation"
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-center justify-center bg-[#E99743] hover:bg-[#dd8a38] transition-all text-white rounded-md py-3 shadow-md"
      >
        How to Install
      </a>
      <a
        href="https://patreon.com/vanillatweaks"
        target="_blank"
        rel="noreferrer"
        className="w-full flex bg-[#E94D43] hover:bg-[#d54137] transition-all items-center justify-center text-white rounded-md py-3 relative shadow-md"
      >
        <Icon
          icon="mdi:patreon"
          className="text-white absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 ml-3"
        />
        Support Us
      </a>
    </div>
  );
}

export default MiscButtons;
