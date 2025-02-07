import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/Portfolio.css";
import axios from "axios";

const Portfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        console.log("Fetched Data:", response.data);
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    name,
    titleLine1,
    titleLine2,
    description,
    buttons = {},
    image,
    skillsTitle,
    skills = []
  } = data;

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-text">
          <h1 className="name">
            <span className="name-line"></span>
            <span className="name-text">{name || "Default Name"}</span>
          </h1>
          <h2 className="title">
            {titleLine1 || "Default Title Line 1"} <br /> {titleLine2 || "Default Title Line 2"}
          </h2>
          <p className="description">{description || "Default description."}</p>
          <div className="buttons">
            {buttons.hireMe && (
              <button className="hire-me-button full-purple">{buttons.hireMe}</button>
            )}
            {buttons.githubLink && (
              <a
                href={buttons.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button github-button"
              >
                <FaGithub className="icon" /> {buttons.github || "GitHub"}
              </a>
            )}
            {buttons.linkedinLink && (
              <a
                href={buttons.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button linkedin-button"
              >
                <FaLinkedin className="icon" /> {buttons.linkedin || "LinkedIn"}
              </a>
            )}
          </div>
        </div>
        <div className="header-image">
          <img src={image || "https://via.placeholder.com/150"} alt="Profile" />
        </div>
      </header>

      {/* Skills Section */}
      <section className="skills-section">
        <h3 className="skills-title">{skillsTitle || "Skills"}</h3>
        <div className="skills-grid">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h4 className="skill-name">{skill.name || "Default Skill"}</h4>
                <p className="skill-description">{skill.description || "No description available."}</p>
              </div>
            ))
          ) : (
            <p>No skills available.</p>
          )}
        </div>
         {/* Footer Line */}
      <footer className="footer-line">
        <hr />
      </footer>
      </section>

    </div>
  );
};

export default Portfolio;
