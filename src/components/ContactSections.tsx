// import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./ContactSection.scss";
import axios from "axios";

type Props = { setActiveSection: (section: string) => void };

export default function ContactSections({setActiveSection}: Props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);

  const [notification, setNotification] = useState<{
    class?: string;
    status?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotification({ class: "error", status: "Please fill in all fields." });
      return;
    }

    setLoader(true);

    const data: {
      service_id: string;
      template_id: string;
      user_id: string;
      template_params: { name: string; email: string; message: string };
    } = {
      service_id: "service_gw98pac",
      template_id: "template_12ivt5p",
      user_id: "O6e9EFJp2inNw0rN4",
      template_params: { ...formData },
    };

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      if (response.status === 200) {
        setNotification({
          class: "success",
          status: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
        setLoader(false);
      } else {
        setNotification({
          class: "error",
          status: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setNotification({
        class: "error",
        status: "Failed to send message. Please try again!",
      });
    } finally {
      setLoader(false);

      setTimeout(() => {
        setNotification({});
      }, 3000);
    }
  };

  
    useEffect(() => {
      if (inView) {
        setActiveSection("contactSection");
      }
    }, [inView, setActiveSection]);

  return (
    <section className="contact-section"  ref={ref}>
      <div  className={`left-section ${inView ? "left-translate" : ""}`}>
        <div className="content-container">
          <h2>📬Get in Touch</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
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
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="btn-container">
              <button type="submit" className={loader?'disable':""}>{loader? 'loading...': 'Send Message'} </button>

              {notification.status && (
                <p className={`status ${notification.class}`}>
                  {notification.status}
                </p>
              )}
            </div>
          </form>

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
        <img src="contact-image.webp" />
      </div>
    </section>
  );
}
