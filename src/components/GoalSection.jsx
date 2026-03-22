import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Aos } from "../components/ui/aos";



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
      className={className}
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
  return (
    <Aos animation="fade-up" className={`relative overflow-hidden ${className}`}>
      {children}
    </Aos>
  );
}


function ParallaxSection2({ children, className = "" }) {
  return (
    <Aos animation="fade-up" className={`relative overflow-hidden ${className}`}>
      {children}
    </Aos>
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
        <div className="w-14 h-14 border border-white/30 flex items-center justify-center rotate-45">
          <span className="font-mono text-sm text-white/80 -rotate-45 tracking-widest">{num}</span>
        </div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent" />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   TAG PILL
   ═══════════════════════════════════════════════════ */
function TagPill({ text }) {
  return (
    <span className="inline-block font-inter text-[9px] uppercase tracking-[0.4em] text-white border border-white/20 px-4 py-1.5 mr-3 mb-3">
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
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Outer rings */}
      {[160, 140, 120, 100, 80, 60].map((r, i) => (
        <motion.circle
          key={i}
          cx="200" cy="200" r={r}
          stroke="#C61E1E"
          strokeWidth={i === 0 ? "2" : "3"} // ئەستووری زیادکراوە
          vectorEffect="non-scaling-stroke" // بۆ ئایفۆن گرنگە
          opacity={0.2 + i * 0.05}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 + i * 0.05 }}
          viewport={{ once: true, margin: "-50px" }} // زووتر کار دەکات لە مۆبایل
          transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
        />
      ))}
      {/* Center dot */}
      <motion.circle
        cx="200" cy="200" r="10" fill="#C61E1E" opacity="0.8"
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
          strokeWidth="1.5" // ئەستووری زیادکراوە
          vectorEffect="non-scaling-stroke"
          opacity="0.3" // ڕوونتر کراوە
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
        />
      ))}
      {/* Glow */}
      <circle cx="200" cy="200" r="80" fill="url(#coilGlow)" opacity="0.3" />
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
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Pan base */}
      <motion.rect
        x="80" y="200" width="240" height="20" rx="10"
        fill="#1a1a1a" stroke="#C61E1E" strokeWidth="2" opacity="0.6"
        vectorEffect="non-scaling-stroke"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
      />
      {/* Pan body */}
      <motion.path
        d="M100 200 Q100 120 200 100 Q300 120 300 200"
        stroke="#C61E1E" strokeWidth="2" fill="none" opacity="0.5"
        vectorEffect="non-scaling-stroke"
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
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 + i * 0.2 }}
        />
      ))}
      {/* Temperature dots */}
      {[130, 170, 210, 250, 290].map((x, i) => (
        <motion.circle
          key={`d-${i}`}
          cx={x} cy="250" r="5"
          fill="#C61E1E" opacity="0.6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
        />
      ))}
      {/* Handle */}
      <motion.line
        x1="300" y1="200" x2="380" y2="180"
        stroke="#C61E1E" strokeWidth="4" opacity="0.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
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
    <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Countertop */}
      <rect x="0" y="200" width="800" height="300" fill="#0002" />
      <rect x="0" y="200" width="800" height="8" fill="#fff2" />
      {/* Marble veining */}
      <path d="M50 202 Q200 204 350 203 Q500 201 700 205" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <path d="M100 205 Q300 202 500 206 Q650 203 780 204" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />

      {/* Cooktop flush in counter */}
      <motion.rect x="200" y="195" width="400" height="12" rx="2" fill="#0A0A0A" />
      <motion.rect x="205" y="197" width="390" height="8" rx="1" fill="#111" />
      {/* Burner indicators */}
      <motion.circle cx="320" cy="201" r="25" stroke="#C9A96E" strokeWidth="1.5" opacity="0.8" vectorEffect="non-scaling-stroke" />
      <motion.circle cx="480" cy="201" r="30" stroke="#C9A96E" strokeWidth="1.5" opacity="0.8" vectorEffect="non-scaling-stroke" />

      {/* Backsplash */}
      <motion.rect x="0" y="0" width="800" height="200" fill="#161616" />
      {/* Tile lines */}
      {[40, 80, 120, 160].map(y => (
        <motion.line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      ))}

      {/* Range hood */}
      <path d="M300 0 L300 80 L250 130 L550 130 L500 80 L500 0" fill="#1A1A1A" stroke="#444" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <motion.rect x="350" y="120" width="100" height="4" rx="1" fill="#C9A96E" opacity="0.6" />

      {/* Ambient lighting from hood */}
      <motion.rect x="260" y="130" width="280" height="70" fill="#a41E1E" opacity="0.15" />

      {/* Floating shelf */}
      <rect x="600" y="80" width="180" height="8" rx="2" fill="#222" />
      {/* Items on shelf */}
      <rect x="620" y="50" width="25" height="30" rx="3" fill="#1E1E1E" stroke="#555" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <rect x="660" y="40" width="20" height="40" rx="2" fill="#1A1A1A" stroke="#555" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <circle cx="710" cy="65" r="12" fill="#1E1E1E" stroke="#555" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />

      {/* Pan on cooktop */}
      <ellipse cx="480" cy="195" rx="35" ry="5" fill="#222" />
      <path d="M445 195 Q445 175 480 175 Q515 175 515 195" fill="#1A1A1A" stroke="#555" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <motion.line x1="515" y1="185" x2="560" y2="183" stroke="#555" strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />

      {/* Steam wisps */}
      <path d="M470 170 Q468 155 472 140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
      <path d="M480 168 Q482 150 478 135" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
      <path d="M490 170 Q488 152 492 138" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}






