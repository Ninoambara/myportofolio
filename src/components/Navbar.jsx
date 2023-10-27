import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col relative">
      <div className="p-5 md:px-40 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
        <div className="container md:mx-auto flex flex-wrap items-center justify-between">
          {isMobile ? (
            <div className="flex gap-2">
              <span className="self-center md:text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">
                NinoAmbara
              </span>
              <a href="https://github.com/Ninoambara">
                <img
                  className="md:w-9 w-7 rounded-full"
                  src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
                  alt="github"
                />
              </a>
            </div>
          ) : (
            <>
              <div className="flex gap-2">
                <span className="self-center md:text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">
                  NinoAmbara
                </span>
              </div>
              <div className="flex md:order-2 fadein-bot">
                {" "}
                <a href="https://github.com/Ninoambara">
                  <img
                    className="md:w-9 w-7 rounded-full"
                    src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
                    alt="github"
                  />
                </a>
              </div>
            </>
          )}

          <div className="md:hidden fadein-bot" onClick={toggleMenu}>
            <button className="w-10 h-10 text-white" aria-label="Open Menu">
              ☰
            </button>
          </div>
          <div
            className={`md:flex justify-between items-center w-full md:w-auto md:order-1 ${
              menuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-3"
          >
            <ul className="flex-col gap-4 text-center md:gap-0 md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
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
                  className={`link border-gray-100 md:hover-bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 ${
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
                  className={`text-[#ffdb70] border-gray-100 text-sm md:hover-bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0`}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:mt-20 p-5">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
