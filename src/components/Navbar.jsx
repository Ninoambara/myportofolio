import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="flex flex-col relative ">
      <div className="p-5 px-40 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex">
            <span className="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">
              NinoAmbara
            </span>
          </div>
          <div className="flex md:order-2 fadein-bot">
            <a href="https://github.com/Ninoambara">
              <img
                className="w-9 rounded-full"
                src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
                alt="github"
              />
            </a>
          </div>
          <div
            className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li className="fadein-bot">
                <Link
                  to="/"
                  className={`link  md:border-0 pl-3 pr-4 py-2 md:p-0 ${
                    location.pathname === "/" ? "active" : "text-gray-700"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="fadein-bot fadein-1">
                <Link
                  to="/about"
                  className={`link border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 ${
                    location.pathname === "/about" ? "active" : "text-gray-700"
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="fadein-bot fadein-2">
                <Link
                  to="/portfolio"
                  className={`link border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 ${
                    location.pathname === "/portfolio"
                      ? "active"
                      : "text-gray-700"
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li className="fadein-bot fadein-3 border border-[#ffdb70] px-1 rounded pict">
                <a
                  href="mailto:ninoambara1@gmail.com" 
                  className={`text-[#ffdb70] border-gray-100 text-sm md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0`}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 p-5">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
