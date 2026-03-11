import React, { useState, useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // icon for toggle

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openIndex, setOpenIndex] = useState(null); // To track opened question

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "I specialize in front-end development, including web design, responsive development, and front-end technologies such as HTML, CSS, JavaScript, and React.js. I can help you create a stunning website or web application tailored to your needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "The timeline for a project depends on its complexity and scope. Typically, a basic website can take 2-4 weeks, while more complex applications might take several months. I will provide an estimated timeline after discussing your project requirements."
    },
    {
      question: "What is your process for working on a project?",
      answer: "My process includes understanding your needs, creating a plan, designing mockups, developing the website, and finally testing and launching. I maintain clear communication throughout each stage to ensure the project aligns with your vision."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, I provide post-launch support to address any issues or make updates as needed. This includes bug fixes, minor changes, and general maintenance to ensure your site runs smoothly."
    },
    {
      question: "What are your rates?",
      answer: "My rates vary depending on the project’s complexity and requirements. I offer customized quotes based on your specific needs. Please contact me to discuss your project and get a detailed estimate."
    },
    {
      question: "How can I get started with a project?",
      answer: "To get started, simply reach out to me through the contact form on my portfolio or email me directly. I’ll schedule a consultation to discuss your project in detail and provide you with the next steps."
    }
  ];

  return (
    <div className="faq">
      <section className="faq-content" data-aos="fade-down" data-aos-delay="200">
        <h2 className="heading"> Frequently<span> Asked Questions</span></h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
         
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span className="faq-icon">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {openIndex === index && (
              <p className="faq-answer" data-aos='fade'>{item.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
