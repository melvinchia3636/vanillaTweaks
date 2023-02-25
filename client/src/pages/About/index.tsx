import { Icon } from '@iconify/react';
import React from 'react';

function About() {
  return (
    <div className="w-full h-full items-center py-20 flex flex-col text-white mt-20">
      <p className="text-[#E99743] font-semibold tracking-wider text-lg mb-4">
        ABOUT US
      </p>
      <h1 className="text-5xl w-3/5 text-center">
        Tweaking parts of the vanilla game that we believe can be a little bit
        better
      </h1>
      <p className="text-center w-1/2 mt-6">
        Vanilla tweaks are mostly subtle changes to improve the default game
        experience. The website includes a picker with which you can create your
        very own collection of tweaks to be included in your game. You pick and
        choose, we do the rest!
      </p>
      <p className="mt-6">
        We will always have our service free for everyone, but if you wish to
        support us, you can do so on&nbsp;
        <a
          href="https://www.patreon.com/vanillatweaks"
          className="font-semibold underline decoration-[1.5px] text-[#E99743]"
        >
          our Patreon
        </a>
        .
      </p>
      <h2 className="font-semibold tracking-widest text-4xl mt-20">OUR TEAM</h2>
      <div className="w-3/4 grid grid-cols-4 gap-4 mt-8">
        <div className="flex flex-col items-center bg-[#696969] rounded-lg shadow-lg p-8">
          <img
            alt=""
            src="https://vanillatweaks.net/assets/images/about/andre.png"
            className="rounded-full mb-6 w-36 h-36 ring-4 ring-white"
          />
          <h3 className="text-2xl font-semibold">André</h3>
          <p className="text-[#E99743]">Web Developer</p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://twitter.com/itsmeAndrePaulo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://andrepaulo.me"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:link" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#696969] rounded-lg shadow-lg p-8">
          <img
            alt=""
            src="https://vanillatweaks.net/assets/images/about/stridey_v2.png"
            className="rounded-full mb-6 w-36 h-36 ring-4 ring-white"
          />
          <h3 className="text-2xl font-semibold">Stridey</h3>
          <p className="text-[#E99743]">Resource Pack Developer</p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://twitter.com/Strideyyyy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://www.planetminecraft.com/member/stridey/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:link" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#696969] rounded-lg shadow-lg p-8">
          <img
            alt=""
            src="https://vanillatweaks.net/assets/images/about/grant.png"
            className="rounded-full mb-6 w-36 h-36 ring-4 ring-white"
          />
          <h3 className="text-2xl font-semibold">Grant</h3>
          <p className="text-[#E99743]">Datapack Developer</p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://twitter.com/GrantGryczan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#696969] rounded-lg shadow-lg p-8">
          <img
            alt=""
            src="https://vanillatweaks.net/assets/images/about/rx.png"
            className="rounded-full mb-6 w-36 h-36 ring-4 ring-white"
          />
          <h3 className="text-2xl font-semibold">rx</h3>
          <p className="text-[#E99743]">Datapack Developer</p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://twitter.com/IAmRx97"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/rx-modules"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:link" className="w-6 h-6" />
            </a>
            <a
              href="https://www.planetminecraft.com/member/rx97/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E99743] transition-all"
            >
              <Icon icon="uil:link" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <h2 className="font-semibold tracking-widest text-4xl mt-20">
        SPECIAL THANKS
      </h2>
      <p className="mt-2">
        We also have to thank a few people that were previously part of the
        team:
      </p>
      <div className="flex flex-wrap items-center justify-center w-1/2 gap-8 mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Xisumavoid</h3>
          <p className="text-[#E99743]">Original Creator</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold">MSpaceDev</h3>
          <p className="text-[#E99743]">Pack development</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Rick South</h3>
          <p className="text-[#E99743]">Web design</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold">RockyAvalon</h3>
          <p className="text-[#E99743]">Rack development</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold">tr33c</h3>
          <p className="text-[#E99743]">Pack development</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Upperjeans</h3>
          <p className="text-[#E99743]">Pack development</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Pollie</h3>
          <p className="text-[#E99743]">Pack development</p>
        </div>
      </div>
    </div>
  );
}

export default About;
