"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import LiveMusic from "./images/linear.jpg";
import trackVersoning from "./images/TrackVersoning.jpg";
import discover from "./images/discover.jpg";
import musicCollab from "./images/musicCollab.jpeg";

const content = [
    {
      title: "Music Collaboration",
      description:
        "Work together in real time with your band, producers, and collaborators. Collaborate on tracks, share ideas, and make music seamlessly. With our platform, you can streamline your music production workflow and increase productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={musicCollab}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live performance demo"
        />
      </div>
      ),
    },
    {
      title: "Live Performance Feedback",
      description:
        "Get instant feedback on your performances as they happen. With our platform, you can receive real-time feedback from your audience and fans. Say goodbye to guesswork and embrace the power of immediate responses.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={LiveMusic}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="live performance demo"
          />
        </div>
      ),
    },
    {
      title: "Track Versioning",
      description:
        "Experience real-time updates and never stress about version control for your tracks again. Our platform ensures that you're always working on the most recent version of your music, eliminating the need for constant manual updates. Stay in sync with your band, producers, and collaborators effortlessly.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={`https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live performance demo"
        />
      </div>
      ),
    },
    {
      title: "Discover New Sounds",
      description:
        "Explore new genres, sounds, and inspirations to keep your music fresh and exciting. With our platform, you can discover new artists, tracks, and trends to stay ahead of the curve. Never run out of creative fuel with our vast library of musical content.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={discover}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live performance demo"
        />
      </div>
      ),
    },
  ];
  
function WhyChooseUs() {
  return (
    <div className="p-10 dark:bg-black dark:bg-grid-white/[0.1]">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
