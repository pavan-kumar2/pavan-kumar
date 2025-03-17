import React from "react";
import "./herosection.scss";

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
            <a href=""><img src="src\assets\new-2023-twitter-logo-x-icon-design_1017-45418.avif" alt="" /></a>
            <a href=""><img src="src/assets/github.png" alt="" /></a>
            <a href=""><img src="src/assets/LinkedIn_logo_initials.png" alt="" /></a>
          </div>
          <button className="download-btn">get my CV</button>
        </div>
      </div>
      <div className="right-section">
        <img src="src/assets/hero-image.webp" />
      </div>
    </section>
  );
}
