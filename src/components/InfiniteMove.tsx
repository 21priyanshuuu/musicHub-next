"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
function InfiniteMove() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  )
}
const testimonials = [
    {
      quote:
        "Music is the divine way to tell beautiful, poetic things to the heart.",
      name: "Pablo Casals",
      title: "Cellist",
    },
    {
      quote:
        "Music expresses that which cannot be said and on which it is impossible to be silent.",
      name: "Victor Hugo",
      title: "Author of Les Misérables",
    },
    {
      quote:
        "Music is the strongest form of magic.",
      name: "Marilyn Manson",
      title: "Musician",
    },
    {
      quote:
        "Music can change the world because it can change people.",
      name: "Bono",
      title: "Lead vocalist of U2",
    },
    {
      quote:
        "Music is the universal language of mankind.",
      name: "Henry Wadsworth Longfellow",
      title: "American Poet",
    },
  ];
  
export default InfiniteMove
