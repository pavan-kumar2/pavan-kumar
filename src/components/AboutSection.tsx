import React from "react";
import './aboutsection.scss'

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className="about-section">
        <div className="right-section">
        <img src="src/assets/about-image.webp" />
      </div>
      <div className="left-section">
        <div className="content-container">
          <h2>LET ME INTRODUCE MYSELF</h2>
          <p>
            I'm a passionate **[Your Profession]** with a strong background in
            **[Your Expertise]**. I love building innovative and efficient
            solutions using **[Key Technologies]**. My journey in
            **[Industry/Field]** has been driven by curiosity and the desire to
            create impactful experiences.
          </p>

          <div>
            <h3>What I Bring:</h3>
            <ul>
              <li>🚀 Experience with **[Key Skills]**</li>
              <li>💡 Passion for **[Interest or Field]**</li>
              <li>🎯 Strong problem-solving mindset</li>
              <li>📚 Continuous learner in **[Your Focus Area]**</li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}
