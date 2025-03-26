// import React from "react";
import "./Hero-Section.scss";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="hero-section">
      <div className="left-section">  
        <div className="content-container">
          <h2>Hi There! 👋🏻</h2>
          <h2>I'M PAVAN KUMAR</h2>
          <h2>FRONTEND DEVELOPER</h2>
          <p>
            Fuelled by aggression, driven by persistence, committed to
            continuous learning, and empowered by unyielding determination
          </p>
          <div className="social-media">
            <a href=""><img src="public/assets/LinkedIn.png" alt="LinkedIn"/></a>
            <a href=""><img src="public/assets/GitHub.png" alt="GitHub" /></a>
            <a href=""><img src="public/assets/X.png" alt="X" /></a>
          </div>
          <button className="download-btn">get my CV</button>
        </div>
      </div>
      <div className="right-section">
        <img src="public/assets/hero-image.webp" />
      </div>
    </section>
  );
}
