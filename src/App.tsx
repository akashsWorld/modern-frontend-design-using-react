import React from "react";
import Hero from "./components/Hero";
import "./sass/main.scss";
import About from "./components/About";
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
      </main>
    </div>
  );
};
export default App;
