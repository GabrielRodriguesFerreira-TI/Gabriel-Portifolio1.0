import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "typings";
import { urlFor } from "@/pages";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-50"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl border-line">
        Sobre
      </h3>

      <div className="absolute top-[220px] left-5 w-56 h-56 border border-gray-100 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"></div>

      <figure className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] z-20">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
          src={urlFor(pageInfo?.profilePic).url()}
        />
      </figure>

      <img
        className="absolute top-[690px] right-[680px] z-10"
        src="/menphis.svg"
        alt=""
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Aqui está um <span className="about-gradient">pouco</span> sobre mim
        </h4>
        <p className="text-base">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
