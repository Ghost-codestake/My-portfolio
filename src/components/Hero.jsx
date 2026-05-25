import React from "react";
import Typewriter from "./Typewriter";
import MyPicture from "../assets/me.jpeg";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Heritage Akinbowale - Resume.pdf";
    link.download = "Heritage_Akinbowale_Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <Typewriter
                texts={[
                  "Hi, I'm Heritage Akinbowale",
                  "Front-End Developer",
                  "React Enthusiast",
                  "Open Source Lover",
                ]}
                speed={100}
                delay={2000}
              />
            </h1>
            <p className="hero-tagline">
              Front-End Developer | I build responsive and interactive websites.
            </p>
            <button className="cta-button" onClick={handleDownload}>
             Download  CV
            </button>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <img src={MyPicture} alt="Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
