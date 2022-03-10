import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const navItems = [
    {
      name: 'Reource Packs',
      link: '/resource-packs'
    },
    {
      name: 'Datapacks',
      link: '/datapacks'
    },
    {
      name: 'Crafting Tweaks',
      link: '/crafting-tweaks'
    },
    {
      name: 'About',
      link: '/about'
    },
  ]
  return (
    <nav className="w-full p-6 bg-neutral-700 shadow-md flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3 uppercase text-white tracking-widest">
        <img src="https://vanillatweaks.net/assets/images/logo.png" alt="logo" className="w-8 h-8" />
        <span className="mt-0.5">vanilla tweaks</span>
      </Link>
      <div className="flex items-center gap-12 text-white mr-4 tracking-widest">
        {navItems.map(({ name, link }) => (
        <Link to={link} className={`relative ${link === location.pathname ? "after:content-[''] after:absolute after:w-1/2 after:border-b-[1.6px] after:border-b-[#E99743] after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:rounded-full" : ""}`}>{name}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar