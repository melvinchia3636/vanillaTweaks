import React, { ReactElement } from 'react';

export default function Card({
  image,
  name,
  _role,
  links,
}: {
  image: string;
  name: string;
  _role: string;
  links: ReactElement[];
}) {
  return (
    <div className="flex flex-col items-center bg-[#696969] rounded-lg shadow-lg p-8">
      <img
        alt=""
        src={image}
        className="rounded-full mb-6 w-36 h-36 ring-4 ring-white"
      />
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-[#E99743]">{_role}</p>
      <div className="flex items-center gap-3 mt-4">{links}</div>
    </div>
  );
}
