import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Samples } from "@/sections/Samples";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <div id="about"></div>
        <Hero />
        <div id="projects"></div>
        <Projects />
        <div id="samples"></div>
        <Samples />
        <div id="skills"></div>
        <Skills />
        <div id="contact"></div>
        <Contact /> 
      </main>
      <Footer />
    </div>
  )
}

export default App
