"use client";

import Photo from "./../components/Photo";
import Social from "./../components/Social";
import Stats from "../components/Stats";
import SliderBtn from "../components/SliderBtn";
import "swiper/css";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { ScrollArea } from "../components/ui/scroll-area";

//Resume

import {
  SiGoogleanalytics,
  SiGoogleads,
  SiSemrush,
  SiMailchimp,
  SiCanva,
  SiGoogletagmanager,
  SiBuffer,
  SiWhatsapp,
} from "react-icons/si";
import { FaMeta, FaLeaf, FaDatabase } from "react-icons/fa6";
import { MdOutlineAutorenew } from "react-icons/md";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import sendMail from "../app/fetchEmail/sendmail";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

//Services

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

//Skillset Data

const skills = {
  title: "My Skills",
  desc: "I provide insights and analysis, manage and optimize ad campaigns, enhance SEO strategies, design engaging content, handle tag management, streamline social media efforts, automate communication, and manage CRM and lead generation processes",
  skillList: [
    {
      icon: <SiGoogleanalytics />,
      name: "Google Analytics",
    },
    {
      icon: <SiGoogleads />,
      name: "Google Ads",
    },
    {
      icon: <FaMeta />,
      name: "Meta Ads",
    },
    {
      icon: <SiSemrush />,
      name: "SemRush",
    },
    {
      icon: <SiMailchimp />,
      name: "Mailchimp",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <SiGoogletagmanager />,
      name: "Google Tag Manager",
    },
    {
      icon: <SiBuffer />,
      name: "Buffer",
    },
    {
      icon: <FaLeaf />,
      name: "Sprout Social",
    },
    {
      icon: <SiWhatsapp />,
      name: "Whatsapp Api Tool",
    },
    {
      icon: <FaDatabase />,
      name: "LeadSquared",
    },
    {
      icon: <MdOutlineAutorenew />,
      name: "ManyChat",
    },
  ],
};

//About Data

const about = {
  title: "About Me",
  desc1:
    "I am the founder of Reach Technologies, a start-up that provides innovative and impactful solutions for digital marketing and consulting. My passion is to create and implement effective strategies for online platforms and websites, using my skills and knowledge in advanced digital marketing, which I acquired through multiple courses.",
  desc2:
    "Before launching my venture, I gained valuable experience as a Data Analyst at Stats Perform, a sports-based company. There, I worked with backend databases and performed data analysis and visualization, using various tools and techniques. I also have a background in Mechanical Engineering, having graduated from Jawahar Engineering College in 2016. I am always eager to learn new things and explore new challenges, and I believe in giving my 100 percent to the work and to achieve the company's goals.",
  info: [
    {
      fieldname: "Email",
      fieldValue: "divakardj76.dv@gmail.com",
    },
    {
      fieldname: "Linkedin",
      fieldValue: "Divakar Asokan",
    },
    {
      fieldname: "Language",
      fieldValue: "English, Tamil",
    },
  ],
};

//Testimonials

const testimonials = [
  {
    num: "01",
    name: "Sri Sai Products",
    desc: "Good analysis of the market and management of ads. Looking forward to grow bigger together!",
    Location: "Trichy, India",
  },
  {
    num: "02",
    name: "Phoenix Aesthetic Centre",
    desc: "We at Phoenix Aesthetic Centre have had an excellent experience with Reach Technologies! Their expertise in Social Media Management has significantly boosted our online presence, and their personal branding strategies have truly enhanced our clinic's image. Their team is professional, creative, and always responsive to our needs.We highly recommend Reach Technologies for anyone looking to elevate their brand through digital marketing. Thank you for your outstanding work.",
    Location: "Madipakkam, Chennai",
  },
  {
    num: "03",
    name: "Vignesh P",
    desc: "Good customer relationship. And sound knowledge about branding and digital marketing. Will recommend highly",
    Location: "Chennai, India",
  },
  {
    num: "04",
    name: "Siva Kumar",
    desc: "First of all thank you for kind service. It's been 7months since we started work together. Were our phoenix doesn't have any idea about to build a company, we found you and ur approach were really great and tats we are one now. Your ideas and commitment and way of telling and explaining things every month makes amazing. Keep support us like the way now. We will be together forever. Thank you so much",
    Location: "Chennai, India",
  },
  {
    num: "05",
    name: "Tariq Ahmed",
    desc: "Good in digital marketing services, very satisfied, great job",
    Location: "Chennai, India",
  },
];

//Contacts

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "(+91) 63798 75675, (+91) 88255 99232",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "enquiry.reachtechnologies@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    desc: "Meenambalpuram Street, 33/A, Dr. Ambedkar Bridge, Kailasapuram, Mylapore, Chennai, Tamil Nadu 600004",
  },
];

