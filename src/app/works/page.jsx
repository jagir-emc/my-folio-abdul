"use client";

import { motion } from "framer-motion";
import react, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/images/work/thumb1.png";
import img2 from "@/assets/images/work/thumb2.png";
import img3 from "@/assets/images/work/thumb3.png";
import SliderBtn from "@/components/SliderBtn";

const projects = [
  {
    num: "01",
    cate: "Front-end",
    title: "Project 01",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, placeat laudantium aspernatur rem atque odio.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    img: img1,
    live: "",
    github: "",
  },
  {
    num: "02",
    cate: "Full Stack",
    title: "Project 02",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, placeat laudantium aspernatur rem atque odio.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Node.js" }],
    img: img2,
    live: "",
    github: "",
  },
  {
    num: "03",
    cate: "Front-end",
    title: "Project 03",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, placeat laudantium aspernatur rem atque odio.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }],
    img: img3,
    live: "",
    github: "",
  },
];
const Works = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current Slide index
    const currentIndex = swiper.activeIndex;
    //Updating state based on Current Slide
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
      }}
      className=" flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-7">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-7 h-1/2">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.cate} Project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.desc}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map(({ name }, index) => {
                  return (
                    <li className=" text-accent" key={index}>
                      {name}
                      {index !== project.stack.length - 1 && " ,"}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20" />
              {/* Buttons */}
              <div className="flex gap-4">
                {/* Live Project Buttons */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent group-hover:rotate-45 transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Buttons */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] flex"
            >
              {projects.map(({ img }, index) => {
                return (
                  <SwiperSlide className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*Overlay*/}
                      <div className="absolute top-0 bottom-0 size-full bg-black/10 z-10"></div>
                      {/*Image*/}
                      <div className="relative size-full">
                        <Image
                          className="object-cover"
                          src={project.img}
                          alt="Image"
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
