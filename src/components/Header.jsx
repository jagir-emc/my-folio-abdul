import Link from "next/link";

//Component
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="px-2 py-5 mb-5 xl:px-8 xl:py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Abdul <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DeskNav and Hire Me Btn */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
