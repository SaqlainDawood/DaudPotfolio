import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from '../assets/profileImg.jpeg';
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-img" data-aos="fade-right">
            <div className="img-wrapper">
              <img src={profileImg} alt="Saqlain Dawood" />
            </div>
          </div>
          
          <div className="about-text" data-aos="fade-left">
            <h2>
              About <span>Me</span>
            </h2>
            <h3>
              MERN Stack <span>Developer</span>
            </h3>
            <p>
              Hello! I'm Saqlain Dawood, a passionate Full Stack Developer with expertise in 
              the MERN stack. I specialize in building robust, scalable web applications 
              that deliver exceptional user experiences. With a strong foundation in both 
              frontend and backend development, I transform complex requirements into 
              elegant, efficient solutions.
            </p>
            <p>
              My journey in web development started 3+ years ago, and since then, I've 
              worked on diverse projects including University Management Systems, 
              E-commerce platforms, and enterprise applications. I'm constantly learning 
              and adapting to new technologies to stay at the forefront of web development.
            </p>
            <a href="#contact" className="exp-btn">Let's Work Together</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;