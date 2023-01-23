import React from "react";
import { motion } from "framer-motion";
import { Project } from "typings";
import { urlFor } from "@/pages";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-300 text-2xl border-line-projects">
        Projetos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7F5AF0]/60">
        {projects?.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={index}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src={urlFor(project.image).url()}
              alt=""
              className="w-[666px] h-[375px] object-cover object-top"
            />

            <div className="relative rounded-full bg-gray-600 w-5 h-9 flex items-center justify-center cursor-pointer top-[60px] left-[540px] transition hover:bg-[#7F5AF0] hover:shadow-[0_0_0_4px_#333,0_0_0_6px_#7F5AF0] z-50 tooltip">
              <div className="absolute flex flex-col space-y-2 bottom-14 bg-[#26262c] p-5 box-border rounded-md invisible opacity-0 transition popup translate-x-[-50%] translate-y-[-50px] w-60">
                <h3 className=" text-gray-50 font-semibold text-xl">Scroll horizontal</h3>
                <p className="text-gray-400">
                  Se por algum motivo seu scoll horizontal não estiver
                  funcionando normalmente, segure shift e use.
                </p>
              </div>
              ?
            </div>

            <div className="px-0 md:p-5 max-w-6xl bg-[#26262c] rounded-xl z-0">
              <h4 className="text-4xl font-semibold text-center">
                <span className=" underline decoration-[#7F5AF0]/50">
                  {index + 1} de {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 py-4 justify-center tech">
                {project?.technologies.map((tech) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="h-10 w-10"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt="tecnologias"
                  />
                ))}
              </div>

              <div className="relative top-[-150px] left-[-40px] w-20 h-20 bg-[#7F5AF0] after-project z-10"></div>

              <p className="text-lg text-center md:text-left summary">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#7F5AF0]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
