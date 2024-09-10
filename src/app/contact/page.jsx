"use client";

import { ButtonCn } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";
import sendMail from "../fetchEmail/sendmail.js";

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
          <div className=" order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 bg-[#27272c] p-10 rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let{"'"}s Work Together </h3>

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
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
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

              {/* ButtonCn */}
              <ButtonCn type="submit" size="md" className="max-w-48">
                Send Message
              </ButtonCn>
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
