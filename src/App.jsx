import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
// import { About } from "@/sections/About";
// import { Projects } from "@/sections/Projects";
// import { Samples } from "@/sections/Samples";
// import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero />
        {/* <About />
        <Projects />
        <Samples />
        <Contact /> */}
      </main>
    </div>
  )
}

export default App
