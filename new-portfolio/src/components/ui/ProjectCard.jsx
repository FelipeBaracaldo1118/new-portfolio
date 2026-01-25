import React from "react";
import { ExternalLink, Github } from "lucide-react";
import '../ui/ProjectCard.css'

function ProjectCard({ project }) {
  const { title, description, image, technologies, demoUrl, githubUrl, category } = project;

  return (
    <div className="project-card">
      {/* Imagen */}
      <div className="project-card__imageWrapper">
        <img src={image} alt={title} className="project-card__image" />
      </div>

      {/* Links */}
      <div className="project-card__links">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            title="Ver demo"
          >
            <ExternalLink size={18} />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            title="Ver repositorio"
          >
            <Github size={18} />
          </a>
        )}
      </div>

      {/* Categoría */}
      {category && (
        <div className="project-card__category">
          <span>{category}</span>
        </div>
      )}

      {/* Contenido */}
      <div className="project-card__content">
        <div className="project-card__text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        {/* Tecnologías */}
        <div className="project-card__tech">
          {technologies?.map((tech, index) => (
            <span key={index} className="project-card__techItem">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
