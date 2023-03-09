import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Css from "../pages/Css";
import Html from "../pages/Html";
import Logo from "../pages/Logo";
import Home from "../pages/Home";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/css" element={<Css />} />
        <Route path="/html" element={<Html />} />
        <Route path="/design" element={<Logo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
