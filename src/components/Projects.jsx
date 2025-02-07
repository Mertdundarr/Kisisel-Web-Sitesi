import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => setProjects(response.data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="projects-section">
      <h2 className="projects-title">Proje</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={project.liveSiteLink} target="_blank" rel="noopener noreferrer">
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
