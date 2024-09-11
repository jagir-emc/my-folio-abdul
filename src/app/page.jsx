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

import { about, info, services, skills, testimonials } from "./data";

//Resume

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

import { Button, Form, Input, Select } from "antd";
import { mailUser, mailAdmin } from "../app/fetchEmail/sendmail";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const Home = () => {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    mailUser(values);
    mailAdmin(values);
  };

  const [form] = Form.useForm();

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
              {services.map(({ num, title, desc }, index) => {
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
              <Form
                onFinish={handleSubmit}
                form={form}
                className="flex flex-col gap-6 bg-[#27272c] p-10 rounded-xl"
              >
                <h3 className="text-4xl text-accent">
                  Let{"'"}s Work Together{" "}
                </h3>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormItem
                    className="mt-4 custom-required"
                    name={"firstName"}
                    rules={[
                      {
                        required: true,
                        message: "Please input your First name!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Firstname"
                      className="!w-full !p-3 !px-4 !rounded-lg !text-white border-white/10  !bg-primary placeholder:text-white/60 focus:border-accent hover:border-accent"
                    />
                  </FormItem>
                  <FormItem
                    className="mt-4 custom-required"
                    name={"lastName"}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last name!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="lastName"
                      className="!w-full !p-3 !px-4 !rounded-lg !text-white border-white/10  !bg-primary placeholder:text-white/60 focus:border-accent hover:border-accent"
                    />
                  </FormItem>

                  <FormItem
                    name={"email"}
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="!text-error">
                            Please input your email!
                          </span>
                        ),
                        type: "email",
                      },
                    ]}
                  >
                    <Input
                      placeholder="johndoe@gmail.com"
                      className="!w-full !p-3 !px-4 !rounded-lg !text-white border-white/10 !bg-primary placeholder:text-white/60 focus:border-accent hover:border-accent"
                    />
                  </FormItem>
                  <FormItem
                    className="!font-medium !flex !w-full"
                    name="phone"
                    rules={[
                      { required: true, message: "Please input your Mobile!" },
                      {
                        pattern: /^[0-9]{7,15}$/,
                        message: "Please Enter correct Mobile number!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="8220612345"
                      className="!w-full !p-3 !px-4 !rounded-lg !text-white border-white/10 !bg-primary placeholder:text-white/60 focus:border-accent hover:border-accent"
                    />
                  </FormItem>
                </div>

                {/* Select */}

                <Form.Item
                  className="placeholder:text-white flex flex-col"
                  label={<span className="text-white/60">Select Service</span>}
                  name="service"
                  rules={[
                    {
                      required: true,
                      message: "Please select a service!", // Correct validation message for selection
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Service"
                    className="!w-full !rounded-lg !text-white outline-none border-white/10 bg-primary focus:border-accent hover:border-accent"
                  >
                    <Select.Option value="Social Media Marketing">
                    Social Media Marketing
                    </Select.Option>
                    <Select.Option value="SEO">
                    SEO
                    </Select.Option>
                    <Select.Option value="PPC Advertising">
                    PPC Advertising
                    </Select.Option>
                    <Select.Option value="Meta Ads">Meta Ads</Select.Option>
                    <Select.Option value="Google Ads">Google Ads</Select.Option>
                    <Select.Option value="Web Development">Web Development</Select.Option>
                    <Select.Option value="Others">Others</Select.Option>
                  </Select>
                </Form.Item>

                {/* TextArea */}
                <FormItem
                  name={"message"}
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <TextArea
                    placeholder="Drop Your Message"
                    className="!w-full !p-3 !px-4 !rounded-lg !text-white border-white/10 !bg-primary placeholder:text-white/60 focus:border-accent hover:border-accent"
                  />
                </FormItem>

                {/* Button */}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="max-w-48 bg-accent rounded-xl hover:bg-accent-hover"
                >
                  <a className="">Send Message</a>
                </Button>
              </Form>
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

export default Home;
