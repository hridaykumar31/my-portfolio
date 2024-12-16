import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects"; // Add components for different sections
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="app">
      <div className="noise"></div> {/* Optional background effect */}
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
