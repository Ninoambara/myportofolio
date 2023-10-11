import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import About from "./view/About";
import Navbar from "./components/Navbar";
import Portofolio from "./view/Portofolio";
// import { router } from "./routers";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/portfolio",
          element: <Portofolio/>
        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
