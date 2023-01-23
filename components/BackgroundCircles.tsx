import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.5, 0.5, 0.5, 0.8, 0.5, 0.5],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#7F5AF0] rounded-full opacity-100  h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#7F5AF0] rounded-full opacity-20  h-[300px] w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-[#7F5AF0] rounded-full opacity-20  h-[500px] w-[500px] mt-52 animate-pulse" />
      <div className=" rounded-full border border-[#7F5AF0] opacity-100 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full opacity-20 h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
