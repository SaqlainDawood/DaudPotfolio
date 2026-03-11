import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, 
  FaDownload, FaFilePdf 
} from "react-icons/fa";
import resumeFile from '../assets/Resume/Resume.pdf';
import profileImg from '../assets/profileImg.jpeg';
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "Full Stack Engineer",
        "UI/UX Enthusiast",
        "Problem Solver"
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <h4 className="hero-greeting"> Hello, I'm</h4>
          <h1 className="hero-name">
            Saqlain <span>Dawood</span>
          </h1>
          <h2 className="hero-title">
            I'm a <span ref={typedRef} className="typed-text"></span>
          </h2>
          <p className="hero-description">
            I build exceptional and scalable web applications with modern 
            technologies. Specialized in MERN stack with 3+ years of experience 
            delivering high-quality solutions.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a 
              href={resumeFile} 
               download="Saqlain_Dawood_Resume.pdf"  
              className="btn btn-download"
            >
              <FaDownload className="btn-icon" />
              <span>Download CV</span>
              <span className="btn-tooltip">PDF Format</span>
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:saqlain@email.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <div className="image-wrapper">
            <img src={profileImg} alt="Saqlain Dawood"
             onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.style.display = 'none'; // Hide broken image
                // Optionally show a fallback
              }} />
            <div className="experience-badge">
              <span className="years">3+</span>
              <span className="text">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#about">
          <span>Scroll Down</span>
          <div className="scroll-indicator"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;