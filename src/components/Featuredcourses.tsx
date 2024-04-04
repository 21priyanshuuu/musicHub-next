"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import musicWriting from "./images/musicWriting.jpg";
import choreography from "./images/choreography.jpg"; 
import musictheory from "./images/musictheory.jpg";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "../ui/tailwindcss-buttons";  
// import { Boxes } from "./ui/background-boxes";
// // import { cn } from "@/lib/utils";
// import {cn} from "@lib/utils";
function Featuredcourses() {
  return (
    <div className="bg-zinc-900	">
      <div>
      <div className="pt-3 mt-20 md:mt-0 text-3xl md:text-3xl font-bold bg-clip-text text-teal-600 bg-gradient-to-b from-neutral-50 to bg-neutral-400">
        <h2 className="text-center">Featured courses</h2>
        </div>

    </div>
<div className="flex justify-between p-5 m-5 h-full">
        <div className="p-5">
<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={musicWriting}
            alt="Songwriting"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Songwriting
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Learn the art and craft of writing songs, from lyrics to melody
            composition.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Enroll now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $99
            </span>
          </button>
        </BackgroundGradient>
    </div>
     <div className="p-5">
     <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
       <Image
         src={musictheory}
         alt="musictheory"
         height="400"
         width="400"
         className="object-contain"
       />
       <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Basic Music Theory
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Understand the fundamental principles of music, including notes,
            scales, and chords.
          </p>
       <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
         <span>Buy now </span>
         <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
           $100
         </span>
       </button>
     </BackgroundGradient>
   </div>
   <div className="p-5">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={choreography}
          alt="choreography"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            choreography
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Expressive movement taught through choreographed sequences.
          </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
    
   </div>
   <div className="flex justify-center pb-5">
   <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          See All
        </div>
      </button>
   </div>
   
   </div>
  )
}

export default Featuredcourses
