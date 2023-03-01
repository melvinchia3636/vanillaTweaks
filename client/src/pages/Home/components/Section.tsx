import React from 'react';
import { Link } from 'react-router-dom';

function Section({
  title,
  to,
  description,
}: {
  title: string;
  to: string;
  description: string;
}) {
  return (
    <Link to={to}>
      <div className="flex-1 px-6 h-full group">
        <h3 className="text-[#E99743] font-semibold mb-2 text-2xl uppercase tracking-[0.2rem] group-hover:underline decoration-[1.5px]">
          {title}
        </h3>
        <p className="text-white tracking-widest">{description}</p>
      </div>
    </Link>
  );
}

export default Section;
