import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay=0, duration=500, threshold=0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing after first reveal
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`fade-in ${isVisible ? "animate-fadeIn" : "opacity:0"}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration:  `${duration}ms`,
        animationFillMode: 'both'
      }}          
    >
      {children}
    </div>
  );
}

export default FadeIn;
