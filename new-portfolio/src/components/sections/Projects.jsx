import React, { useState, useRef } from "react";
import projects, { categories } from "../../data/projects";
import {
  Briefcase,
  Target,
  Globe,
  Zap,
  Monitor,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";
import "./Projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slide = container.querySelector(".carousel__slide");
      const slideWidth = slide
        ? slide.offsetWidth + 24 /* gap */
        : container.offsetWidth / 3;

      container.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    scrollToIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    scrollToIndex(Math.max(currentIndex - 1, 0));
  };

  const categoryIcons = {
    All: Target,
    Website: Monitor,
    "Web App": Globe,
    "Full Stack": Zap,
  };

  return (
    <section id="projects" className="projects-section">
      {/* Header */}
      <FadeIn delay={0}>
        <div className="projects-header">
          <div className="projects-badge">
            <Briefcase size={18} />
            <span>Mi trabajo</span>
          </div>
          <h2>Proyectos</h2>
          <p>Algunos de mis proyectos y logros</p>
        </div>
      </FadeIn>

      {/* Categories */}
      <FadeIn delay={100}>
        <div className="category-buttons">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Target;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`category-button ${
                  activeCategory === category ? "active" : ""
                }`}
              >
                <Icon size={16} />
                <span>{category}</span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Carousel */}
      <FadeIn delay={200}>
        <div className="carousel">
          <div className="carousel__track" ref={scrollContainerRef}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="carousel__slide">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          {filteredProjects.length > 3 && (
            <div className="carousel__arrows">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="carousel__arrow"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= filteredProjects.length - 3}
                className="carousel__arrow"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight />
              </button>
            </div>
          )}

          {/* Dots */}
          {filteredProjects.length > 3 && (
            <div className="carousel__dots">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`dot ${
                    currentIndex === index ? "active" : ""
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

export default Projects;
