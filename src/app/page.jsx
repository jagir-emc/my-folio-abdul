import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const page = () => {
  return (
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
            <a href="Divabro.png" download>
              <Button>Download</Button>
            </a>
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
  );
};

export default page;
