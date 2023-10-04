import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
        <div className="flex items-center">
          <div className="w-1/4 pr-8">
            <h1 className="text-3xl text-center mb-10">About Me</h1>
            <img
              alt="avatar"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="w-full h-auto rounded-full border-4 border-amber-200 pict"
              src="https://i.ibb.co/JkjMc4t/500x500.png"
            />
          </div>
          <div className=" ml-10 w-4/6 text-lg">
            <p>
              I am someone who is deeply passionate about web development and
              mobile app development, having recently graduated from the
              Hacktiv8 bootcamp as a full-stack Javascript developer with a Teachers Award. I'm
              excited to kick-start my career in technology with a strong
              passion for web development and mobile applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
