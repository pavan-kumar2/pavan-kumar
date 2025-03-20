import React from "react";
import "./FooterSection.scss";

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <footer className="footer-section">
      <p className="copyright">© {new Date().getFullYear()} Pavan Kumar. All rights reserved.</p>
      <div className="social-media">
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </footer>
  );
}
