
import "./EducationCertificationSection.scss";
import { useInView } from 'react-intersection-observer';

export default function EducationCertificationSection() {


  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });


  const certifications = [
    {
      title: "Complete Front-End Development",
      provider: {
        name:'Skill Lync', 
        url:'https://skill-lync.com'
      },
      link: "https://skill-lync.com/certification/individual/k758ulf6v4mzcabw", // Replace with actual link
    },
    {
      title: "Angular Web Development for the Real World",
      provider: {
        name:'Skill Lync', 
        url:'https://skill-lync.com'
      },
      link: "https://skill-lync.com/certification/individual/72fe4v8o1qzbs9l0", // Replace with actual link
    },
    {
      title: "React.js",
      provider: {
        name:'Skill Lync', 
        url:'https://skill-lync.com'
      },
      link: "https://skill-lync.com/certification/individual/pfw05dvzmuensjl6", // Replace with actual link
    },
  ];

  return (
    <section className="eduction-certification-section" ref={ref}> 
      <div className={`left-section ${inView ? "left-translate" : ""}`}>
        <img src="education-section.webp" />
      </div>
      <div className={`right-section ${inView ? "right-translate" : ""}`}>
        <div className="content-container">
          <div className="educations">
            <h2>🎓Education</h2>
            <ul>
              <li>
                <div className="education">
                  <span> Bachelor of Engineering(B.E) </span> 
                  in <span>Mechanical engineering</span> at
                  <a href="https://www.sahyadri.edu.in/" target="_blank"> Sahyadri College Of Engineering & Management </a> 
                  passed out in 2021
                </div>
              </li>
              {/* <li>
              <div className="education">
                  <span> Diploma</span>
                  in <span>Mechanical engineering</span> at
                  <a href="https://www.snspt.org/"> Sri Niranjana Swami Polytechnic (SNSP) Bajpe </a> 
                  passed out in 2018
                </div>
              </li>
              <li>
              <div className="education">
                  <span> Class 12th </span>
                  in <span>Commerce</span> at
                  <a href="https://www.google.com/search?q=St.+Josephs+Pre-University+College+Bajpe"> St. Josephs Pre-University College </a>
                  passed out in 2015
                </div>
              </li>
              <li>
              <div className="education">
                  <span> Class 10th </span> at
                  <a href="https://www.google.com/search?q=St.+Joseph%60s+High+School+bajpe"> St. Joseph`s High School </a>
                  passed out in 2013
                </div>
                </li> */}
            </ul>
          </div>

          <div className="certifications">
          <h2>📄Certification</h2>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>
                <div className="certificate">
                  <h3 className="title">{cert.title}</h3>
                  <a className="provider" href={cert.provider.url} target="_blank">{cert.provider.name}</a>
                  <a
                    className="view-btn"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              </li>
            ))}
          </ul>
          </div>

      
        </div>
      </div>

     
    </section>
  );
}
