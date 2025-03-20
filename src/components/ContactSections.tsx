import React from "react";
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
            <div>
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


            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          {/* Status Message */}
          {status && <p>{status}</p>}

          <p>
            Email:
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>Connect with me:</p>
          <ul>
            <li>
              <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/yourprofile">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/yourhandle">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="right-section">
        <img src="src\assets\contact-image.webp" />
      </div>
    </section>
  );


}
