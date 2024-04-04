'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/moving-border";




export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center" >
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}



function Navbar({ className }: { className?: string })
 {
    const [active, setActive] = useState<string | null>(null);
    
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
       <MenuItem setActive={setActive} active={active} item="Courses">
       <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/course">Song writing</HoveredLink>
            <HoveredLink href="/">Choreography</HoveredLink>
            <HoveredLink href="/">Basic Music Theory</HoveredLink>
            <HoveredLink href="/">Music Production</HoveredLink>

            </div>
       </MenuItem>
       <MenuItem setActive={setActive} active={active} item="Contact us">
       </MenuItem>
      </Menu>
      
     
    </div>
  )
}
const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Navbar
