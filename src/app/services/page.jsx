"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem natus.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem natus.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem natus.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem natus.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className=" flex flex-col justify-center">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-14"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
        >
          {services.map(({ num, title, desc, href }, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {num}
                  </span>
                  <Link
                    href={href}
                    className="size-16 bg-white rounded-full group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{title}</h2>
                <p className="text-white/60">{desc}</p>
                <div className="border border-b-2 border-white/20 w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