/* ═══════════════════════════════════════════════════
   GOAL PAGE MAIN
   ═══════════════════════════════════════════════════ */
export default function GoalSection() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="  text-luxury-cream   ">
         
      <ScrollProgress />
      

     

   

      {/* ═══════════════════════════════════════════
          SECTION 01 — PRECISION & POWER
          ═══════════════════════════════════════════ */}
      <section id="section-01" data-section="section-01" className="relative bg-gradient-to-r from-black/90 via-transparent to-black/90  py-32 md:py-48">
       

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

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

                </div>
              </ParallaxSection>
            </div>

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
                <p className="font-cormorant text-neutral-300 text-xl md:text-2xl text-luxury-silver/70 italic mb-10 leading-relaxed">
                  Instant heat, unmatched control. The future of cooking is here.
                </p>
              </Reveal>

              <motion.div
                className="w-full h-px bg-gradient-to-r bg-white from-primary/20 to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ originX: 0 }}
              />

              <Reveal delay={0.2}>
                <p className="font-cormorant text-neutral-100 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-8">
                  Our advanced induction coils generate precise magnetic fields that heat your cookware directly, not the surface. This results in instantaneous temperature changes, allowing you to go from a gentle simmer to a rolling boil in seconds.
                </p>
              </Reveal>

            
              <Reveal delay={0.4}>
                <div className="grid grid-cols-3 gap-6 border-t border-primary/10 pt-8">
                  <div>
                    <span className="font-mono text-2xl md:text-3xl text-primary/80 font-bold">6.4</span>
                    <span className="font-mono text-sm text-primary/50 ml-1">kW</span>
                    <p className="font-inter text-[9px] uppercase tracking-[0.3em] text-primary/50 mt-1">Peak Power</p>
                  </div>
                  <div>
                    <span className="font-mono text-2xl md:text-3xl text-primary/80 font-bold">100</span>
                    <span className="font-mono text-sm text-primary/50 ml-1">°C</span>
                    <p className="font-inter text-[9px] uppercase tracking-[0.3em] text-primary/50 mt-1">Max Temperature</p>
                  </div>
                  <div>
                    <span className="font-mono text-2xl md:text-3xl text-primary/80 font-bold">100</span>
                    <span className="font-mono text-sm text-primary/50 ml-1">%</span>
                    <p className="font-inter  text-[9px] uppercase tracking-[0.3em] text-primary/50 mt-1">Efficiency</p>
                  </div>
                </div>
              </Reveal>
            </div>

           
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 02 — CULINARY MASTERY
          ═══════════════════════════════════════════ */}
      <section id="section-02" data-section="section-02" className="relative bg-gradient-to-r from-black/90 via-transparent to-black/90   py-32 md:py-48">
       
        {/* Subtle bg shift */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Illustration (flipped layout) */}
            <div className="">
              <SectionNumber num="02" />

              <Reveal>
                <div className="flex flex-wrap gap-0 mb-6">
                  <TagPill text="Art" />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl tracking-wide leading-[1.1] mb-4">
                  Culinary<br />
                  <span className="text-primary">Mastery</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="font-cormorant text-neutral-300 text-xl md:text-2xl text-luxury-silver/70 italic mb-10 leading-relaxed">
                  Elevate your cooking to an art form. Taste the difference.
                </p>
              </Reveal>

              <motion.div
                className="w-full h-px bg-gradient-to-r from-white to-transparent mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ originX: 0 }}
              />

              <Reveal delay={0.2}>
                <p className="font-cormorant text-lg md:text-xl text-neutral-100 leading-relaxed mb-8">
                  Novèlla's precise temperature control empowers you to execute delicate techniques with confidence. Whether it's melting chocolate without seizing, creating a velvety hollandaise, or achieving a perfect sear on a steak.
                </p>
              </Reveal>

             
            </div>


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

                </div>
              </ParallaxSection>
            </div>
          
          </div>
        </div>
      </section>

    

      {/* ═══════════════════════════════════════════
          SECTION 03 — SEAMLESS DESIGN
          ═══════════════════════════════════════════ */}
      <section id="section-03" data-section="section-03" className="relative py-32 md:py-48 bg-gradient-to-r from-black/90 via-transparent to-black/90 ">
       

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

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

                </div>
              </ParallaxSection>
            </div>

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
                <p className="font-cormorant text-neutral-300 text-xl md:text-2xl text-luxury-silver/70 italic mb-10 leading-relaxed">
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
                <p className="font-cormorant text-neutral-100 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-8">
                  Designed for the modern sophisticate, the Novèlla Induction cooktop integrates flawlessly into any high-end kitchen. Its ultra-slim profile allows for a perfectly flush installation with your countertop, creating an unbroken, elegant surface.
                </p>
              </Reveal>

              {/* <Reveal delay={0.3}>
                <p className="font-cormorant text-neutral-400 text-lg md:text-xl text-luxury-silver/60 leading-relaxed mb-12">
                  The premium black ceramic glass and minimalist controls offer a timeless aesthetic that complements marble, quartz, or wood, elevating the overall design of your culinary space. Experience the epitome of understated luxury.
                </p>
              </Reveal> */}

              {/* Material pills */}
              <Reveal delay={0.4}>
                <div className="border-t border-primary/10 pt-8">
                  <p className="font-inter text-[9px] uppercase tracking-[0.4em] text-neutral-300 mb-4">Compatible Surfaces</p>
                  <div className="flex flex-wrap gap-3">
                    {["Marble", "Quartz", "Granite", "Hardwood", "Ceramic"].map((m) => (
                      <span key={m} className="font-cormorant text-sm text-neutral-300 border border-primary/30 px-4 py-2 hover:border-primary/30 hover:text-luxury-silver/70 transition-all duration-300 cursor-default">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

           
          </div>
        </div>
      </section>

    


     {/* ═══ INTERLUDE QUOTE ═══ */}
      <section className="relative  py-24 md:py-32 bg-gradient-to-r from-black/90 via-transparent to-black/90 overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 animate-shimmer" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
     
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

    </div>
  );
}
