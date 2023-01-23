import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function WorkTips({}: Props) {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center z-50"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl border-line-work">
        Planejamento
      </h3>

      <h3 className="absolute top-[180px] uppercase tracking-[3px] text-gray-500 text-base">
        COMO EU <span className="about-gradient">TRABALHO</span>
      </h3>

      <div className="flex flex-row justify-between items-center w-full relative">
        <div className="divSvg absolute top-[-100px] left-[-50px] z-0">
          <svg
          className=" absolute"
            width="1220"
            height="364"
            viewBox="0 0 1478 364"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animetedLine"
              d="M4 211.36C269.5 429.499 437.5 172.5 629.5 172.5C894.689 172.5 935 358.5 1096.5 358.5C1236.22 358.5 1420.5 145.5 1473 2"
              stroke="white"
              stroke-width="10"
            />
          </svg>
          <motion.div
            initial={{
              translateX: 0,
            }}
            whileInView={{
              translateX: 2000,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 6,
            }}
            className="afterDivSvg"
          ></motion.div>
        </div>

        <motion.img
          initial={{
            opacity: 0,
            translateX: 250,
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 2.5,
          }}
          className="absolute top-[-180px] right-[-30px]"
          src="/Vectors.svg"
          alt=""
        />

        <div className="flex flex-col space-y-2 max-w-xs z-10 bg-[#010101] p-5">
          <span className="about-gradient text-xl">01</span>
          <h4 className=" uppercase text-gray-100 font-semibold text-xl">
            Esqueleto
          </h4>
          <p className="text-gray-400 text-lg">
            Começo criando um esqueleto do modelo para funcionar da melhor forma
            possível em uma navegação agradável para o usuário
          </p>
        </div>
        <div className="flex flex-col space-y-2 max-w-xs z-10 bg-[#010101] p-5">
          <span className="about-gradient text-xl">02</span>
          <h4 className=" uppercase text-gray-100 font-semibold text-xl">
            Interface
          </h4>
          <p className="text-gray-400 text-lg">
            Em seguida, trabalho na interface Ui para oferecer a melhor
            experiência possível. Isso passa pela composição das cores e pelo
            desenho dos elementos
          </p>
        </div>
        <div className="flex flex-col space-y-2 max-w-xs z-10 bg-[#010101] p-5">
          <span className="about-gradient text-xl">03</span>
          <h4 className=" uppercase text-gray-100 font-semibold text-xl">
            Funcionalidades
          </h4>
          <p className="text-gray-400 text-lg">
            Por fim, crio a prototipagem e as animações dos meus elementos de
            forma a dar vida aos meus botões, bem como a todos os meus
            componentes presentes
          </p>
        </div>
      </div>
    </motion.div>
  );
}
