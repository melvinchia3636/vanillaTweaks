import React from "react";
import Section from "./components/Section";

function Home() {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-8 mt-36 lg:mt-20">
      <img
        src="https://vanillatweaks.net/assets/images/logo.png"
        alt="logo"
        className="w-48 h-48"
      />
      <h2 className="text-4xl text-white uppercase tracking-[0.2em] text-center ml-2">
        pick and choose
      </h2>
      <div className="flex flex-col lg:flex-row items-start justify-between px-6 sm:px-12 md:px-24 mt-8 gap-16 lg:gap-0 lg:divide-x-2 divide-neutral-500">
        <Section
          title="Datapacks"
          to="/datapacks"
          description="Starting from Minecraft version 1.13. They can run commands in-game, control loot tables, change crafting recipes and alter achievements."
        />
        <Section
          title="Crafting Tweaks"
          to="/crafting-tweaks"
          description="Starting from Minecraft version 1.13. Crafting Tweaks are a separate category of datapacks. They can change or add crafting recipes and add functionality."
        />
        <Section
          title="Resource Packs"
          to="/resource-packs"
          description="Starting from Minecraft version 1.11. Resource packs can alter textures, sounds and models. For example change your crosshair or select a new menu background."
        />
      </div>
    </div>
  );
}

export default Home;
