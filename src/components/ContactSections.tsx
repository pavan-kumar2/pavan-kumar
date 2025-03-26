// import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

import "./ContactSection.scss";

type Props = {};

export default function ContactSections({}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      const response = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS user/public key
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <div className="left-section">
        <div className="content-container">
          <h2>Feel Free to Contact Me</h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-field">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="input-field">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="btn-container">
              <button type="submit">Send Message</button>
              {/* Status Message */}
              {status && <p className="status">{status}</p>}
            </div>
          </form>

          <div className="contact-info">
            <div className="mail">
              <span className="label">Email:</span>
              <a href="mailto:pavankkarkera480@gmail.com">
                <img className="icon" src="src/assets/email-icon.svg" />
                pavankkarkera480@gmail.com
              </a>
            </div>

            <div className="social-media-container">
              <span className="label">Connect with me:</span>
              <div className="social-media">
                <a href="">
                  <img src="src/assets/LinkedIn.png" alt="LinkedIn" />
                </a>
                <a href="">
                  <img src="src/assets/GitHub.png" alt="GitHub" />
                </a>
                <a href="">
                  <img src="src/assets/X.png" alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="right-section">
        <img src="src\assets\contact-image.webp" />
      </div>
    </section>
  );
}
