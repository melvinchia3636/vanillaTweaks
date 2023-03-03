import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full shadow-[0_-4px_6px_-1px_rgb(0_0_0/0.1)] p-4 px-8 flex flex-col lg:flex-row items-center justify-between tracking-wide bg-neutral-700 lg:absolute bottom-0 left-0 translate-y-full text-white gap-2">
      <span className="sm:hidden">Copyright © Vanilla Tweaks 2021</span>
      <p className="flex items-center gap-2">
        <span className="hidden sm:flex items-center gap-2">
          Copyright © Vanilla Tweaks 2021
          <span className="w-1 h-1 bg-[#E99743] hover:bg-[#dd8a38] transition-all inline-block rounded-full" />
        </span>
        <Link to="/toc" className="underline decoration-[1.5px]">
          Terms & Conditions
        </Link>
        <span className="w-1 h-1 bg-[#E99743] hover:bg-[#dd8a38] transition-all inline-block rounded-full" />
        <Link to="/privacy" className="underline decoration-[1.5px]">
          Privacy Policy
        </Link>
      </p>
      <p className="flex items-center gap-2">
        Join and support us on
        <a
          href="https://twitter.com/VanillaTweaks"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#E99743] transition-all"
        >
          <Icon icon="simple-icons:twitter" />
        </a>
        <a
          href="https://discord.com/invite/qG53qwF"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#E99743] transition-all"
        >
          <Icon icon="simple-icons:discord" />
        </a>
        <a
          href="https://www.patreon.com/vanillatweaks"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#E99743] transition-all"
        >
          <Icon icon="simple-icons:patreon" />
        </a>
        <span className="hidden sm:flex items-center gap-2">
          <span className="w-1 h-1 bg-[#E99743] hover:bg-[#dd8a38] transition-all inline-block rounded-full" />
          <Link
            to="/feedback"
            className="underline decoration-[1.5px] hover:text-[#E99743] transition-all"
          >
            Send us feedback
          </Link>
        </span>
      </p>
      <span className="sm:hidden">
        <Link
          to="/feedback"
          className="underline decoration-[1.5px] hover:text-[#E99743] transition-all"
        >
          Send us feedback
        </Link>
      </span>
    </div>
  );
}

export default Footer;
