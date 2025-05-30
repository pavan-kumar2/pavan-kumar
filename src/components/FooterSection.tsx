import images from "../utility/images";
import "./FooterSection.scss";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <p className="copyright">© {new Date().getFullYear()} Pavan Kumar. All rights reserved.</p>
      <div className="social-media">
     
        <a
          href="https://www.linkedin.com/in/pavan-kumar-513180191"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images.linkedinWhiteIcon} alt="linkedIn"  />
        </a>
           <a
          href="https://github.com/pavan-kumar2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images.githubWhiteIcon} alt="github"  />
        </a>
        <a
          href="https://x.com/Pavankumar_0997"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img src={images.xWhiteIcon} alt="X"  />
        </a>
      </div>
    </footer>
  );
}
