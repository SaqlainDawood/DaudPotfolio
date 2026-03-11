import React, { useEffect, useState } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaBuilding,
  FaChevronDown,
  FaChevronUp,
  FaAward,
  FaStar,
  FaCode,
  FaDatabase,
  FaReact
} from "react-icons/fa";

const jobsData = [
  {
    title: "MERN Stack Developer",
    company: "Marketing Boster",
    duration: "January 2025 - Present",
    location: "Multan , Pakistan",
    achievements: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Built RESTful APIs with Node.js and Express, serving 10,000+ daily active users",
      "Designed and optimized MongoDB schemas, reducing query time by 40%",
      "Integrated JWT authentication and authorization for secure user access",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT","Docker"],
    description:
      "Leading full-stack development for enterprise-level web applications. Responsible for end-to-end development from database design to frontend implementation, ensuring scalable and maintainable code architecture.",
  },
  {
    title: "Full Stack Developer",
    company: "Marketing Booster",
    duration: "June 2021 - December 2022",
    location: "Multan, Pakistan",
    achievements: [
      "Developed 8+ full-stack web applications using MERN stack and other modern technologies",
      "Created responsive frontend interfaces with React.js and Tailwind CSS",
      "Built robust backend APIs with Node.js and Express, handling 5,000+ concurrent users",
      "Integrated payment gateways including Stripe and PayPal for e-commerce platforms",
      "Implemented real-time features using Socket.io for chat applications",
      "Optimized database queries and implemented caching with Redis"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe API", "Tailwind CSS"],
    description:
      "Worked as a Full Stack Developer on diverse projects including e-commerce platforms, real-time applications, and content management systems. Collaborated with cross-functional teams to deliver high-quality solutions.",
  },
  {
    title: "Frontend Developer",
    company: "ST Learning",
    duration: "August 2019 - May 2021",
    location: "Multan, Pakistan",
    achievements: [
      "Built 15+ responsive websites using React.js and modern JavaScript",
      "Translated Figma designs into pixel-perfect, responsive web interfaces",
      "Improved website performance by 50% through code splitting and lazy loading",
      "Implemented state management using Redux and Context API",
      "Collaborated with backend team to integrate RESTful APIs",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Material-UI", "REST APIs"],
    description:
      "Specialized in creating beautiful, responsive, and user-friendly interfaces. Worked closely with designers and backend developers to deliver seamless web experiences for clients across various industries.",
  },
];

const Experience = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const toggleDetails = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experience" className="experience-section">
      {/* Decorative Background Elements */}
      <div className="exp-bg-decoration">
        <div className="exp-circle exp-circle-1"></div>
        <div className="exp-circle exp-circle-2"></div>
        <div className="exp-circle exp-circle-3"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">
            Professional <span>Experience</span>
          </h2>
          <p className="section-description">
            From Frontend to Full Stack - 3+ years of crafting exceptional web solutions
          </p>
        </div>

        <div className="experience-timeline">
          {jobsData.map((job, index) => (
            <div
              key={index}
              className={`timeline-item ${openIndexes.includes(index) ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline Dot with Icon */}
              <div className={`timeline-dot ${hoveredIndex === index ? 'pulse' : ''}`}>
                {index === 0 ? <FaReact /> : index === 1 ? <FaCode /> : <FaBriefcase />}
              </div>

              {/* Timeline Content */}
              <div className="timeline-content">
                <div className="job-card">
                  {/* Header Section */}
                  <div className="job-header" onClick={() => toggleDetails(index)}>
                    <div className="job-title-section">
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-meta">
                        <span className="company">
                          <FaBuilding className="meta-icon" />
                          {job.company}
                        </span>
                        <span className="duration">
                          <FaCalendarAlt className="meta-icon" />
                          {job.duration}
                        </span>
                      </div>
                    </div>
                    
                    <button className={`toggle-btn ${openIndexes.includes(index) ? 'active' : ''}`}>
                      {openIndexes.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>

                  {/* Location Badge */}
                  <div className="location-badge">
                    <span>{job.location}</span>
                  </div>

                  {/* Expandable Details */}
                  {openIndexes.includes(index) && (
                    <div className="job-details" data-aos="fade" data-aos-duration="500">
                      {/* Description */}
                      <div className="job-description">
                        <p>{job.description}</p>
                      </div>

                      {/* Key Achievements */}
                      <div className="achievements-section">
                        <h4>
                          <FaStar className="section-icon" />
                          Key Achievements
                        </h4>
                        <ul className="achievements-list">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} data-aos="fade-up" data-aos-delay={i * 50}>
                              <span className="achievement-bullet"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div className="tech-section">
                        <h4>
                          <FaAward className="section-icon" />
                          Technologies
                        </h4>
                        <div className="tech-cloud">
                          {job.technologies.map((tech, i) => (
                            <span key={i} className="tech-badge" style={{ animationDelay: `${i * 0.1}s` }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="experience-summary" data-aos="fade-up">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;