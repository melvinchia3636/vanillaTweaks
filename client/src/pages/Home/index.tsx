import React from 'react';
import Section from './components/Section';

function Home() {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-8 mt-20">
      <img
        src="https://vanillatweaks.net/assets/images/logo.png"
        alt="logo"
        className="w-48 h-48"
      />
      <h2 className="text-4xl text-white uppercase tracking-[0.2em]">
        pick and choose
      </h2>
      <div className="flex items-start justify-between px-24 mt-8 divide-x-2 divide-neutral-500">
        <Section
          title="Datapacks"
          description="Starting from Minecraft version 1.13. They can run commands in-game, control loot tables, change crafting recipes and alter achievements."
        />
        <Section
          title="Crafting Tweaks"
          description="Starting from Minecraft version 1.13. Crafting Tweaks are a separate category of datapacks. They can change or add crafting recipes and add functionality."
        />
        <Section
          title="Resource Packs"
          description="Starting from Minecraft version 1.11. Resource packs can alter textures, sounds and models. For example change your crosshair or select a new menu background."
        />
      </div>
    </div>
  );
}

export default Home;
