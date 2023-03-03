import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navItems = [
    {
      name: "Reource Packs",
      link: "/resource-packs",
    },
    {
      name: "Datapacks",
      link: "/datapacks",
    },
    {
      name: "Crafting Tweaks",
      link: "/crafting-tweaks",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  return (
    <>
      <nav className="w-full p-6 bg-neutral-700 shadow-md flex items-center justify-between fixed z-[9999]">
        <Link
          to="/"
          className="flex items-center gap-3 uppercase text-white tracking-widest text-lg font-semibold"
        >
          <img
            src="https://vanillatweaks.net/assets/images/logo.png"
            alt="logo"
            className="w-8 h-8"
          />
          <span className="mt-0.5">vanilla tweaks</span>
        </Link>
        <div className="hidden lg:flex items-center gap-12 text-white mr-4 tracking-widest">
          {navItems.map(({ name, link }) => (
            <Link
              key={name}
              to={link}
              className={`relative after:transition-all after:content-[''] after:absolute after:border-b-2 after:border-b-[#E99743] after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:rounded-full ${
                link === location.pathname
                  ? "after:w-1/2 font-semibold"
                  : "after:w-0"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <Icon icon="uil:bars" className="text-3xl text-white" />
        </button>
      </nav>
      <div
        className={`w-full h-screen fixed top-0 left-0 transition-all duration-700 ${
          navOpen ? "-translate-y-0" : "-translate-y-full"
        } bg-neutral-600 flex items-center justify-center flex-col gap-16 text-lg text-white mr-4 tracking-widest z-[9998] lg:hidden`}
      >
        {navItems.map(({ name, link }) => (
          <Link
            key={name}
            to={link}
            className={`relative after:transition-all after:content-[''] after:absolute after:border-b-2 after:border-b-[#E99743] after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:rounded-full ${
              link === location.pathname
                ? "after:w-1/2 font-semibold"
                : "after:w-0"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;
