import React from 'react';

function Home() {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-8">
      <img
        src="https://vanillatweaks.net/assets/images/logo.png"
        alt="logo"
        className="w-48 h-48"
      />
      <h2 className="text-4xl text-white uppercase tracking-[0.2em]">
        pick and choose
      </h2>
      <div className="flex items-start justify-between px-24 mt-8 divide-x-2 divide-neutral-500">
        <div className="flex-1 px-6 h-full">
          <h3 className="text-[#E99743] font-medium mb-2 text-2xl uppercase tracking-[0.2rem]">
            Resource Packs
          </h3>
          <p className="text-white tracking-widest">
            Starting from Minecraft version 1.11. Resource packs can alter
            textures, sounds and models. For example change your crosshair or
            select a new menu background.
          </p>
        </div>
        <div className="flex-1 px-6 h-full">
          <h3 className="text-[#E99743] font-medium mb-2 text-2xl uppercase tracking-[0.2rem]">
            Datapacks
          </h3>
          <p className="text-white tracking-widest">
            Starting from Minecraft version 1.13. They can run commands in-game,
            control loot tables, change crafting recipes and alter achievements.
          </p>
        </div>
        <div className="flex-1 px-6 h-full">
          <h3 className="text-[#E99743] font-medium mb-2 text-2xl uppercase tracking-[0.2rem]">
            Crafting Tweaks
          </h3>
          <p className="text-white tracking-widest">
            Starting from Minecraft version 1.13. Crafting Tweaks are a separate
            category of datapacks. They can change or add crafting recipes and
            add functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
