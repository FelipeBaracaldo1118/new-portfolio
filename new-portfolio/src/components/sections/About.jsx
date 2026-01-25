import { Download, Code2, Sparkles } from "lucide-react";
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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Personal_Info } from "../utils/constants";
import FadeIn from "../animations/FadeIn";
import { ChevronDown, Star } from 'lucide-react';
import { scrollToSection } from '../../hooks/useScrollSpy';

export default function About() {
  

  return (
    <>
    <section id="about" className="about">
      <div className="about__container">
        {/* Left Grid Cards */}
        <div className="about__left">
          <FadeIn delay={200}>
            <div className="about__grid">
              <div className="about__card about__card--featured">
                <div className="about__icon">
                  <Code2 />
                </div>
                <div className="about__card-content">
                  <h3 className="about__card-title">Expertise</h3>
                  <p className="about__card-desc">
                    Construcción de aplicaciones modernas, escalables y con buenas prácticas.
                  </p>
                </div>
              </div>

              <div className="about__card">
                <div className="about__icon">
                  <Sparkles />
                </div>
                <div className="about__card-content">
                  <h3 className="about__card-title">Código limpio</h3>
                  <p className="about__card-desc">
                    Código estructurado, mantenible y bien documentado para facilitar mejoras.
                  </p>
                </div>
              </div>

              <div className="about__card">
                <div className="about__icon">
                  <Download />
                </div>
                <div className="about__card-content">
                  <h3 className="about__card-title">Performance</h3>
                  <p className="about__card-desc">
                    Optimización de velocidad y eficiencia en cada proyecto.
                  </p>
                </div>
              </div>

              <div className="about__stats">
                <div className="about__stat">
                  <div className="about__stat-value">100%</div>
                  <div className="about__stat-label">Satisfacción del cliente</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-value">24/7</div>
                  <div className="about__stat-label">Soporte técnico</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-value">∞</div>
                  <div className="about__stat-label">Constante aprendizaje</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column */}
        <div className="about__right">
          <FadeIn delay={60}>
            <div className="about__badge">
              <Code2 />
              <span>{Personal_Info.title}</span>
              <Sparkles />
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="about__title">Transformo ideas en experiencias funcionales y memorables</h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="about__bio">
              {Personal_Info.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <button
              className="about__cv-button"
              onClick={() => window.open(Personal_Info.resume, "_blank")}
            >
              <Download /> Descargar CV
            </button>
          </FadeIn>
        </div>
        <div>
       <button 
            className="hero__scrollButton" 
            onClick={() => scrollToSection('tech_stack_levels')}
            aria-label="Deslizar hacia abajo"
            >
            <ChevronDown className="hero__scrollIcon" />
     </button>
       </div>
       
      </div>

    
     
     
    </section>
    
    </>
  );
}
