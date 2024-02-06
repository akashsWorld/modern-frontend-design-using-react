import React from "react";
import Hero from "./components/Hero";
import "./sass/main.scss";
import "./icon-font.css";

import About from "./components/About";
import Features from "./components/Features";
import TourSection from "./components/TourSection";
// import GridTest from "./components/GridTest";

const App = () => {
  return (
    <div className="body">
      <header>
        <Hero />
      </header>
      {/* This test helps to learn calc() and float features. */}
      {/* <GridTest/> */}

      <main>
        <About/>
        <Features/>
        <TourSection/>
      </main>
    </div>
  );
};
export default App;
