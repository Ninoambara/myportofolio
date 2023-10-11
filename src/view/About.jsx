import React, { useEffect, useState } from "react";
import { application, techStack } from "../data/skills";
import { delay, motion, useAnimate, usePresence } from "framer-motion";

export default function About() {
  const [activeBtn, setActiveBtn] = useState(" actived");
  const [activeBtn2, setActiveBtn2] = useState("");
  const [selectedData, setSelectedData] = useState(techStack);
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  const handleButton = (type) => {
    if (type === "techStack") {
      setActiveBtn(" actived");
      setActiveBtn2("");
      setSelectedData(techStack);
    } else if (type === "application") {
      setActiveBtn("");
      setActiveBtn2(" actived");
      setSelectedData(application);
    }
  };

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
      setSelectedData(techStack);
    }
  }, []);

  return (
    <>
      <div
        ref={scope}
        className="bg-[#1e1e1f] mx-20 px-5 py-20 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mb-5"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/6 pr-8">
            <h1 className="text-3xl text-center mb-10">About Me</h1>
            <img
              alt="avatar"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="w-full h-auto rounded-full"
              src="https://i.ibb.co/JkjMc4t/500x500.png"
            />
          </div>
          <div className="ml-0 md:ml-10 w-full md:w-4/6 text-lg">
            <p style={{ fontSize: 18 }}>
              I am someone who is deeply passionate about web development and
              mobile app development, having recently graduated from the
              Hacktiv8 bootcamp as a full-stack Javascript developer with a
              Teachers Award. I'm excited to kick-start my career in technology
              with a strong passion for web development and mobile applications.
            </p>
          </div>
        </div>
      </div>

      <div className=" m-5 text-white p-20">
        <h1 className="text-xl mb-5">My Skills</h1>
        <button
          onClick={() => handleButton("techStack")}
          className={` text-gray-400 px-4 mr-3 mb-5 py-2 rounded-lg text-sm btn${activeBtn}`}
        >
          Tech Stack
        </button>
        <button
          onClick={() => handleButton("application")}
          className={`text-gray-400 px-4 mr-3 py-2 rounded-lg text-sm btn${activeBtn2}`}
        >
          Tools
        </button>
        <div>
          <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            {selectedData.map((item, index) => (
              <div key={index}>
                <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                  <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                    <img
                      alt="HTML"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                      src={item.imageUrl}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex items-center text-sm md:text-base lg:text-md">
                    <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                      {item.name}
                    </div>
                    <div
                      className="status-tech opacity-0 absolute mt-5 text-[5px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                      style={{ fontSize: 14 }}
                    >
                      {item.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
