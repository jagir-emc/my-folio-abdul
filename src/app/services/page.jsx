"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Social Media Marketing",
    desc: "Our goal is to boost brand awareness, drive website traffic, and generate leads or sales through key social media platforms that best reach our target audience.",
    href: "",
  },
  {
    num: "02",
    title: "SEO",
    desc: "Set of techniques and strategies used to improve the visibility and ranking of a website or web page in search engine results pages (SERPs).",
    href: "",
  },
  {
    num: "03",
    title: "PPC Advertising",
    desc: "Boost your ROI with targeted PPC campaigns. We manage and optimize ads on Google and social media to drive quality traffic and increase conversions.",
    href: "",
  },
  {
    num: "04",
    title: "Meta Ads",
    desc: "Target your ideal audience with Meta Ads. We create and optimize campaigns on Facebook and Instagram to boost brand awareness, engagement, and conversions.",
    href: "",
  },
  {
    num: "05",
    title: "Google Ads",
    desc: "Target your audience with Google Ads. We create and optimize campaigns to increase visibility, drive traffic, and boost conversions.",
    href: "",
  },
  {
    num: "06",
    title: "YouTube Optimization",
    desc: "Enhance your YouTube channel with expert optimization. We improve content, SEO, and engagement to grow your audience and increase views.",
    href: "",
  },
  {
    num: "07",
    title: "Email Marketing",
    desc: "Drive conversions with personalized email marketing. We create engaging content, manage lists, and optimize campaigns to boost loyalty and sales.",
    href: "",
  },
  {
    num: "08",
    title: "DM Consultations",
    desc: "Receive tailored strategies and insights to grow your brand, reach your audience, and enhance online performance with our Digital Marketing Consultations.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className=" flex flex-col justify-center py-5">
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
                    href={"/contact"}
                    className="size-16 bg-white rounded-full group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {title}
                </h2>
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
