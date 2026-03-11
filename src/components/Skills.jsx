import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, 
  FaGitAlt, FaAws, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiTypescript, 
  SiJavascript, SiHtml5, SiTailwindcss,
  SiPostman,  
} from "react-icons/si";
// import { DiJava, DiC, DiCplusplus } from 'react-icons/di';
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 95 },
        { name: "JavaScript", icon: <SiJavascript />, level: 90 },
        { name: "HTML5", icon: <SiHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 90 },
        { name: "Express.js", icon: <SiExpress />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 75 },
        // { name: "Java", icon: <DiJava />, level: 70 },
        // { name: "C", icon: <DiC />, level: 70 },
        // { name: "C++", icon: <DiCplusplus />, level: 70 },
      ]
    },
    {
      name: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 90 },
        { name: "SQL", icon: <FaDatabase />, level: 85 },
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "Postman", icon: <SiPostman />, level: 85 },
        { name: "AWS", icon: <FaAws />, level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-category" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;