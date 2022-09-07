import React from 'react';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div className="w-full shadow-[0_-4px_6px_-1px_rgb(0_0_0/0.1)] p-4 px-8 flex items-center justify-between tracking-wide bg-neutral-700 lg:absolute bottom-0 left-0 translate-y-full text-white">
      <p className="flex items-center gap-2">
        Copyright © Vanilla Tweaks 2021
        <span className="w-1 h-1 bg-[#E99743] inline-block rounded-full" />
        Privacy Policy
      </p>
      <p className="flex items-center gap-2">
        Follow us on
        <Icon icon="simple-icons:twitter" />
        <Icon icon="simple-icons:discord" />
        <span className="w-1 h-1 bg-[#E99743] inline-block rounded-full" />
        Send us feedback
      </p>
    </div>
  );
}

export default Footer;
