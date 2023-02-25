import React, { ReactNode } from 'react';

function Link({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#E99743] transition-all"
    >
      {children}
    </a>
  );
}

export default Link;
