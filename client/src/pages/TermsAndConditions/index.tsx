import React from 'react';
import Banner from '../../../public/assets/images/banner/banner.png';

function TermsAndConditions() {
  return (
    <div className="w-full mt-20 pb-20 text-white flex flex-col items-center">
      <div
        className="w-full h-72 bg-black/20 bg-center bg-blend-darken text-white text-5xl font-semibold flex items-end justify-center py-4"
        style={{
          backgroundImage: `url("${Banner}")`,
        }}
      >
        Terms and Conditions
      </div>
      <div className="py-16 w-3/4">
        <h2 className="text-3xl">
          Regarding using Vanilla Tweaks in your own projects
        </h2>
        <p className="mt-4 leading-8">
          It is perfectly fine for anyone to use, modify and share our packs
          within their projects for the betterment of the community.
          <br />
          However, you may only do so if it does not infringe on the following
          terms and conditions:
        </p>
        <p className="mt-8 text-sm font-semibold tracking-wider text-[#E99743]">
          SECTION 1
        </p>
        <h3 className="text-3xl mt-2 uppercase tracking-widest font-semibold">
          Terms
        </h3>
        <p className="font-semibold mt-4 text-lg mb-2">You cannot:</p>
        <ul className="list-disc list-inside pl-4 leading-8">
          <li>
            redistribute our tweaks as they are, without proper modification
            and/or additions.
          </li>
          <li>
            restrict access or sell any pack that includes our tweaks through
            donations and/or a paywall.
          </li>
          <li>
            distribute our tweaks without appropriate credit (listed below).
          </li>
        </ul>
        <p className="font-semibold mt-4 text-lg mb-2">You can:</p>
        <ul className="list-disc list-inside pl-4 leading-8">
          <li>
            distribute your pack with our tweaks, as long as your pack includes
            proper modification and/or additions.
          </li>
          <li>
            distribute your pack with our tweaks, as long as you have
            appropriately credited Vanilla Tweaks (listed below).
          </li>
          <li>
            distribute your pack with our tweaks, as long as it is free to use
            for the community.
          </li>
        </ul>
        <p className="mt-8 text-sm font-semibold tracking-wider text-[#E99743]">
          SECTION 2
        </p>
        <h3 className="text-3xl mt-2 uppercase tracking-widest font-semibold">
          Credits
        </h3>
        <p className="mt-4 leading-8">
          Include the below text on all main publishing platforms that you may
          use. (Minecraft Forum, Planet Minecraft, Minecraft Maps, Curseforge,
          etc.).
          <br />
          You must create a credits.txt within your project that includes the
          below text.
        </p>
        <div className="p-4 w-full bg-[#696969] rounded-lg mt-4 shadow-lg">
          <pre className="text-base">
            Credits:
            <br />
            Vanilla Tweaks: https://vanillatweaks.net/
          </pre>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
