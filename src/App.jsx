import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import About from "./view/About";
// import { router } from "./routers";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/nino",
      element: <About />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
