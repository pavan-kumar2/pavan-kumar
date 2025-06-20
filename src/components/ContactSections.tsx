// import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./ContactSection.scss";
import axios from "axios";
import { Section } from "../enums/section";
import { ContactSectionsProps, MailParams, NotificationParams, TemplateParams } from "../types/Section.types";
import images from "../utility/images";

const {VITE_SERVICE_ID:SERVICE_ID, VITE_TEMPLATE_ID:TEMPLATE_ID, VITE_USER_ID:USER_ID} = import.meta.env;

export default function ContactSections({setActiveSection}: ContactSectionsProps) {

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });


  const [formData, setFormData] = useState<TemplateParams>({
    name: "",
    email: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);

  const [notification, setNotification] = useState<NotificationParams>({});
  
    useEffect(() => {
      if (inView) {
        setActiveSection(Section.ContactSection);
      }
    }, [inView, setActiveSection]);

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

    const data: MailParams = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: USER_ID,
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
                <a href="https://x.com/Pavankumar_9_7" target="_blank">
                  <img src={images.xIcon} alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`right-section ${inView ? "right-translate" : ""}`}>
        <img src={images.contactImage} />
      </div>
    </section>
  );
}
