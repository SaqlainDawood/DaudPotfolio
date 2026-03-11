import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaPaperPlane, FaCheckCircle,
  FaGithub, FaLinkedin, FaTwitter 
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setSent(true);
      setSending(false);
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: ""
      });
      setTimeout(() => setSent(false), 5000);
    })
    .catch(() => {
      alert("Failed to send message. Please try again.");
      setSending(false);
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+92 319711422",
      link: "tel:+92319711422",
      detail: "Available 9AM - 6PM"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "saqlaindawood123@gmail.com",
      link: "mailto:saqlaindawood123@gmail.com",
      detail: "Reply within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Pakistan",
      link: "#",
      detail: "Available worldwide"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/SaqlainDawood", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/saqlain-dawood-154757278/", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/saqlain", label: "Twitter" }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="highlight">Work Together</span>
          </h2>
          <p className="section-description">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-side" data-aos="fade-right">
            <div className="info-card">
              <h3 className="info-title">Why Work With Me?</h3>
              <p className="info-description">
                I'm passionate about creating exceptional digital experiences:
              </p>

              <ul className="benefits-list">
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>2+ years of full-stack experience</span>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>10+ successful projects delivered</span>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>MERN stack expertise</span>
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <span>24/7 support available</span>
                </li>
              </ul>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.link} className="contact-item">
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon">{item.icon}</div>
                    </div>
                    <div className="contact-text">
                      <h4>{item.title}</h4>
                      <p className="contact-value">{item.value}</p>
                      <span className="contact-detail">{item.detail}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h4>Connect With Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="availability-badge">
                <span className="status-dot"></span>
                <span className="status-text">Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="contact-form-side" data-aos="fade-left">
            <div className="form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <p className="form-subtitle">
                Fill out the form and I'll get back to you within 24 hours.
              </p>

              <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="user_name">Your Name *</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      placeholder="Saqlain Dawood"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="user_email">Email Address *</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      placeholder="saqlain@example.com"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <FaCheckCircle className="sent-icon" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="send-icon" />
                      Send Message
                    </>
                  )}
                </button>

                {sent && (
                  <div className="success-message">
                    <FaCheckCircle />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;