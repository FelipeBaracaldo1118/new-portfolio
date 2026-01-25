import React from 'react';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';

import {
  SiReact,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiAmazonwebservices,
  SiCloudflare,
  SiWebmin,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Carousel data
const carouselSkills = [
  { name: "React.js", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "PHP", icon: SiPhp },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "CloudFlare", icon: SiCloudflare },
  { name: "Webmin", icon: SiWebmin },
  { name: "Java", icon: FaJava }
];

// Skills info (debería venir de data/skills si tienes nivel, experiencia, etc.)
import { skills } from '../../data/skills';

export default function Skills() {
  const categories = {
    "Frontend": ["React.js", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"],
    "Backend y APIs": ["PHP", "Python", "Java", "Node.js", "Express.js"],
    "Herramientas y otros": [
      "MongoDB",
      "AWS (Certification in progress)",
      "Cloudflare",
      "Git & GitHub",
    ],
  };

  const softSkills = [
    "🗣 Comunicación",
    "🤝 Trabajo en equipo",
    "⏱ Gestión del tiempo",
    "🧠 Resolución de problemas"
  ];

  const getProficiency = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 60,
      Beginner: 40,
    };
    return levels[level] || 50;
  };

  const getColorClass = (level) => {
    const colorMap = {
      Expert: "badge--expert",
      Advanced: "badge--advanced",
      Intermediate: "badge--intermediate",
      Beginner: "badge--beginner",
    };
    return colorMap[level] || "";
  };

  return (
    <section className="techstack-section" id="tech_stack_levels">
      <div className="techstack__header">
        <FadeIn delay={100}>
          <div className="techstack__intro">
            <div className="techstack__badge">
              <Icons.Sparkles size={18} />
              <span>Mi experiencia técnica</span>
            </div>
            <h2>Stack tecnológico y habilidades blandas</h2>
            <p>
              Una visualización de mis habilidades técnicas principales y mis habilidades blandas más importantes.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* ✅ Carousel */}
      <div className="about__skills">
        <FadeIn delay={200}>
          <div className="skills-section">
            <div className="skills-carousel">
              <div className="carousel-track">
                {[...carouselSkills, ...carouselSkills].map((skill, index) => (
                  <div key={index} className="skill-card">
                    <skill.icon className="skill-card__icon" />
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ✅ Skill Cards */}
      <div className="techstack__cards">
        {Object.entries(categories).map(([categoryTitle, skillNames], index) => {
          const filteredSkills = skills.filter((s) => skillNames.includes(s.name));

          return (
            <FadeIn key={categoryTitle} delay={index * 150}>
              <div className="techstack__card glass-card">
                <h3 className="techstack__card-title">{categoryTitle}</h3>
                <div className="techstack__skills">
                  {filteredSkills.map((skill) => {
                    const Icon = Icons[skill.icon] || Icons.Circle;
                    const levelWidth = getProficiency(skill.level);

                    return (
                      <div className="techstack__skill" key={skill.id}>
                        <div className="skill__info">
                          <Icon className="skill__icon" size={20} />
                          <div className="skill__meta">
                            <strong>{skill.name}</strong>
                            <small>{skill.experience}</small>
                          </div>
                          <span className={`skill__level ${getColorClass(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="skill__bar">
                          <div
                            className="skill__bar-fill"
                            style={{ width: `${levelWidth}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Soft Skills */}
                  {categoryTitle.includes("Herramientas") && (
                    <div className="softskills">
                      <h4>Habilidades blandas</h4>
                      <div className="softskills__tags">
                        {softSkills.map((skill, idx) => (
                          <span className="softskills__tag" key={idx}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
