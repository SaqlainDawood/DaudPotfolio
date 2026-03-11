import React from "react";
import '../App.css';
import 'boxicons/css/boxicons.min.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
    
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <section id="services">
    <div className="services-content" data-aos="fade-down">
        <h2 className="heading">My <span>Services</span></h2>
        <p>
            I specialize in creating responsive, visually appealing, and user-friendly websites.
            Here’s what I can do for you:
        </p>
        <div className="service-list">

            <div class="service-item" data-aos="fade-up" data-aos-delay="100">
             <i className='bx bx-paint' ></i>
                <h4>Web Design</h4>
                <p>
                    Crafting beautiful and intuitive designs that reflect your brand and engage users.
                </p>
            </div>
            <div className="service-item" data-aos="fade-up" data-aos-delay="200">
                 <i className='bx bx-mobile-alt'></i>
                <h4>Responsive Development</h4>
                <p>
                    Building websites that look great and function seamlessly across all devices.
                </p>
            </div>
            <div className="service-item" data-aos="fade-up" data-aos-delay="300">
                 <i className='bx bx-code-alt'></i>
                <h4>Front-End Development</h4>
                <p>
                    Converting designs into high-quality, pixel-perfect code using HTML, CSS, and JavaScript.
                </p>
            </div>
            <div className="service-item" data-aos="fade-up" data-aos-delay="4 00">
                 <i className='bx bxl-react'></i>  
                <h4>React.js Development</h4>
                <p>
                    Developing dynamic and interactive web applications using React.js.
                </p>
            </div>
        </div>
        <a href="#contact-form" className="btn-1" style={{marginTop:"40px"}}>Contact Me</a>
    </div>
</section>
  );
};

export default Services;
