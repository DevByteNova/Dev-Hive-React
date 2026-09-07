import { useEffect, useRef } from "react";
import "../css/ScrollReveal.css";

function ScrollReveal({ children }) {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        // Si el navegador no soporta IntersectionObserver,
        // mostramos el contenido normalmente.
        if (!("IntersectionObserver" in window)) {
            element.classList.add("visible");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className="scroll-reveal"
        >
            {children}
        </div>
    );
}

export default ScrollReveal;