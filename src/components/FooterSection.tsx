// import React from "react";
import "./FooterSection.scss";

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <footer className="footer-section">
      <p className="copyright">© {new Date().getFullYear()} Pavan Kumar. All rights reserved.</p>
      <div className="social-media">
        <a
          href="https://github.com/pavan-kumar2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github-white-icon.svg" alt="github"  />
        </a>
        <a
          href="https://www.linkedin.com/in/pavan-kumar-513180191"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin-white-icon.svg" alt="linkedIn"  />
        </a>
        <a
          href="https://x.com/Pavankumar_0997"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img src="x-white-icon.svg" alt="X"  />
        </a>
      </div>
    </footer>
  );
}
