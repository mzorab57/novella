import { useEffect, useState } from "react";
import { ChevronDown, Zap, Shield, Star } from "lucide-react";
import heroCooktop2 from "/assets/images/hero2.jpeg";
import heroCooktop3 from "/assets/images/hero3.png";
import heroCooktop4 from "/assets/images/hero.jpeg";
import heroCooktop from "/assets/images/see-through.jpg";
import { useInView } from "../hooks/useInView";
import Kondo from "./Kondo";



const stats = [
  { value: "4", label: "Smart Burners", suffix: "" },
  { value: "2000", label: "Max Watts", suffix: "W" },
  { value: "9", label: "Heat Levels", suffix: "" },
  { value: "100", label: "Safe & Efficient", suffix: "%" },
];

const features = [
  { icon: Zap, title: "Instant Heat", desc: "Magnetic field heats cookware directly — zero wasted energy" },
  { icon: Shield, title: "Auto Safety Off", desc: "Smart shutdown after 2 hours of inactivity for total peace of mind" },
  { icon: Star, title: "Precision Control", desc: "9 heat levels from gentle simmer to powerful booster mode" },
];

const heroImages = [heroCooktop, heroCooktop2, heroCooktop3];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref: statsRef, isInView: statsInView } = useInView();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const scrollDown = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Novella Induction Cooktop ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-90" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60  to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60  to-black/40" />
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-red-600/50 blur-[320px] animate-pulse" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-100 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">

          {/* Badge */}
         {/*  <div
            className={`inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full bg-primary/5 mb-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
           <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Smart Induction Technology
            </span> 
          </div>*/}

          {/* Heading */}
          <h1
            className={`font-montserrat font-black leading-none mb-6 transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-white">
              WAVE OF
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-gradient-red">
              INNOVATION
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-white/50 text-lg sm:text-xl mb-10 transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Experience the future of cooking with Novella's precision induction technology. 
            Instant heat, unmatched control, seamless design.
          </p>

          {/* Buttons */}
          {/* <div
            className={`flex gap-4 mb-16 transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-red-600 text-white rounded hover:scale-105 transition"
            >
              Explore Products
            </button>

            <button
              onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-border rounded text-white hover:bg-primary/50 transition"
            >
              View Catalog
            </button>
          </div> */}

          {/* Features */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <Icon size={16} className="text-primary" />
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px   border-white/30 border-t border-border"
        >
          {stats.map(({ value, label, suffix }, i) => (
            <div
              key={label}
          className={` px-6   border-l ${i === 0 ? 'border-l-0' : ''} border-white/30 py-8 transition-all duration-700 ${
                statsInView ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl text-white font-black ">
                {value}
                <span className="text-red-600">{suffix}</span>
              </div>
              <div className="text-xs tracking-widest uppercase text-white/50">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={18} />
      </button>
   
   
    </section>
  );
};

export default Hero;