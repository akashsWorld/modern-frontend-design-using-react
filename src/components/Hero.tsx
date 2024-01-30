import React from "react";
import "./Hero.css";

import logo_white from "./../assets/logo-white.png";

const Hero = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo_white} alt="logo-white" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <a href="/" className="btn btn-white">Discover our tours</a>
      </div>
    </header>
  );
};

export default Hero;
