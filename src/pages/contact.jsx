import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      <div className="contactTitle">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="contactContainer">
        <div className="contactForm">
          {submitted && (
            <div className="successMessage">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submitBtn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contactInfo">
          <div className="infoItem">
            <h3>📍 Address</h3>
            <p>123 Tech Street, Mash Valley, CA 94025</p>
          </div>
          <div className="infoItem">
            <h3>📞 Phone</h3>
            <p>(055) 258-4567</p>
          </div>
          <div className="infoItem">
            <h3>✉️ Email</h3>
            <p>support@motech.com</p>
          </div>
          <div className="infoItem">
            <h3>⏰ Hours</h3>
            <p>Sun - Thu: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Fri: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
