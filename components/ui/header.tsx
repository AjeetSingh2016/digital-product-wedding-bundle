"use client";

import { useState, useEffect } from "react";
import Countdown from "../Countdown";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header  className="fixed z-30 w-full">
      <div  className="mx-auto">
        <div style={{backgroundColor: "#AFFF7B"}} className="font-bold mx-auto text-sm md:text-base relative flex h-10 items-center justify-center gap-3 bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          🚀 Hurry Up, Offer ending Soon!
          <Countdown textColor={"red"}/>
        </div>
        
      </div>
    </header>
  );
}
