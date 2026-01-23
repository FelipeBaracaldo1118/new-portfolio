import React from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { scrollToSection } from '../../hooks/useScrollSpy';
import { Personal_Info, Stats } from '../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradient';
import {
  SiReact,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript
} from 'react-icons/si';

function Hero() {
  return (
    <section className="hero" id="hero">
        <RadialGradientBackground variant="hero"/>
      <div className="hero__container">

        {/* LEFT COLUMN */}
        <div className="hero__left">
          <FadeIn delay={0}>
            <div className="hero__badge">
              <Star className="hero__badge-icon" size={16} />
              <span>{Personal_Info.title} | En {Personal_Info.location}</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="hero__title">
              React.js Portafolio Desarrollador
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="hero__description">
              Construyendo aplicaciones modernas, escalables y con mejoras en UX
              usando React y JavaScript. Transformando ideas en productos reales.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <button
              className="hero__cta"
              onClick={() => scrollToSection("contact")}
              type="button"
            >
              ¡Contáctame!
            </button>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="hero__stats">
              {Stats.map((stat, index) => (
                <div key={index} className="hero__stat">
                  <div className="hero__stat-value">{stat.value}</div>
                  <p className="hero__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero__right">
          <FadeIn delay={200}>
            <div className="hero__visual">

              {/* Imagen */}
              <div className="hero__image-container">
                <img
                  src="/images/IMG_6223.jpeg"
                  alt="Felipe Baracaldo Developer"
                  className="hero__image"
                />

                {/* Tech icons (GLASS EFFECT más abajo) */}
                <div className="hero__tech-icons">
                  <SiReact />
                  <SiJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                  <SiTailwindcss />
                  <SiNodedotjs />
                  <SiMysql />
                  <SiPython />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      
      </div>
   
      <button 
            className="hero__scrollButton" 
            onClick={() => scrollToSection('about')}
            aria-label="Deslizar hacia abajo"
            >
            <ChevronDown className="hero__scrollIcon" />
    </button>
    </section>
  );
}

export default Hero;
