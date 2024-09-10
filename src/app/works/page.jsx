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
} from "../../components/ui/tooltip";
import Image from "next/image";
import img1 from "../../assets/images/work/thumb1.png";
import SliderBtn from "../../components/SliderBtn";

const projects = [
  {
    num: "01",
    name: "Sri Sai Products",
    desc: "Good analysis of the market and management of ads. Looking forward to grow bigger together!",
    Location: "Trichy, India",
    img: img1,
  },
  {
    num: "02",
    name: "Phoenix Aesthetic Centre",
    desc: "We at Phoenix Aesthetic Centre have had an excellent experience with Reach Technologies! Their expertise in Social Media Management has significantly boosted our online presence, and their personal branding strategies have truly enhanced our clinic's image. Their team is professional, creative, and always responsive to our needs.We highly recommend Reach Technologies for anyone looking to elevate their brand through digital marketing. Thank you for your outstanding work.",
    Location: "Madipakkam, Chennai",
    img: img1,
  },
  {
    num: "03",
    name: "Vignesh P",
    desc: "Good customer relationship. And sound knowledge about branding and digital marketing. Will recommend highly",
    Location: "Chennai, India",
    img: img1,
  },
  {
    num: "04",
    name: "Siva Kumar",
    desc: "First of all thank you for kind service. It's been 7months since we started work together. Were our phoenix doesn't have any idea about to build a company, we found you and ur approach were really great and tats we are one now. Your ideas and commitment and way of telling and explaining things every month makes amazing. Keep support us like the way now. We will be together forever. Thank you so much",
    Location: "Chennai, India",
    img: img1,
  },
  {
    num: "05",
    name: "Tariq Ahmed",
    desc: "Good in digital marketing services, very satisfied, great job",
    Location: "Chennai, India",
    img: img1,
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
          <div className="w-full ">
            <Swiper spaceBetween={30} slidesPerView={1} className="flex">
              {projects.map(({ img }, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <SliderBtn
                      containerStyles="flex gap-2 w-full justify-between xl:w-max xl:justify-none"
                      btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                    />
                    <div className="w-full xl:h-4/5 flex flex-col xl:justify-between order-2 xl:order-none">
                      <div className="flex flex-col gap-7 h-1/2">
                        {/* outline num */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                          {project.num}
                        </div>
                        {/* Project Category */}
                        <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                          {project.name}
                        </h2>
                        {/* Project Description */}
                        <p className="text-white/60">{project.desc}</p>
                        {/* Stack */}
                        <p className=" text-accent">{project.Location}</p>
                        {/* Border */}
                        <div className="border border-white/20" />
                        {/* Buttons */}
                        <div className="flex gap-4">
                          {/* Live Project Buttons */}
                          {/* <Link href={project.live}>
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
                </Link> */}

                          {/* Github Buttons */}
                          {/* <Link href={project.github}>
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
                </Link> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
