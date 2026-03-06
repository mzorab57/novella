import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import goalBg from '../assets/goal-hero.jpeg'



/* ═══════════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════════ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/80 via-primary to-primary-light z-[60] origin-left"
      style={{ scaleX }}
    />
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════════════ */
/* AnimatedNumber removed — not used currently */

/* ═══════════════════════════════════════════════════
   PARALLAX IMAGE (SVG ILLUSTRATION)
   ═══════════════════════════════════════════════════ */
function ParallaxSection({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [160, -130]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}


function ParallaxSection2({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HORIZONTAL LINE REVEAL
   ═══════════════════════════════════════════════════ */
function HorizontalLine({ delay = 0 }) {
  return (
    <motion.div
      className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/* ═══════════════════════════════════════════════════
   SECTION NUMBER BADGE
   ═══════════════════════════════════════════════════ */
function SectionNumber({ num }) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative">
        <div className="w-14 h-14 border border-primary/30 flex items-center justify-center rotate-45">
          <span className="font-mono text-sm text-primary/80 -rotate-45 tracking-widest">{num}</span>
        </div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   TAG PILL
   ═══════════════════════════════════════════════════ */
function TagPill({ text }) {
  return (
    <span className="inline-block font-inter text-[9px] uppercase tracking-[0.4em] text-primary/70 border border-primary/20 px-4 py-1.5 mr-3 mb-3">
      {text}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   DECORATIVE GRID SVG ILLUSTRATIONS
   ═══════════════════════════════════════════════════ */
// animation kai yakam
function InductionCoilIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      {/* Outer rings */}
      {[160, 140, 120, 100, 80, 60].map((r, i) => (
        <motion.circle
          key={i}
          cx="200" cy="200" r={r}
          stroke="#C61E1E"
          strokeWidth={i === 0 ? "1" : "4"}
          opacity={0.15 + i * 0.05}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.15 + i * 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
        />
      ))}
      {/* Center dot */}
      <motion.circle
        cx="200" cy="200" r="8" fill="#C61E1E" opacity="0.6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      {/* Energy lines */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <motion.line
          key={`l-${i}`}
          x1="200" y1="200"
          x2={200 + 170 * Math.cos((deg * Math.PI) / 180)}
          y2={200 + 170 * Math.sin((deg * Math.PI) / 180)}
          stroke="#C61E1E"
          strokeWidth="0.7"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
        />
      ))}
      {/* Glow */}
      <circle cx="200" cy="200" r="80" fill="url(#coilGlow)" opacity="0.2" />
      <defs>
        <radialGradient id="coilGlow">
          <stop stopColor="#C61E1E" />
          <stop offset="1" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}
// animation kai dwam
function CulinaryIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
      {/* Pan base */}
      <motion.rect
        x="80" y="200" width="240" height="20" rx="10"
        fill="#1a1a1a" stroke="#C61E1E" strokeWidth="0.9" opacity="0.4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      {/* Pan body */}
      <motion.path
        d="M100 200 Q100 120 200 100 Q300 120 300 200"
        stroke="#C61E1E" strokeWidth="1" fill="none" opacity="0.3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      {/* Steam lines */}
      {[150, 200, 250].map((x, i) => (
        <motion.path
          key={i}
          d={`M${x} 100 Q${x + 10} 70 ${x - 5} 40 Q${x + 5} 20 ${x} 0`}
          stroke="#C61E1E"
          strokeWidth="4"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 + i * 0.2 }}
        />
      ))}
      {/* Temperature dots */}
      {[130, 170, 210, 250, 290].map((x, i) => (
        <motion.circle
          key={`d-${i}`}
          cx={x} cy="250" r="4"
          fill="#C61E1E" opacity="0.4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
        />
      ))}
      {/* Handle */}
      <motion.line
        x1="300" y1="200" x2="380" y2="180"
        stroke="#C61E1E" strokeWidth="3.5" opacity="0.3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </svg>
  );
}

// ─── Kitchen Scene SVG ──────────────────────────────────────────────────────

