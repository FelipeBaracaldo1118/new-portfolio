import React from "react";
import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data/experience";
import './Experience.css';

function ExperienceTimeline() {
  return (
    <section className="experience">
      <h2 className="experience__title">Experiencia Laboral</h2>
      <div className="experience__timeline">
        {experience.map((item, index) => (
          <ExperienceItem
            key={item.id}
            data={item}
            isLast={index === experience.length - 1}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
