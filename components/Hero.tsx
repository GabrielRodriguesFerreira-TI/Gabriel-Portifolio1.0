import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "typings";
import { urlFor } from "@/pages";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Eai, meu nome é ${pageInfo.name}`,
      "O-cara-que-gosta-de-café.tsx",
      "<MasGostaAindaMaisDeCodar />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-[-50px]">
      <BackgroundCircles />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Foto de perfil, Gabriel"
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
      />
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 tracking-[15px] hero-gradient">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3 text-gray-300">{text}</span>
          <Cursor cursorColor="#7F5AF0" />
        </h1>

        <div className="pt-5">
          <Link className="heroButton" href="#sobre">
            Sobre
          </Link>
          <Link className="heroButton" href="#skills">
            Skills
          </Link>
          <Link className="heroButton" href="#work">
            Planejamento
          </Link>
          <Link className="heroButton" href="#projetos">
            Projetos
          </Link>
        </div>
      </div>

      <div className="relative top-44 updown flex flex-col items-center space-y-5">
        <Link className="bg-[#7F5AF0]/80 rounded-full p-4" href="#sobre">
          Descubra Mais
        </Link>
        <ChevronDoubleDownIcon className="h-7 w-7" />
      </div>
    </div>
  );
}

export default Hero;
