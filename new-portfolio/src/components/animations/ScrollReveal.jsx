import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const animationClasses = {
    fadeUp: "sr-fade-up",
    fadeIn: "sr-fade-in",
    slideLeft: "sr-slide-left",
    slideRight: "sr-slide-right",
    scaleIn: "sr-scale-in",
  };

  return (
    <div
      ref={ref}
      className={`sr-base ${isVisible ? "sr-visible" : animationClasses[animation]}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
