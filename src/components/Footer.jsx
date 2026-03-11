import React, { useEffect } from "react";
import '../App.css';
import { Link } from "react-router-dom";

// Inside your navigation
const Footer = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = "../icons/bxl-html5.svg"; 
    document.head.appendChild(link);
  }, []);

  return (
   
    <footer className="footer">
      
      <div className="social">
        <a href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
      <ul className="list">
          <li>
           <Link to="/faq">FAQ</Link>
          </li>

        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#contact-form">Contact Me</a>
        </li>
      </ul>
      <p style={{textAlign:"center",color:"white",marginTop:"10px"}}>
        Designed & Built By <span>Saqlain Dawood</span> | 2025
      </p>
    </footer>
    
  );
};

export default Footer;
