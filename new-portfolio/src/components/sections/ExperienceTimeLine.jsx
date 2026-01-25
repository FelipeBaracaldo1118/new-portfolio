import React from "react";
import { experience } from "../../data/experience";
import ExperienceItem from "./ExperienceItem";
import "./Experience.css";
import FadeIn from "../animations/FadeIn";

function ExperienceTimeline() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__title">Experiencia Laboral</h2>
      <div className="experience__timeline">
        {experience.map((item, index) => (
          <ExperienceItem key={item.id} data={item} isLast={index === experience.length - 1} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
