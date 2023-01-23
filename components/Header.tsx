import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="absolute top-16 left-3 flex flex-col items-center w-12">
      <motion.span
        initial={{
          scale: 0,
          origin: 50,
        }}
        animate={{
          scale: 1,
          origin: 50,
        }}
        transition={{
          duration: 1,
        }}
        className="w-1 h-80 bg-gray-100"
      ></motion.span>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col items-center relative"
      >
        {socials.map((social) => (
          <div key={social._id} className={`div-link ${social.title} relative`}>
            <SocialIcon
              url={social.url}
              fgColor="white"
              bgColor="transparent"
              className="cursor-pointer after-effect-git"
            />
          </div>
        ))}
      </motion.div>
      <Link href="#contato">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col items-center text-gray-100 cursor-pointer"
        >
          <div className="div-link contact relative">
            <SocialIcon
              className="cursor-pointer after-effect"
              network="email"
              fgColor="white"
              bgColor="transparent"
            />
          </div>
        </motion.div>
      </Link>
      <motion.span
        initial={{
          scale: 0,
          origin: 50,
        }}
        animate={{
          scale: 1,
          origin: 50,
        }}
        transition={{
          duration: 1,
        }}
        className="w-1 h-80 bg-gray-100"
      ></motion.span>
    </header>
  );
}

export default Header;