function KitchenSceneIllustration() {
  return (
    <svg viewBox="0 0 800 500"  fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Countertop */}
      <rect x="0" y="200" width="800" height="300" fill="#0002" />
      <rect x="0" y="200" width="800" height="8" fill="#fff2" />
      {/* Marble veining */}
      <path d="M50 202 Q200 204 350 203 Q500 201 700 205" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <path d="M100 205 Q300 202 500 206 Q650 203 780 204" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      {/* Cooktop flush in counter */}
      <motion.rect x="200" y="195" width="400" height="12" rx="2" fill="#0A0A0A" />
      <motion.rect x="205" y="197" width="390" height="8" rx="1" fill="#111" />
      {/* Burner indicators */}
      <motion.circle cx="320" cy="201" r="25" stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />
      <motion.circle cx="480" cy="201" r="30" stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />

      {/* Backsplash */}
      <motion.rect x="0" y="0" width="800" height="200" fill="#161616" />
      {/* Tile lines */}
      {[40, 80, 120, 160].map(y => (
        <motion.line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      ))}

      {/* Range hood */}
      <path d="M300 0 L300 80 L250 130 L550 130 L500 80 L500 0" fill="#1A1A1A" stroke="#222" strokeWidth="0.5" />
      <motion.rect x="350" y="120" width="100" height="3" rx="1" fill="#C9A96E" opacity="0.3" />

      {/* Ambient lighting from hood */}
      <motion.rect x="260" y="130" width="280" height="70" fill="#a41E1E" opacity="0.08" />

      {/* Floating shelf */}
      <rect x="600" y="80" width="180" height="8" rx="2" fill="#222" />
      {/* Items on shelf */}
      <rect x="620" y="50" width="25" height="30" rx="3" fill="#1E1E1E" stroke="#333" strokeWidth="0.5" />
      <rect x="660" y="40" width="20" height="40" rx="2" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
      <circle cx="710" cy="65" r="12" fill="#1E1E1E" stroke="#333" strokeWidth="0.5" />

      {/* Pan on cooktop */}
      <ellipse cx="480" cy="195" rx="35" ry="5" fill="#222" />
      <path d="M445 195 Q445 175 480 175 Q515 175 515 195" fill="#1A1A1A" stroke="#333" strokeWidth="0.5" />
      <motion.line x1="515" y1="185" x2="560" y2="183" stroke="#333" strokeWidth="3" strokeLinecap="round" />

      {/* Steam wisps */}
      <path d="M470 170 Q468 155 472 140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
      <path d="M480 168 Q482 150 478 135" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
      <path d="M490 170 Q488 152 492 138" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />

      <defs>
        <linearGradient id="marbleGrad" x1="0" y1="200" x2="800" y2="208" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2A2A2A" />
          <stop offset="0.3" stopColor="#333" />
          <stop offset="0.5" stopColor="#2E2E2E" />
          <stop offset="0.7" stopColor="#353535" />
          <stop offset="1" stopColor="#2A2A2A" />
        </linearGradient>
        <linearGradient id="ambientLight" x1="400" y1="130" x2="400" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#C9A96E" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// animation kai seyam
// function KitchenSceneIllustration() {
//   return (
//     <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
//       {/* Countertop line */}
//       <motion.line
//         x1="0" y1="250" x2="400" y2="250"
//         stroke="#C61E1E" strokeWidth="0.5" opacity="0.3"
//         initial={{ pathLength: 0 }}
//         whileInView={{ pathLength: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5 }}
//       />
//       {/* Flush-mount cooktop */}
//       <motion.rect
//         x="60" y="235" width="280" height="15" rx="2"
//         fill="#111" stroke="#C61E1E" strokeWidth="0.5" opacity="0.5"
//         initial={{ scaleX: 0 }}
//         whileInView={{ scaleX: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.3 }}
//       />
//       {/* Burner zones */}
//       {[140, 260].map((cx, i) => (
//         <g key={i}>
//           <motion.circle
//             cx={cx} cy="242" r="30"
//             stroke="#C61E1E" strokeWidth="0.5" opacity="0.3"
//             initial={{ scale: 0, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 0.3 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
//           />
//           <motion.circle
//             cx={cx} cy="242" r="20"
//             stroke="#C61E1E" strokeWidth="0.3" opacity="0.2"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
//           />
//           <motion.circle
//             cx={cx} cy="242" r="3"
//             fill="#C61E1E" opacity="0.5"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
//           />
//         </g>
//       ))}
//       {/* Dimension lines */}
//       <motion.g
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 1.5 }}
//       >
//         <line x1="60" y1="270" x2="340" y2="270" stroke="#C61E1E" strokeWidth="0.3" opacity="0.3" />
//         <line x1="60" y1="265" x2="60" y2="275" stroke="#C61E1E" strokeWidth="0.3" opacity="0.3" />
//         <line x1="340" y1="265" x2="340" y2="275" stroke="#C61E1E" strokeWidth="0.3" opacity="0.3" />
//         <text x="200" y="285" textAnchor="middle" fill="#C61E1E" opacity="0.4" fontSize="8" fontFamily="monospace">780mm</text>
//       </motion.g>
//       {/* Grid pattern behind */}
//       {Array.from({ length: 8 }).map((_, i) => (
//         <motion.line
//           key={`h-${i}`}
//           x1="0" y1={i * 50 + 50} x2="400" y2={i * 50 + 50}
//           stroke="#C61E1E" strokeWidth="0.1" opacity="0.1"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: i * 0.05 }}
//         />
//       ))}
//     </svg>
//   );
// }


