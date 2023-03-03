import React from "react";

const SPECIAL_THANKS: [string, string][] = [
  ["Xisumavoid", "Original Creator"],
  ["MSpaceDev", "Pack development"],
  ["Rick South", "Web design"],
  ["RockyAvalon", "Rack development"],
  ["tr33c", "Pack development"],
  ["Upperjeans", "Pack development"],
  ["Pollie", "Pack development"],
];

function SpecialThanks() {
  return (
    <>
      <h2 className="font-semibold tracking-widest text-3xl sm:text-4xl mt-20 w-3/4 text-center">
        SPECIAL THANKS
      </h2>
      <p className="mt-2 text-center w-3/4">
        We also have to thank a few people that were previously part of the
        team:
      </p>
      <div className="flex flex-wrap items-center justify-center w-3/4 lgxl:w-1/2 gap-8 mt-12">
        {SPECIAL_THANKS.map(([name, role]) => (
          <div key={name} className="text-center">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-[#E99743]">{role}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpecialThanks;
