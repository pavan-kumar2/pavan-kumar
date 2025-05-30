import { useEffect } from "react";
import "./AboutSection.scss";
import { useInView } from "react-intersection-observer";
import { Section } from "../enums/section";
import { AboutSectionProps } from "../types/Section.types";
import images from "../utility/images";

const AboutSection = ({setActiveSection}: AboutSectionProps) => {
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(Section.AboutSection);
    }
  }, [inView, setActiveSection]);

  return (
    <section className="about-section" ref={ref}>
      <div className={`left-section ${inView ? "left-translate" : ""}`}>
        <img src={images.aboutImage} />
      </div>
      <div className={`right-section ${inView ? "right-translate" : ""}`}>
        <div className="content-container">
          <h2>✨ABOUT ME</h2>

          <div className="about-content">
            <p>
              I’m a <span> detail-oriented Frontend Developer</span> with over
              <span> 2 years of experience</span> building responsive, scalable,
              and efficient web applications. I thrive on transforming complex
              requirements into seamless, high-performing user interfaces, with
              a strong focus on performance, code quality, and maintainability.
            </p>

            <p>
              My expertise spans responsive layouts,
              <span> component-driven development</span>, and building
              interactive, real-time features. My journey in web development is
              fueled by curiosity, a deep interest in
              <span> frontend architecture</span>, and a drive to solve problems
              through clean and reliable code. Whether working independently or
              within a team, I value clear structure,
              <span> continuous improvement</span>, and delivering purposeful
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
