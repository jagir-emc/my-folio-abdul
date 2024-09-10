import Link from "next/link";

//Component
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import {FaPhoneAlt} from "react-icons/fa"

const Header = () => {
  return (
    <header className="px-2 py-5 mb-5 xl:px-8 xl:py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
          <span className="text-accent font-extrabold">Reach</span>Technologies 
          </h1>
        </Link>

        {/* DeskNav and Hire Me Btn */}
        <div className="hidden xl:flex items-center gap-8">
          {/* <Nav /> */}
          <Link href={"https://calendly.com/reachtechnologies"} target="_blank">
            <Button className="flex flex-col">
              <span className="text-xs">For Consulting</span>
              <span className="flex justify-center items-center gap-2 text-[]"> Book Now <FaPhoneAlt/></span>
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
