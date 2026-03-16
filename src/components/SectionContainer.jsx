import { useEffect, useRef, useState } from "react";

function SectionContainer({ id, children, className = "" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`section curved-section ${isVisible ? "is-visible" : ""} ${className}`}>
      <div className="container">
        <div className="section-panel">{children}</div>
      </div>
    </section>
  );
}

export default SectionContainer;
