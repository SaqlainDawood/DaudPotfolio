import React, { useState, useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlus, FaMinus } from "react-icons/fa"; // ✅ Font Awesome Icons

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const highlights = [
    "We never sell your personal data.",
    "You are in control of your information.",
    "Cookies enhance your experience only with consent.",
    "You can request data deletion anytime.",
    "We use secure methods to protect your information.",
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const policyData = [
    {
      question: "1. Information We Collect",
      answer:
        "We may collect personal details like your name, email address, or browser data. This helps us improve your experience and respond to inquiries.",
    },
    {
      question: "2. How We Use Your Information",
      answer:
        "Your information is used for improving our site, sending updates, and communication. We never sell or misuse your data.",
    },
    {
      question: "3. Cookies",
      answer:
        "Cookies are used only to enhance user experience and never to track you without permission.",
    },
    {
      question: "4. Third-Party Links",
      answer:
        "Sometimes we link to third-party tools or services. We are not responsible for their privacy practices.",
    },
    {
      question: "5. Your Consent",
      answer: "Using our website means you agree to this privacy policy.",
    },
    {
      question: "6. Changes to Our Privacy Policy",
      answer:
        "We may update this page occasionally. Please check back for changes. Last updated: August 2024.",
    },
  ];

  return (
    <div className="privacy-policy">
      <section className="privacy-content" data-aos="fade-down">
        <h2 className="heading">
          Privacy <span>Policy</span>
        </h2>

        <p className="intro-text" data-aos="fade-down" data-aos-delay="150">
          We respect your privacy and are committed to protecting your personal
          data. This Privacy Policy outlines how we handle your data when you
          use our website or services.
        </p>

        {/* Carousel */}
        <div className="privacy-carousel" data-aos="fade-up" data-aos-delay="300">
          <Slider {...carouselSettings}>
            {highlights.map((text , index) => (
              <div className="carousel-item" key={index}>
                <p>{text}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Icon-only Dropdown Sections */}
        {policyData.map((item, index) => (
          <div className="policy-section" key={index} data-aos="fade-up" data-aos-delay={400 + index * 100}>
            <div className="dropdown-header">
              <h3>{item.question}</h3>
              <span className="dropdown-icon" onClick={() => handleToggle(index)}>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {openIndex === index && <p className="answer" data-aos='fade'>{item.answer}</p>}
          </div>
        ))}

        <a
          href="/#contact-form"
          className="exp-btn"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
