import React from "react";
import FadeIn from "../animations/FadeIn";

function ExperienceItem({ data, isLast, delay }) {
  return (
    <FadeIn delay={200}>
    <div
      className="experience__item fade-in-up"
      style={{ "--delay": `${delay}s` }}
    >
      <div className="experience__line">
        <div className="experience__dot" />
        {!isLast && <div className="experience__vertical-line" />}
      </div>

      <div className="experience__content">
        <p className="experience__period">{data.period}</p>
        <h3>{data.role}</h3>
        <h4>
          {data.company} <span>({data.type})</span>
        </h4>

        <ul className="experience__tasks">
          {data.description.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>

        {data.impact && (
          <p className="experience__impact">
            <strong>Impacto:</strong> {data.impact}
          </p>
        )}

        <div className="experience__technologies">
          {data.technologies.map((tech, i) => (
            <span className="experience__tech" key={i}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </FadeIn>
  );
}

export default ExperienceItem;
