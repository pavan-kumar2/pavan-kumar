import { useEffect } from "react";
import "./HeroSection.scss";
import { useInView } from "react-intersection-observer";
import { Section } from "../enums/section";
import { HeroSectionProps } from "../types/Section.types";
import images from "../utility/images";

const HeroSection = ({setActiveSection}:HeroSectionProps) => {
 
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

    useEffect(() => {
      if (inView) {
        setActiveSection(Section.HeroSection);
      }
    }, [inView, setActiveSection]);

  return (
    <section className="hero-section" ref={ref}>
      <div className={`left-section ${inView ? "left-translate" : ""}`}>
        <div className="content-container">
          <h2>Hi There! 👋🏻</h2>
          <h2>I'M PAVAN KUMAR</h2>
          <h2>FRONTEND DEVELOPER</h2>
          <p>
            Fuelled by aggression, driven by persistence, committed to
            continuous learning, and empowered by unyielding determination.
          </p>
          <a className="download-btn" href={images.resumePDF} download>
            get my CV
          </a>
          <div className="contact-info">
            <div className="mail">
              <span className="label">Email:</span>
              <a href="mailto:pavankkarkera480@gmail.com">
                <img className="icon" src={images.emailIcon} />
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
                  <img src={images.linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/pavan-kumar2" target="_blank">
                  <img src={images.github} alt="GitHub" />
                </a>
                <a href="https://x.com/Pavankumar_0997" target="_blank">
                  <img src={images.xIcon} alt="X" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`right-section ${inView ? "right-translate" : ""}`}>
        <img src={images.heroImage} />
      </div>
    </section>
  );
}

export default HeroSection;
