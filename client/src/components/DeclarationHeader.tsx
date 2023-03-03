import React from "react";
import Banner from "../assets/images/banner/banner.png";

function DeclarationHeader({ title }: { title: string }) {
  return (
    <div
      className="w-full h-72 bg-black/20 bg-center bg-blend-darken text-white text-3xl sm:text-5xl text-center font-semibold flex items-end justify-center py-4"
      style={{
        backgroundImage: `url("${Banner}")`,
      }}
    >
      {title}
    </div>
  );
}

export default DeclarationHeader;
