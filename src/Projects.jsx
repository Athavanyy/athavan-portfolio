import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="page-title">My Projects</h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on that showcase my skills and passion for development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <Link to={`/projects/${project.id}`} className="project-title-link">
                  <h3 className="project-title">{project.title}</h3>
                </Link>
                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <div className="project-role">
                    <strong>My Role:</strong> {project.role}
                  </div>
                  <div className="project-outcome">
                    <strong>Outcome:</strong> {project.outcome}
                  </div>
                </div>

                <div className="project-technologies">
                  <strong>Technologies Used:</strong>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
