import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/projectsData.js";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "mern", label: "MERN Stack" },
    { value: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my expertise in building full-stack applications
          </p>
        </div>

        <div className="project-filters" data-aos="fade-up">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${filter === f.value ? 'active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="view-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="project-info">
                <div className="project-tech-stack">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.fullDescription}</p>
                
                <div className="modal-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech">
                  <h3>Technologies:</h3>
                  <div className="tech-list">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <a href={selectedProject.github} className="btn-github">
                    <FaGithub /> View Code
                  </a>
                  <a href={selectedProject.live} className="btn-live">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;