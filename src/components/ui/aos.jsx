import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

let initialized = false;

function shouldDisableAos() {
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ||
    window.matchMedia?.("(max-width: 767px)")?.matches
  );
}

export function AosProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!initialized) {
      initialized = true;
      AOS.init({
        duration: 650,
        easing: "ease-out-cubic",
        offset: 90,
        once: true,
        mirror: false,
        disable: shouldDisableAos,
        disableMutationObserver: true,
      });
      document.documentElement.dataset.aosReady = "true";
    }

    const enabled = !shouldDisableAos();
    document.documentElement.dataset.aosEnabled = enabled ? "true" : "false";

    if (!enabled) return;

    requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    const t = window.setTimeout(() => {
      AOS.refreshHard();
    }, 250);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      const enabled = !shouldDisableAos();
      document.documentElement.dataset.aosEnabled = enabled ? "true" : "false";
      if (!enabled) return;
      AOS.refreshHard();
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return children;
}

export function Aos({ children, animation = "fade-up", delay = 0, className = "" }) {
  return (
    <div
      className={className}
      data-aos={animation}
      data-aos-delay={delay || undefined}
      data-aos-once="true"
    >
      {children}
    </div>
  );
}
