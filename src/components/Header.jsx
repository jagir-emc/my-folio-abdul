import Link from "next/link";

//Component
import { ButtonCn } from "./ui/button";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="px-1 py-5 mb-5 xl:px-8 xl:py-6 sticky top-0 z-10 bg-[#383329] shadow-xl rounded-b-lg">
      <div className="container mx-auto flex gap-8 justify-between items-center ">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-xl md:text-3xl font-bold xl:font-semibold">
            <span className="text-accent font-extrabold">Reach</span>
            Technologies
          </h1>
        </Link>

        {/* DeskNav and Hire Me Btn */}
        <div className="md:flex items-center xl:gap-8 hidden">
          <Link href={"https://calendly.com/reachtechnologies"} target="_blank">
            <ButtonCn className="flex flex-col">
              <span className="text-xs">For_Consulting</span>
              <span className="flex justify-center items-center xl:gap-2 text-sm">
                {" "}
                Book Now <FaPhoneAlt />
              </span>
            </ButtonCn>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
