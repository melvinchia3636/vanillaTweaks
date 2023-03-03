import React from "react";
import DeclarationHeader from "../../components/DeclarationHeader";

function TermsAndConditions() {
  return (
    <div className="w-full mt-20 sm:pb-20 text-white flex flex-col items-center">
      <DeclarationHeader title="Terms and Conditions" />
      <div className="py-16 w-3/4">
        <h1 className="text-3xl">
          Regarding using Vanilla Tweaks in your own projects
        </h1>
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
        <h2 className="text-3xl mt-2 uppercase tracking-widest font-semibold">
          Terms
        </h2>
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
        <h2 className="text-3xl mt-2 uppercase tracking-widest font-semibold">
          Credits
        </h2>
        <p className="mt-4 leading-8">
          Include the below text on all main publishing platforms that you may
          use. (Minecraft Forum, Planet Minecraft, Minecraft Maps, Curseforge,
          etc.).
          <br />
          You must create a credits.txt within your project that includes the
          below text.
        </p>
        <div className="p-4 w-full bg-[#696969] rounded-lg mt-4 shadow-lg">
          <pre className="text-base whitespace-pre-wrap">
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
