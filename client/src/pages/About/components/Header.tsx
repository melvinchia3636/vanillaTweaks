import React from "react";

function Header() {
  return (
    <>
      <p className="text-[#E99743] font-semibold tracking-wider text-lg mb-4">
        ABOUT US
      </p>
      <h1 className="text-3xl sm:text-5xl w-3/4 lgxl:w-3/5 text-center">
        Tweaking parts of the vanilla game that we believe can be a little bit
        better
      </h1>
      <p className="text-center w-3/4 lgxl:w-1/2 mt-6">
        Vanilla tweaks are mostly subtle changes to improve the default game
        experience. The website includes a picker with which you can create your
        very own collection of tweaks to be included in your game. You pick and
        choose, we do the rest!
      </p>
      <p className="text-center w-3/4 lgxl:w-1/2 mt-6">
        We will always have our service free for everyone, but if you wish to
        support us, you can do so on&nbsp;
        <a
          href="https://www.patreon.com/vanillatweaks"
          target="_blank"
          rel="noreferrer"
          className="font-semibold underline decoration-[1.5px] text-[#E99743]"
        >
          our Patreon
        </a>
        .
      </p>
    </>
  );
}

export default Header;
