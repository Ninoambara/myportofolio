import React, { useEffect, useState } from "react";
import "../App.css";
import { delay, motion, useAnimate, usePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          scope.current,
          { opacity: [0, 1] },
          { duration: 0.6 },
          { delay: 0.1 }
        );
      };
      enterAnimation();
    }
  }, []);
  const txt = "Full-stack Engineer";
  return (
    <div
      ref={scope}
      className="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]"
    >
      <div className="space-y-2 text-center md:text-left px-10">
        <p className="text-amber-200">Hello World, I'm</p>
        <h1 className="text-xl font-bold md:text-5xl text-white fadein-up">
          Nino Ambara
        </h1>
        <div className="py-2">
          <h1 className="typewrite text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up overflow-hidden">
            <TypeAnimation
              className="wrap"
              sequence={[
                "Full-stack Developer",
                1000,
                "Tech Enthusiast",
                1000,
                "Javascript Enthusiast",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
        </div>
        <p className="text-white pr-4 fade-in-from-left">
          Welcome to My personal website. <span className="wave">👋🏼</span>
        </p>
        <br />
        {/* Tombol Download Resume */}
        <a
          href="https://drive.google.com/file/d/1nvvTohcNnDJnm3cUhpeUkUCs7bGjBR7L/view?usp=sharing"
          className="fadein-bot fade-500 flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 md:mx-0 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2 w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
              clipRule="evenodd"
            ></path>
            <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"></path>
          </svg>
          Download Resume
        </a>
      </div>
      <div className="flex justify-center md:justify-start fadein-right">
        <img
          alt="avatar"
          fetchPriority="high"
          width="300"
          height="300"
          decoding="async"
          data-nimg="1"
          className="w-10/12 md:h-auto rounded-full border-4 border-amber-200 pict"
          src="https://i.ibb.co/JkjMc4t/500x500.png"
        />
      </div>
    </div>
  );
}
