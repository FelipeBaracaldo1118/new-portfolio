import React from "react";

function ExperienceItem({ data, isLast }) {
  const { company, role, period, type, description, impact, technologies } = data;

  return (
    <div className="experience__item">
      <div className="experience__line">
        <div className="experience__dot" />
        {!isLast && <div className="experience__vertical-line" />}
      </div>

      <div className="experience__content">
        <span className="experience__period">{period}</span>
        <h3>{role}</h3>
        <h4>{company} <span>({type})</span></h4>
        
        <ul className="experience__tasks">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {impact && <p className="experience__impact"><strong>Impacto:</strong> {impact}</p>}

        <div className="experience__technologies">
          {technologies.map((tech, i) => (
            <span key={i} className="experience__tech">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
