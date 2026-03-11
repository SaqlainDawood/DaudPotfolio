// src/components/Testimonials.jsx
import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      text: "Saqlain Dawood exceeded our expectations with his attention to detail and dedication.",
      name: "Hassan Abbas",
      role: "Graphic Designer",
    },
    {
      text: "Working with Saqlain was a breeze. He delivered on time and made our website functional.",
      name: "Tajeel Ahmari",
      role: "Founder, StartupXYZ",
    },
    {
      text: "His skill in React.js is impressive. We couldn't be happier with the result.",
      name: "Ali Abbas",
      role: "CTO, Tech Innovators",
    },
    {
      text: "Highly recommended for frontend projects. Very professional.",
      name: "Shahzaib Abbas",
      role: "CTO, Tech Innovators",
    },
  ];

  return (
    <section id="testimonials">
      <div className="testimonial-content" data-aos="fade-down">
        <h2 className="heading">
          Client <span>Testimonials</span>
        </h2>

        <div className="testimonial-slider-wrapper">
          {/* Temporary static display without slider */}
          {testimonials.map((item, index) => (
            <div className="testimonial-item" key={index} style={{marginBottom: '20px'}}>
              <p>{item.text}</p>
              <h4>- {item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;