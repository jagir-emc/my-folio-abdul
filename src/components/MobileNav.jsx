"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "works",
    path: "/works",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathnames = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-10 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Abdul <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {Links.map((link,index)=>{
                return <Link key={index} href={link.path} className={`${link.path === pathnames && "text-accent border-b-2 transition-all"}text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
