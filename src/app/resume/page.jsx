"use client";

import { info } from "autoprefixer";
import { delay, motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import bage from "@/assets/images/resume/badge.svg";
import cap from "@/assets/images/resume/cap.svg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

//About Data

const about = {
  title: "About Me",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam magnam incidunt molestiae nobis. Eius maxime sapiente rem illo autem.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Abdul Rahaman Jagirdhar",
    },
    {
      fieldname: "Phone",
      fieldValue: "(+91) 82708 35874",
    },
    {
      fieldname: "Experience",
      fieldValue: "06+ Months",
    },
    {
      fieldname: "Linkedin",
      fieldValue: "Abdul Rahaman Jagirdhar",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldname: "Email",
      fieldValue: "abdurrahamanjagirdhar@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldname: "Language",
      fieldValue: "English, Tamil, Urudu, Arabic",
    },
  ],
};

//Experience Data

const experience = {
  icon: bage,
  title: "My Education",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam magnam incidunt molestiae nobis. Eius maxime sapiente rem illo autem.",
  items: [
    {
      Company: "Error Makes Clever",
      position: "Jr. full Stack Developer",
      duration: "2024 Feb - present",
    },
    {
      Company: "Tech Solutions Inc.",
      position: "full Stack Developer",
      duration: "2022 - present",
    },
    {
      Company: "Tech Solutions Inc.",
      position: "full Stack Developer",
      duration: "2022 - present",
    },
    {
      Company: "Tech Solutions Inc.",
      position: "full Stack Developer",
      duration: "2022 - present",
    },
    {
      Company: "Tech Solutions Inc.",
      position: "full Stack Developer",
      duration: "2022 - present",
    },
    {
      Company: "Tech Solutions Inc.",
      position: "full Stack Developer",
      duration: "2022 - present",
    },
  ],
};
//Education Data

const education = {
  icon: cap,
  title: "My Experience",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam magnam incidunt molestiae nobis. Eius maxime sapiente rem illo autem.",
  items: [
    {
      institute: "Error Makes Clever",
      degree: "Full Stack Development",
      duration: "2023",
    },
    {
      institute: "Crescent University",
      degree: "BA Arabic Litrature",
      duration: "2020-2023",
    },
    {
      institute: "University of Madras",
      degree: "BBA Administration of Business",
      duration: "2020-2023",
    },
    {
      institute: "Crescent School",
      degree: "Hr Secondary Study",
      duration: "2019-2020",
    },
    {
      institute: "AKT School",
      degree: "10th Std",
      duration: "2017-2018",
    },
  ],
};

//Skillset Data
const skills = {
  title: "My Skills",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam magnam incidunt molestiae nobis. Eius maxime sapiente rem illo autem.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Node.Js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-14"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className=" w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-96">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-7">
                    {experience.items.map(
                      ({ Company, position, duration }, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{duration}</span>
                            <h3 className="text-xl  text-center xl:text-start">
                              {position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                              <p className="text-white/60">{Company}</p>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-7 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-96">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-7">
                    {education.items.map(
                      ({ institute, degree, duration }, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-44 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{duration}</span>
                            <h3 className="text-xl  text-center xl:text-start">
                              {degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                              <p className="text-white/60">{institute}</p>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7">
                  {skills.skillList.map(({ icon, name }, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-36 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-start"
            >
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className=" text-white/60 mx-auto xl:mx-0">
                    {about.desc}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  mx-auto xl:mx-0">
                    {
                      about.info.map(({fieldname,fieldValue},index)=>{
                        return(
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                            <span className="text-white/40">{fieldname}</span>
                            <span className="">{fieldValue}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
