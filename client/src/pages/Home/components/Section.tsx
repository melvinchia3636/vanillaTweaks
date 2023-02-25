import React from 'react';

function Section({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 px-6 h-full">
      <h3 className="text-[#E99743] font-semibold mb-2 text-2xl uppercase tracking-[0.2rem]">
        {title}
      </h3>
      <p className="text-white tracking-widest">{description}</p>
    </div>
  );
}

export default Section;
