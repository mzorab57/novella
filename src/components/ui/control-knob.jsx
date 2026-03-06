import React, { useCallback, useEffect, useRef, useState } from "react";
import { Aos } from "./aos";

const MIN_DEG = -135;
const MAX_DEG = 135;
const TOTAL_TICKS = 40;
const DEGREES_PER_TICK = (MAX_DEG - MIN_DEG) / TOTAL_TICKS;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function degToPercent(deg) {
  return Math.round(((deg - MIN_DEG) / (MAX_DEG - MIN_DEG)) * 100);
}

function percentToDeg(percent) {
  return MIN_DEG + (percent / 100) * (MAX_DEG - MIN_DEG);
}

// ═══════════════════════════════════════════════════════
// REACTOR KNOB COMPONENT
// ═══════════════════════════════════════════════════════
function ReactorKnob({
  size = "lg",
  label = "LEVEL",
  outputLabel = "OUTPUT",
  defaultValue = 37,
  accentColor = "red",
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [rotationDeg, setRotationDeg] = useState(() => percentToDeg(defaultValue));
  const knobRef = useRef(null);

  const handlePointerDown = useCallback((e) => {
    setIsDragging(true);
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      if (!knobRef.current) return;
      const rect = knobRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;
      let rads = Math.atan2(y, x);
      let degs = rads * (180 / Math.PI) + 90;
      if (degs > 180) degs -= 360;
      if (degs < MIN_DEG && degs > -180) degs = MIN_DEG;
      if (degs > MAX_DEG) degs = MAX_DEG;
      const snap = Math.round(degs / DEGREES_PER_TICK) * DEGREES_PER_TICK;
      setRotationDeg(snap);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  const ticks = Array.from({ length: TOTAL_TICKS + 1 });

  const sizeMap = { sm: 160, md: 200, lg: 256 };
  const containerSize = sizeMap[size];
  const knobSize = containerSize * 0.625;
  const capSize = knobSize * 0.6;

  const colorMap = {
    orange: { hex: "#f97316", rgb: "249, 115, 22", tw: "text-orange-600" },
    red: { hex: "#C61E1E", rgb: "212, 165, 116", tw: "text-red-600" },
    gold: { hex: "#c9a96e", rgb: "201, 169, 110", tw: "text-yellow-600" },
  };
  const c = colorMap[accentColor] || colorMap.red;
  const percent = clamp(degToPercent(rotationDeg), 0, 100);
  const lightOpacity = 0.03 + (percent / 100) * 0.32;

  return (
    <div className="relative select-none " style={{ width: containerSize, height: containerSize + 64 }}>
      <div
        className="absolute rounded-full"
        style={{
          inset: containerSize * 0.1,
          background: "#C61E1E",
          filter: "blur(70px)",
          opacity: lightOpacity,
        }}
      />
      

      <div className="absolute inset-0 pointer-events-none">
        {ticks.map((_, i) => {
          const angle = (i / TOTAL_TICKS) * (MAX_DEG - MIN_DEG) + MIN_DEG;
          return (
            <div
              key={i}
              className="absolute top-0 left-1/2 h-full"
              style={{ width: 3, transform: `translateX(-50%) rotate(${angle}deg)` }}
            >
              <TickMark currentRotation={rotationDeg} angle={angle} color={"#C61E1E"} rgb={c.rgb} />
            </div>
          );
        })}
      </div>

      <div
      
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: knobSize,
          height: knobSize,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          ref={knobRef}
          className={`relative w-full h-full rounded-full touch-none z-20 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transform: `rotate(${rotationDeg}deg)`,
            transition: isDragging ? "none" : "transform 160ms ease-out",
          }}
          onPointerDown={handlePointerDown}
        >
          <div className="w-full h-full rounded-full bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-neutral-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%),conic-gradient(from_0deg,transparent_0deg,#000_360deg)]" />
            <div
              className="relative rounded-full bg-neutral-950 shadow-[inset_0_2px_5px_rgba(0,0,0,1)] border border-neutral-800/50 flex items-center justify-center"
              style={{ width: capSize, height: capSize }}
            >
              <div
                className="absolute top-2 rounded-full"
                style={{
                  width: 5,
                  height: 16,
                  backgroundColor: "#C61E1E",
                  boxShadow: `0 0 ${Math.max(5, (rotationDeg + 135) / 10)}px #C61E1E`,
                }}
              />
              <div className="flex flex-col items-center mt-4 opacity-50">
                <span className="font-mono text-[8px] text-neutral-500 tracking-widest">{label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        style={{ bottom: -8 }}
      >
        <span className="text-[9px] text-neutral-600 font-mono tracking-[0.2em] mb-1">{outputLabel}</span>
        <DisplayValue value={percent} color={c} />
      </div>
    </div>
  );
}

function TickMark({
  currentRotation,
  angle,
  color,
  rgb,
}) {
  const active = currentRotation >= angle;
  const opacity = active ? 1 : 0.2;
  const bgColor = active ? color : "#404040";
  const boxShadow = active ? `0 0 8px rgba(${rgb}, 0.6)` : "none";

  return (
    <div
      style={{ backgroundColor: bgColor, opacity, boxShadow }}
      className="w-1 h-2 rounded-full transition-colors duration-75"
    />
  );
}

function DisplayValue({
  value,
  color,
}) {
  return (
    <div className="relative">
      <span
        className="absolute inset-0 blur-sm font-mono text-2xl font-black tabular-nums tracking-widest"
        style={{ color: `${color.hex}50` }}
      >
        {value.toString().padStart(3, "0")}
      </span>
      <span className="relative font-mono text-2xl font-black tabular-nums tracking-widest" style={{ color: color.hex }}>
        {value.toString().padStart(3, "0")}
        <span className="text-xs text-neutral-600 ml-1">%</span>
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// COOKTOP SVG ILLUSTRATION
// ═══════════════════════════════════════════════════════
function CooktopIllustration({ className }) {
  return (
    <svg viewBox="0 0 500 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="40" width="440" height="320" rx="16" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      <rect x="40" y="50" width="420" height="300" rx="12" fill="#111" />
      
      <g className="animate-pulse" style={{ animationDuration: "3s" }}>
        <circle cx="160" cy="150" r="55" stroke="#c9a96e" strokeWidth="0.5" />
        <circle cx="160" cy="150" r="40" stroke="#c9a96e" strokeWidth="0.5" opacity="0.8" />
        <circle cx="160" cy="150" r="25" stroke="#c9a96e" strokeWidth="0.5" opacity="0.6" />
        <circle cx="160" cy="150" r="3" fill="#c9a96e" />
      </g>

      <g className="animate-pulse" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
        <circle cx="340" cy="150" r="65" stroke="#c9a96e" strokeWidth="0.5" />
        <circle cx="340" cy="150" r="48" stroke="#c9a96e" strokeWidth="0.5" opacity="0.8" />
        <circle cx="340" cy="150" r="30" stroke="#c9a96e" strokeWidth="0.5" opacity="0.6" />
        <circle cx="340" cy="150" r="3" fill="#c9a96e" />
      </g>

      <g className="animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
        <circle cx="160" cy="280" r="45" stroke="#c9a96e" strokeWidth="0.5" />
        <circle cx="160" cy="280" r="30" stroke="#c9a96e" strokeWidth="0.5" opacity="0.8" />
        <circle cx="160" cy="280" r="3" fill="#c9a96e" />
      </g>

      <g className="animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.2s" }}>
        <circle cx="340" cy="280" r="50" stroke="#c9a96e" strokeWidth="0.5" />
        <circle cx="340" cy="280" r="35" stroke="#c9a96e" strokeWidth="0.5" opacity="0.8" />
        <circle cx="340" cy="280" r="20" stroke="#c9a96e" strokeWidth="0.5" opacity="0.6" />
        <circle cx="340" cy="280" r="3" fill="#c9a96e" />
      </g>

      {/* Control strip */}
      <rect x="180" y="365" width="140" height="2" rx="1" fill="#c9a96e" opacity="0.15" />
      {[210, 230, 250, 270, 290].map((x) => (
        <circle key={x} cx={x} cy="366" r="2" fill="#c9a96e" opacity="0.3" />
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════
// SPEC CARD
// ═══════════════════════════════════════════════════════
function SpecCard({ icon, title, value, unit, delay }) {
  return (
    <Aos animation="fade-up" delay={Math.round(delay * 1000)}>
      <div className="relative group p-6 border border-neutral-800/50 bg-neutral-950/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-700/80" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-red-700/80" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-red-700/80" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-700/80" />
        <span className="text-2xl mb-3 block">{icon}</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-500 block mb-2">{title}</span>
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-2xl text-red-200/90 font-light">{value}</span>
          <span className="text-[10px] text-neutral-500 font-mono">{unit}</span>
        </div>
      </div>
    </Aos>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════
export default function NovellaCooktopPage() {


  return (
    <div
    
     className="min-h-screen  text-neutral-100 overflow-x-hidden">
     


      {/* ═══ INTERACTIVE CONTROL SECTION ═══ */}
      <section 
      id="control" className="relative py-28 md:py-40 overflow-hidden">
         <div  className='absolute -top-5 h-20 w-full bg-[#141414] blur-md z-10 '></div>
        {/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/10 to-transparent" /> */}
   <div className="absolute top-40 left-20 size-24 rounded-full bg-red-900 blur-[90px] " />
        {/* Radial glow behind */}
        <div className="absolute -bottom-20   inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,30,30,0.05)_0%,transparent_40%)]" />

        <div className="max-w-7xl   mx-auto px-6 md:px-12">
          <div className="text-start md:text-center  mb-20 ">
           
            <Aos animation="fade-up" delay={100}>
              <h2 className="font-playfair text-5xl lg:text-8xl tracking-wide leading-tight mb-6">
                SMART 
 <span className="text-red-500/70">4-BURNER HUB</span>
              </h2>
            </Aos>
            <Aos animation="fade-up" delay={200}>
              <p className="font-cormorant italic text-lg text-neutral-500 font-light max-w-2xl text-start md:text-center mx-auto">
               A masterpiece of design and engineering. Novella brings advanced magnetic induction technology — rare in every era. Designed for beauty, built for precision, crafted for modern life.
              </p>
            </Aos>
          </div>

          <Aos animation="fade-up" delay={300}>
            
            <div className="relative max-w-4xl border border-neutral-800/60 bg-neutral-900/40 px-4 mx-auto">
              
              <div className="absolute -inset-6 border border-neutral-800/30 rounded-sm" />
              <div className="absolute -inset-6 -top-3 -left-3 w-5 h-5 border-t border-l border-red-700" />
              <div className="absolute -inset-6 -top-3 -right-3 w-5 h-5 border-t border-r border-red-700 left-auto" />
              <div className="absolute -inset-6 -bottom-3 -left-3 w-5 h-5 border-b border-l border-red-700 top-auto" />
              <div className="absolute -inset-6 -bottom-3 -right-3 w-5 h-5 border-b border-r border-red-700 top-auto left-auto" />

              <div className="grid grid-cols-2  gap-8 py-12">
                <div className="absolute inset-0 bg-grid opacity-100 z-0" />
                {[
                  { label: "FRONT-L", output: "ZONE 1", defaultValue: 72, accent: "orange" },
                  { label: "FRONT-R", output: "ZONE 2", defaultValue: 45, accent: "orange" },
                  { label: "REAR-L", output: "ZONE 3", defaultValue: 28, accent: "orange" },
                  { label: "REAR-R", output: "ZONE 4", defaultValue: 91, accent: "orange" },
                ].map((knob, i) => (
                  <div key={i} className="flex flex-col scale-75 md:scale-95 items-center">
                    <ReactorKnob
                      size="sm"
                      label={knob.label}
                      outputLabel={knob.output}
                      defaultValue={knob.defaultValue}
                      accentColor={knob.accent}
                    />
                  </div>
                ))}
                
              </div>

              {/* control tabax */}
              <div className="flex items-center justify-center gap-8 py-6 border-t border-dashed-8 border-neutral-800/30">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                  <span className="font-mono text-[9px] text-neutral-500 tracking-wider">SYSTEM ACTIVE</span>
                </div>
                <div className="w-px h-3 bg-neutral-800" />
                <span className="font-mono text-[9px] text-neutral-500 tracking-wider">4 ZONES ONLINE</span>
                <div className="w-px h-3 bg-neutral-800" />
                <span className="font-mono text-[9px] text-neutral-500 tracking-wider">SAFETY: ENGAGED</span>
                
              </div>
              
            </div>
          </Aos>

          
          
        </div>
      </section>

     
    </div>
  );
}