/* ═══════════════════════════════════════════════════
   COMPACT CARD (For items 04–09)
   ═══════════════════════════════════════════════════ */
function CompactCard({ num, title, desc, delay = 0, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative p-8 border border-primary/10 hover:border-primary/30 bg-luxury-dark/80 backdrop-blur-sm transition-all duration-700 h-full">
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          {/* Number */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] text-primary/50 tracking-[0.3em]">{num}</span>
            <div className="flex-1 h-px bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="w-8 h-8 border border-primary/20 flex items-center justify-center text-primary/50 group-hover:border-primary/40 group-hover:text-primary/70 transition-all duration-500">
              {icon}
            </div>
          </div>
          
          <h3 className="font-playfair text-white text-lg text-luxury-cream mb-3 tracking-wide group-hover:text-primary/90 transition-colors duration-500">
            {title}
          </h3>
          <p className="font-cormorant text-neutral-500  text-base leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/0 group-hover:border-primary/30 transition-all duration-700" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/0 group-hover:border-primary/30 transition-all duration-700" />
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   SIDE NAV (Table of Contents)
   ═══════════════════════════════════════════════════ */
function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section") || "");
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const items = [
    { id: "hero", label: "Start" },
    { id: "section-01", label: "01" },
    { id: "section-02", label: "02" },
    { id: "section-03", label: "03" },
    { id: "section-more", label: "04–09" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group relative flex items-center"
        >
          <span
            className={`absolute right-6 font-mono text-[9px] tracking-[0.3em] uppercase transition-all duration-300 whitespace-nowrap ${
              activeSection === item.id ? "opacity-100 text-primary" : "opacity-0 group-hover:opacity-70 text-luxury-silver/50"
            }`}
          >
            {item.label}
          </span>
          <div
            className={`w-2 h-2 rounded-full border transition-all duration-500 ${
              activeSection === item.id
                ? "bg-primary border-primary scale-125"
                : "border-luxury-silver/30 hover:border-primary/50"
            }`}
          />
        </a>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   GOAL PAGE MAIN
   ═══════════════════════════════════════════════════ */
const heroImages = ['https://id-preview--417042ee-646b-4da0-81b1-9c79f52ad16c.lovable.app/assets/about-hero-D06USkfW.jpg', 'https://id-preview--417042ee-646b-4da0-81b1-9c79f52ad16c.lovable.app/assets/about-hero-D06USkfW.jpg', 'https://id-preview--417042ee-646b-4da0-81b1-9c79f52ad16c.lovable.app/assets/about-hero-D06USkfW.jpg'];
export default function GoalPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

  
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

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-cream overflow-x-hidden noise-texture">
         
      <ScrollProgress />
      

     

      {/* ═══════════════════════════════════════════
          HERO / HEADER
          ═══════════════════════════════════════════ */}
          
        <ParallaxSection>
      <section  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background grid */}
        {/* Background image */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={goalBg}   
            alt={`Novella Induction Cooktop ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover   ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60  to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/40  to-[#141414]/40" />
        {/* <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-red-600/60 blur-[320px] " /> */}
      </div>
     
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* Large decorative number */}
        <motion.div
          className="absolute   -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.09, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <span className="font-playfair lg:text-[50vw] text-[80vw] text-primary leading-none">N</span>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-inter text-[10px] uppercase tracking-[0.6em] text-primary/50 mb-4 block text-center">
              Product Catalog
            </span>
          </motion.div>

<ParallaxSection2>
    
          <motion.h1
            className="text-white font-playfair text-5xl md:text-7xl lg:text-[6rem] text-center tracking-wide mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Experience<br />
            <span className="text-primary">Excellence</span>
          </motion.h1>

          <motion.div
            className="flex items-center gap-6 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <div className="w-2 h-2 rotate-45 bg-primary/50" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </motion.div>
</ParallaxSection2>
          <motion.p
            className="font-cormorant text-neutral-500 text-lg md:text-xl text-luxury-silver/60 text-center max-w-md italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Nine chapters of precision engineering, artisanal craft, and uncompromising quality.
          </motion.p>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-inter text-[8px] uppercase tracking-[0.5em] text-luxury-silver/25">Explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary/30 to-transparent" />
          </motion.div>
        </motion.div>
      </section>
       </ParallaxSection>

      {/* ═══════════════════════════════════════════
          SECTION 01 — PRECISION & POWER
          ═══════════════════════════════════════════ */}
      <section id="section-01" data-section="section-01" className="relative py-32 md:py-48">
        <div className="absolute top-0 left-0 right-0">
          <HorizontalLine />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Text Content */}
            <div>
              <SectionNumber num="01" />

              <Reveal>
                <div className="flex flex-wrap gap-0 mb-6">
                  <TagPill text="Technology" />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl tracking-wide leading-[1.1] mb-4">
                  Precision<br />
                  <span className="text-primary/80">&amp; Power</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="font-cormorant text-neutral-500 text-xl md:text-2xl text-luxury-silver/70 italic mb-10 leading-relaxed">
                  Instant heat, unmatched control. The future of cooking is here.
                </p>
              </Reveal>

              <motion.div
                className="w-full h-px bg-gradient-to-r from-primary/20 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ originX: 0 }}
              />

              <Reveal delay={0.2}>
                <p className="font-cormorant text-neutral-400 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-8">
                  Our advanced induction coils generate precise magnetic fields that heat your cookware directly, not the surface. This results in instantaneous temperature changes, allowing you to go from a gentle simmer to a rolling boil in seconds.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="font-cormorant text-neutral-400 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-12">
                  Experience unparalleled energy efficiency and safety features, including automatic pan detection and cool-to-the-touch surfaces. Perfect timing, perfect results, every time.
                </p>
              </Reveal>

              {/* Stats strip */}
              <Reveal delay={0.4}>
                <div className="grid grid-cols-3 gap-6 border-t border-primary/10 pt-8">
                  <div>
                    <span className="font-mono text-2xl md:text-3xl text-primary/80 font-bold">7.4</span>
                    <span className="font-mono text-sm text-primary/50 ml-1">kW</span>
                    <p className="font-inter text-[9px] uppercase tracking-[0.3em] text-primary/50 mt-1">Peak Power</p>
                  </div>
                  <div>
                    <span className="font-mono text-2xl md:text-3xl text-primary/80 font-bold">&lt;1</span>
                    <span className="font-mono text-sm text-primary/50 ml-1">°C</span>
                    <p className="font-inter text-[9px] uppercase tracking-[0.3em] text-primary/50 mt-1">Precision</p>
                  </div>
                  <div>
                    <span className="font-mono text-2xl md:text-3xl text-primary/80 font-bold">93</span>
                    <span className="font-mono text-sm text-primary/50 ml-1">%</span>
                    <p className="font-inter  text-[9px] uppercase tracking-[0.3em] text-primary/50 mt-1">Efficiency</p>
                  </div>
                </div>
              </Reveal>
            </div>

           {/* Right — Illustration */}
            <div className="relative   ">

        
              <ParallaxSection className="sticky  lg:h-[37rem]  h-[31rem] p-2 ">
                
                <div className="relative   border border-primary/20 p-6 bg-[#1A1A1A]/50">
                {/* <div className="absolute inset-0 bg-grid  opacity-50 z-10 " /> */}
                  {/* Frame */}
                  <div className="absolute -inset-4 border border-primary/30  shadow-[0_6px_30px_10px_rgba(198,30,30,0.2)]" />
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-primary" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-primary" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-primary" />

                  <div className="relative bg-[#1A1A1A]/60 p-8 md:p-12 aspect-square flex items-center justify-center animate-pulse-glow">
                    <InductionCoilIllustration />
                  </div>

                  {/* Label */}
                  <div className="absolute -bottom-10 right-0 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/90" />
                    <span className="font-mono text-[12px] text-neutral-400 tracking-[0.3em] uppercase">Fig. 01</span>
                  </div>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 02 — CULINARY MASTERY
          ═══════════════════════════════════════════ */}
      <section id="section-02" data-section="section-02" className="relative py-32 md:py-48">
        <div className="absolute top-0 left-0 right-0">
          <HorizontalLine />
        </div>
        {/* Subtle bg shift */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Illustration (flipped layout) */}
            <div className="relative order-2 lg:order-1">
             {/* Right — Illustration */}
            <div className="relative   ">

        
              <ParallaxSection className="sticky  lg:h-[37rem]  h-[31rem] p-2 ">
                
                <div className="relative   border border-primary/20 p-6 bg-[#1A1A1A]/50">
                {/* <div className="absolute inset-0 bg-grid  opacity-50 z-10 " /> */}
                  {/* Frame */}
                  <div className="absolute -inset-4 border border-primary/20  shadow-[0_6px_30px_10px_rgba(198,30,30,0.2)]" />
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-primary" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-primary" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-primary" />

                  <div className="relative bg-[#1A1A1A]/60 p-8 md:p-12 aspect-square flex items-center justify-center animate-pulse-glow">
                    <CulinaryIllustration />
                  </div>

                  {/* Label */}
                  <div className="absolute -bottom-10 right-0 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/90" />
                    <span className="font-mono text-[12px] text-neutral-400 tracking-[0.3em] uppercase">Fig. 01</span>
                  </div>
                </div>
              </ParallaxSection>
            </div>
            </div>

            {/* Right — Text Content */}
            <div className="order-1 lg:order-2">
              <SectionNumber num="02" />

              <Reveal>
                <div className="flex flex-wrap gap-0 mb-6">
                  <TagPill text="Art" />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl tracking-wide leading-[1.1] mb-4">
                  Culinary<br />
                  <span className="text-primary/80">Mastery</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="font-cormorant text-neutral-500 text-xl md:text-2xl text-luxury-silver/70 italic mb-10 leading-relaxed">
                  Elevate your cooking to an art form. Taste the difference.
                </p>
              </Reveal>

              <motion.div
                className="w-full h-px bg-gradient-to-r from-primary/20 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ originX: 0 }}
              />

              <Reveal delay={0.2}>
                <p className="font-cormorant text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
                  Novèlla's precise temperature control empowers you to execute delicate techniques with confidence. Whether it's melting chocolate without seizing, creating a velvety hollandaise, or achieving a perfect sear on a steak.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="font-cormorant text-neutral-400 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-12">
                  Our induction technology provides the exact heat you need, when you need it. Unleash your inner chef and transform every meal into a masterpiece.
                </p>
              </Reveal>

              {/* Techniques list */}
              <Reveal delay={0.4}>
                <div className="space-y-4 border-t border-primary/10 pt-8">
                  {["Precision Searing", "Gentle Tempering", "Perfect Emulsions", "Rapid Boiling"].map((t, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rotate-45 bg-primary/40 group-hover:bg-primary/80 transition-colors duration-300" />
                      <span className="font-cormorant text-base text-neutral-400 group-hover:text-luxury-silver/80 transition-colors duration-300">{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTERLUDE QUOTE ═══ */}
      <section className="relative  py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-transparent" />
        <div className="absolute inset-0 animate-shimmer" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary/30" />
              <div className="w-2 h-2 rotate-45 border border-primary/40" />
              <div className="w-12 h-px bg-primary/30" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-cormorant text-neutral-200 text-2xl md:text-4xl lg:text-5xl font-light italic text-luxury-cream/80 leading-snug">
              "The pursuit of <span className="text-primary">culinary perfection</span> begins with the right instrument."
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-12 h-px bg-primary/30" />
              <div className="w-2 h-2 rotate-45 border border-primary/40" />
              <div className="w-12 h-px bg-primary/30" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 03 — SEAMLESS DESIGN
          ═══════════════════════════════════════════ */}
      <section id="section-03" data-section="section-03" className="relative py-32 md:py-48 ">
        <div className="absolute top-0 left-0 right-0">
          <HorizontalLine />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Text Content */}
            <div>
              <SectionNumber num="03" />

              <Reveal>
                <div className="flex flex-wrap gap-0 mb-6">
                  <TagPill text="Luxury" />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl tracking-wide leading-[1.1] mb-4">
                  Seamless<br />
                  <span className="text-primary/80">Design</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="font-cormorant text-neutral-500 text-xl md:text-2xl text-luxury-silver/70 italic mb-10 leading-relaxed">
                  Aesthetic perfection that disappears into your home.
                </p>
              </Reveal>

              <motion.div
                className="w-full h-px bg-gradient-to-r from-primary/20 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ originX: 0 }}
              />

              <Reveal delay={0.2}>
                <p className="font-cormorant text-neutral-400 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-8">
                  Designed for the modern sophisticate, the Novèlla Induction cooktop integrates flawlessly into any high-end kitchen. Its ultra-slim profile allows for a perfectly flush installation with your countertop, creating an unbroken, elegant surface.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="font-cormorant text-neutral-400 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-12">
                  The premium black ceramic glass and minimalist controls offer a timeless aesthetic that complements marble, quartz, or wood, elevating the overall design of your culinary space. Experience the epitome of understated luxury.
                </p>
              </Reveal>

              {/* Material pills */}
              <Reveal delay={0.4}>
                <div className="border-t border-primary/10 pt-8">
                  <p className="font-inter text-[9px] uppercase tracking-[0.4em] text-neutral-500 mb-4">Compatible Surfaces</p>
                  <div className="flex flex-wrap gap-3">
                    {["Marble", "Quartz", "Granite", "Hardwood", "Ceramic"].map((m) => (
                      <span key={m} className="font-cormorant text-sm text-neutral-500 border border-primary/15 px-4 py-2 hover:border-primary/30 hover:text-luxury-silver/70 transition-all duration-300 cursor-default">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — Illustration */}
            <div className="relative border border-primary/20 p-6 bg-[#1A1A1A]/50">
              <ParallaxSection className="sticky top-32">
                <div className="relative">
                   <div className="absolute -inset-4 border border-primary/40  shadow-[0_10px_10px_10px_rgba(198,30,30,0.2)]" />
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-primary" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-primary" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-primary" />

                  <div className="relative bg-[#1A1A1A] p-4 md:p-12 aspect-square flex items-center justify-center animate-pulse-glow">
                    <KitchenSceneIllustration />
                  </div>

                  <div className="absolute -bottom-8 right-0 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/30" />
                    <span className="font-mono text-[9px] text-neutral-400 tracking-[0.3em] uppercase">Fig. 03</span>
                  </div>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTIONS 04–09 — COMPACT GRID
          ═══════════════════════════════════════════ */}
      <section id="section-more" data-section="section-more" className="relative py-32 md:py-48">
        <div className="absolute top-0 left-0 right-0">
          <HorizontalLine />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/10 via-transparent to-luxury-charcoal/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section header */}
          <div className="text-center mb-20">
            <Reveal>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
                <span className="font-mono text-[10px] text-primary/50 tracking-[0.5em]">04 — 09</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-playfair text-white text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4">
                Essential <span className="text-primary/80">Guides</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-cormorant text-neutral-500 text-lg text-luxury-silver/50 italic max-w-md mx-auto">
                Everything you need to master your Novèlla cooktop.
              </p>
            </Reveal>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CompactCard
              num="04"
              title="Safety Guidelines"
              desc="Essential precautions for safe operation. Comprehensive guide to protective features and best practices."
              delay={0}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            />
            <CompactCard
              num="05"
              title="Installation & Setup"
              desc="Professional installation requirements. Step-by-step guidance for flush-mount and standard configurations."
              delay={0.1}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              }
            />
            <CompactCard
              num="06"
              title="Cookware Compatibility"
              desc="Induction-compatible cookware guide. Discover which materials work best for optimal heat transfer."
              delay={0.2}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              }
            />
            <CompactCard
              num="07"
              title="Operating Instructions"
              desc="Effortless control for perfect results. Master every function from basic heating to advanced techniques."
              delay={0.3}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              }
            />
            <CompactCard
              num="08"
              title="Special Features"
              desc="Advanced features for convenience & safety. Timer functions, boost mode, bridge zones, and smart connectivity."
              delay={0.4}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              }
            />
            <CompactCard
              num="09"
              title="Operating Sounds"
              desc="Normal induction operating sounds guide. Understanding fan, clicking, and humming sounds during use."
              delay={0.5}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

   

    </div>
  );
}
