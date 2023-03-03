import React from "react";
import Header from "./components/Header";
import SpecialThanks from "./components/SpecialThanks";
import Teams from "./components/Teams";

function About() {
  return (
    <div className="w-full h-full items-center pb-0 sm:pb-20 py-20 flex flex-col text-white mt-20">
      <Header />
      <Teams />
      <SpecialThanks />
    </div>
  );
}

export default About;
