/* eslint-disable max-len */
import React from 'react';

function HowToInstall() {
  return (
    <div className="flex pt-32 installation text-white justify-center w-full tracking-wide text-lg mt-20">
      <div className="w-8/12">
        <h1 className="font-medium text-5xl uppercase tracking-[0.2em] text-center mb-4">
          Installation Process
        </h1>
        <p>
          Welcome to the installation page! You can find how you can install our
          tweaks straight into your game on this page! The process is a little
          different for each category, so read on for each one. You can click on
          the options below to navigate to the type of pack you want to install.
        </p>
        <ul className="flex items-center gap-3 justify-center">
          <li>
            <a
              className="uppercase border-2 border-[#E99743] text-[#E99743] px-8 py-3 block tracking-[0.2em] text-base font-medium"
              href="#resourcepacks"
            >
              Resource Packs
            </a>
          </li>
          <li>
            <a
              className="uppercase border-2 border-[#E99743] text-[#E99743] px-8 py-3 block tracking-[0.2em] text-base font-medium"
              href="#datapacks"
            >
              Datapacks and Crafting Tweaks
            </a>
          </li>
        </ul>
        <h1
          id="resourcepacks"
          className="mt-24 text-3xl uppercase tracking-[0.2em] font-medium"
        >
          Resource Packs
        </h1>
        <ol className="install">
          <li>Click on &quot;Options...&quot; in the Main Menu.</li>
          <img
            src="https://vanillatweaks.net/installation/img/rp/1.png"
            className="img-fluid"
            alt=""
          />
          <li>Click on &quot;Resource Packs...&quot; in the Options screen.</li>
          <img
            src="https://vanillatweaks.net/installation/img/rp/2.png"
            className="img-fluid"
            alt=""
          />
          <li>
            Click on &quot;Open Resource Pack Folder&quot; in the Resource Pack
            Screen.
          </li>
          <img
            src="https://vanillatweaks.net/installation/img/rp/3.png"
            className="img-fluid"
            alt=""
          />
          <li>
            Drag and drop your downloaded &quot;Vanilla Tweaks&quot; zip into
            the folder that was opened.
          </li>
          <img
            src="https://vanillatweaks.net/installation/img/rp/4.png"
            className="img-fluid"
            alt=""
          />
          <li>
            You will now see the resource pack in the list upon reloading the
            Resource Pack Screen.
          </li>
        </ol>
        <h1
          id="datapacks"
          className="mt-24 text-3xl uppercase tracking-[0.2em] font-medium"
        >
          Datapacks and Crafting Tweaks
        </h1>
        <ol className="install">
          <li>Click on &quot;Single Player&quot; in the Main Menu.</li>
          <img
            src="https://vanillatweaks.net/installation/img/dp/1.png"
            className="img-fluid"
            alt=""
          />
          <li>
            Find the world where you want to install the Datapacks/Crafting
            Tweaks, select it and press &quot;Edit&quot;.
          </li>
          <img
            src="https://vanillatweaks.net/installation/img/dp/2.png"
            className="img-fluid"
            alt=""
          />
          <li>Click on &quot;Open World Folder&quot; in the Settings menu.</li>
          <img
            src="https://vanillatweaks.net/installation/img/dp/3.png"
            className="img-fluid"
            alt=""
          />
          <li>Go to the &quot;datapacks&quot; folder.</li>
          <img
            src="https://vanillatweaks.net/installation/img/dp/4.png"
            className="img-fluid"
            alt=""
          />
          <li>
            Move the file you downloaded to that folder. (Crafting Tweaks skip
            to step 9.)
          </li>
          <p className="!mt-24 text-2xl uppercase tracking-[0.2em] font-medium">
            Datapacks only:
          </p>
          <li>
            Right click the zip file and click &quot;Extract All&quot;. Press
            &quot;Extract&quot;
          </li>
          <img
            src="https://vanillatweaks.net/installation/img/dp/5.png"
            className="img-fluid"
            alt=""
          />
          <p className="margin">
            It should open a new window with the datapacks you selected.
          </p>
          <li>
            Move all the files to the same folder where the .zip file is
            located. (CTRL+A to select all files)
          </li>
          <img
            src="https://vanillatweaks.net/installation/img/dp/6.png"
            className="img-fluid"
            alt=""
          />
          <li>Delete the &quot;UNZIP_ME&quot; folder and file.</li>
          <img
            src="https://vanillatweaks.net/installation/img/dp/7.png"
            className="img-fluid"
            alt=""
          />
          <li>
            You have now successfully installed the datapacks and crafting
            tweaks into your world!
          </li>
          <li className="!mb-32">
            You may have to run &quot;/reload&quot; in your world if it is
            already open
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HowToInstall;
