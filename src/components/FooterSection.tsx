import React from "react";

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <footer
      style={{
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <p>© {new Date().getFullYear()} Pavan Kumar. All rights reserved.</p>
      <div style={{ marginTop: "5px" }}>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
