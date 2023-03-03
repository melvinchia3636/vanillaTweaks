/* eslint-disable object-curly-newline */
import React, { ReactElement } from "react";
import { Icon } from "@iconify/react";

import Andre from "../../../assets/images/about/andre.png";
import Stridey from "../../../assets/images/about/stridey_v2.png";
import Grant from "../../../assets/images/about/grant.png";
import Rx from "../../../assets/images/about/rx.png";
import Link from "../../../components/Link";
import Card from "./Card";

const TEAMS: {
  name: string;
  role: string;
  image: string;
  links: ReactElement[];
}[] = [
  {
    name: "André",
    role: "Web Developer",
    image: Andre,
    links: [
      <Link to="https://twitter.com/itsmeAndrePaulo">
        <Icon icon="uil:twitter" className="w-6 h-6" />
      </Link>,
      <Link to="https://andrepaulo.me">
        <Icon icon="uil:link" className="w-6 h-6" />
      </Link>,
    ],
  },
  {
    name: "Stridey",
    role: "Web Developer",
    image: Stridey,
    links: [
      <Link to="https://twitter.com/Strideyyyy">
        <Icon icon="uil:twitter" className="w-6 h-6" />
      </Link>,
      <Link to="https://www.planetminecraft.com/member/stridey/">
        <Icon icon="uil:link" className="w-6 h-6" />
      </Link>,
    ],
  },
  {
    name: "Grant",
    role: "Web Developer",
    image: Grant,
    links: [
      <Link to="https://twitter.com/GrantGryczan">
        <Icon icon="uil:twitter" className="w-6 h-6" />
      </Link>,
    ],
  },
  {
    name: "Rx",
    role: "Web Developer",
    image: Rx,
    links: [
      <Link to="https://twitter.com/IAmRx97">
        <Icon icon="uil:twitter" className="w-6 h-6" />
      </Link>,
      <Link to="https://github.com/rx-modules">
        <Icon icon="uil:link" className="w-6 h-6" />
      </Link>,
      <Link to="https://www.planetminecraft.com/member/rx97/">
        <Icon icon="uil:link" className="w-6 h-6" />
      </Link>,
    ],
  },
];

function Teams() {
  return (
    <>
      <h2 className="font-semibold tracking-widest text-3xl sm:text-4xl mt-20">
        OUR TEAM
      </h2>
      <div className="w-3/4 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 mt-8">
        {TEAMS.map(({ name, role, image, links }) => (
          <Card
            key={name}
            name={name}
            _role={role}
            image={image}
            links={links}
          />
        ))}
      </div>
    </>
  );
}

export default Teams;
