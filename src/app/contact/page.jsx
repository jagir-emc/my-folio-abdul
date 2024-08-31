"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from "framer-motion";

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

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-7">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 bg-[#27272c] p-10 rounded-xl">
              <h3 className="text-4xl text-accent">Let{"'"}s Work Together </h3>
              <p className="text-white/60 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                perspiciatis ipsum deserunt accusamus laboriosam.
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeHolder="FirstName" />
                <Input type="lastname" placeHolder="LastName" />
                <Input type="email" placeHolder="Email" />
                <Input type="phone" placeHolder="Phone Number" />
              </div>
              {/* Select */}

              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Ui/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                      <SelectItem value="hst">SEO</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* TextArea */}

              <Textarea placeHolder="Type yor message here" />

              {/* Btn */}
              <Button size="md" className="max-w-48">
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
  );
};

export default Contact;
