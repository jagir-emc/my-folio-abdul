"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pic from "../assets/images/Diva.png";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="size-72 xl:size-96 relative"
        >
          <Image
            src={pic}
            priority
            quality={100}
            fill
            className="object-contain border-2 border-dashed border-accent rounded-full"
            alt="Abdul"
          />
          <motion.div
            // initial={{ opacity:0 }}
            // animate={{
            //   opacity:1,
            //   transition: { delay: 2, repeatType:"loop", repeat:Infinity, repeatDelay:2,duration: 1, ease: "easeInOut" },
            // }}
            className="absolute bg-accent size-72 xl:size-96 rounded-full -z-20"
          >
            <div className="absolute bg-primary bottom-10 size-[270px] xl:size-[370px] rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
