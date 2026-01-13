import { useEffect, useState } from "react";

// Hook: detecta qué sección está activa según el scroll
export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Recorremos de abajo hacia arriba para encontrar la sección más cercana/actual
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Si no encuentra ninguna (ej: estás arriba del todo)
      setActiveSection(sectionIds[0] || "");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

// Smooth scroll a una sección
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const top = section.offsetTop - offset;

  window.scrollTo({
    top,
    behavior: "smooth"
  });
};
