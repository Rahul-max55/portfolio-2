import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const AnimatedRoutes = () => {
  const [color, setColor] = useState("#fd7e14");
  // #ffc107 (yellow) ;
  const location = useLocation();

  console.log(color);

  return (
    <>
      <Navbar color={color} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home setColor={setColor} color={color} />}
          />
          <Route path="/about" element={<About color={color} />} />
          <Route path="/portfolio" element={<Portfolio color={color} />} />
          <Route path="/contact" element={<Contact color={color} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
