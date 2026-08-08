import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
// import { Samples } from "@/sections/Samples";
// import { Contact } from "@/sections/Contact";

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
        <div id="contact"></div>
        {/* <Samples />
        <Contact /> */}
      </main>
    </div>
  )
}

export default App