const page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const values = {
    firstName,
    lastName,
    email,
    phone,
    service,
    message,
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the input field values here
    console.log(values);
    sendMail(values);
  };

  return (
    <main>
      <section className="h-full ">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="text-center xl:text-left order-2 xl:order-none xl:mt-10 ">
              <span className="text-xl">
                Digital Marketer and Brand Strategist
              </span>
              <h1 className="text-5xl xl:text-7xl font-semibold leading-[1.1] mt-5 mb-6">
                Hello I{"'"}m <br />
                <span className="text-accent">Divakar Asokan</span>{" "}
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am the founder of Reach Technologies, a start-up that provides
                innovative and impactful solutions for digital marketing and
                consulting.
              </p>
            </div>
            {/* //Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
        <div className=" container mx-auto flex flex-col xl:flex-row items-center mt-10 gap-8">
          <div className="mb-8 xl:mb-0 ">
            <Social
              containerStyles="flex gap-6"
              iconStyles="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent  hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services */}

      <section className=" flex flex-col justify-center mt-10 py-5">
        <h2 className="text-center text-5xl font-bold my-10">Services</h2>
        <div className="container mx-auto">
          <ScrollArea className="h-screen">
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
          </ScrollArea>
        </div>
      </section>

      {/* Resume */}

      <section className="my-10">
        <h2 className="text-center text-5xl font-bold my-16">About</h2>
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
              defaultValue="skills"
              className="flex flex-col xl:flex-row gap-14"
            >
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About Me</TabsTrigger>
              </TabsList>
              <div className=" w-full">
                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-7 text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.desc}
                      </p>
                    </div>
                    <ScrollArea className="h-96">
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
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent
                  value="about"
                  className="w-full text-center xl:text-start"
                >
                  <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-7 text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{about.title}</h3>
                      <ScrollArea className="h-96">
                        <p className=" text-white/60 mx-auto xl:mx-0">
                          {about.desc1}
                        </p>
                        <p className=" text-white/60 mx-auto xl:mx-0">
                          {about.desc2}
                        </p>

                        <ul className="flex-col gap-5">
                          {about.info.map(
                            ({ fieldname, fieldValue }, index) => {
                              return (
                                <li
                                  key={index}
                                  className="flex  xl:justify-start gap-4 "
                                >
                                  <span className="text-white/40">
                                    {fieldname}
                                  </span>
                                  <span className="">{fieldValue}</span>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </ScrollArea>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}

      <section className="mt-16">
        <h2 className="text-center text-5xl font-bold mty-16 ">Testimonials</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className=" flex flex-col justify-center mt-10"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-7">
              <div className="w-full ">
                <Swiper spaceBetween={30} slidesPerView={1} className="flex">
                  {testimonials.map(({ num, name, desc, Location }, index) => {
                    return (
                      <SwiperSlide key={index} className="w-full">
                        <SliderBtn
                          containerStyles="flex gap-2 w-full justify-between xl:w-max xl:justify-none"
                          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                        />
                        <div className="w-full xl:h-4/5 flex flex-col xl:justify-between order-2 xl:order-none mt-10">
                          <div className="flex flex-col gap-7 xl:h-1/2">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                              {num}
                            </div>
                            {/* Project Category */}
                            <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                              {name}
                            </h2>
                            {/* Project Description */}
                            <p className="text-white/60">{desc}</p>
                            {/* Stack */}
                            <p className=" text-accent">{Location}</p>
                            {/* Border */}
                            <div className="border border-white/20" />
                            {/* Buttons */}
                            <div className="flex gap-4"></div>
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
      </section>

      {/* Contacts */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="my-16"
      >
        <h2 className="text-center text-5xl font-bold my-16 ">
          Feel Free To Contact Us
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-7">
            {/* Form */}
            <div className=" order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 bg-[#27272c] p-10 rounded-xl"
              >
                <h3 className="text-4xl text-accent">
                  Let{"'"}s Work Together{" "}
                </h3>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Select */}
                <div>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Service</SelectLabel>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                        <SelectItem value="SEO">SEO</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* TextArea */}
                <Textarea
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                {/* Button */}
                <Button type="submit" size="md" className="max-w-48">
                  Send Message
                </Button>
              </form>
            </div>
            {/* Info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map(({ icon, title, desc }, index) => {
                  return (
                    <li key={index} className="flex items-center gap-4">
                      <div className="size-14 xl:size-20 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div>{icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{title}</p>
                        <h3 className="">{desc}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default page;
