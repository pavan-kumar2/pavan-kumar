// import React from "react";
import "./HeroSection.scss";
import { useInView } from "react-intersection-observer";

type Props = {};

export default function HeroSection({}: Props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section className="hero-section" ref={ref}>
      <div className={`left-section ${inView ? "left-translate" : ""}`}>
        <div className="content-container">
          <h2>Hi There! 👋🏻</h2>
          <h2>I'M PAVAN KUMAR</h2>
          <h2>FRONTEND DEVELOPER</h2>
          <p>
            Fuelled by aggression, driven by persistence, committed to
            continuous learning, and empowered by unyielding determination
          </p>
          <a className="download-btn" href="Resume_Coming_Soon.pdf" download>
            get my CV
          </a>
          <div className="contact-info">
            <div className="mail">
              <span className="label">Email:</span>
              <a href="mailto:pavankkarkera480@gmail.com">
                <img className="icon" src="email-icon.svg" />
                pavankkarkera480@gmail.com
              </a>
            </div>

            <div className="social-media-container">
              <span className="label">Connect with me:</span>
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/pavan-kumar-513180191"
                  target="_blank"
                >
                  <img src="LinkedIn.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/pavan-kumar2" target="_blank">
                  <img src="GitHub.png" alt="GitHub" />
                </a>
                <a href="https://x.com/Pavankumar_0997" target="_blank">
                  <img src="X.png" alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`right-section ${inView ? "right-translate" : ""}`}>
        <img src="hero-image.webp" />
      </div>
    </section>
  );
}
