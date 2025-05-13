// import React from "react";
import "./AboutSection.scss";

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className="about-section">
      <div className="right-section">
        <img src="about-image.webp" />
      </div>
      <div className="left-section">
        <div className="content-container">
          <h2>LET ME INTRODUCE MYSELF</h2>

          <div>
            <p>
              I’m a driven and creative <span>Frontend Developer</span>who thrives on
              transforming ideas into seamless digital experiences. With a
              strong foundation in building user-centric interfaces, I blend
              aesthetics with functionality to create applications that are both
              beautiful and performant.
            </p>
            <p>
              My expertise lies in <span>responsive design, component-based
              architecture, and interactive UI development,</span> and I love bringing
              concepts to life using technologies.
            </p>
            <p>
              My journey in <span>web development</span>  is fueled by a deep curiosity, a
              love for clean code, and a mission to deliver meaningful
              experiences through every line of code. Whether I’m working
              independently or with a team, I believe in thoughtful design,
              continuous learning, and building with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
