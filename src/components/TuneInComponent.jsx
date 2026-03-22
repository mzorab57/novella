import React from 'react';
import './TuneInStyles.css';

const TuneInComponent = () => {
  return (
    <section className="tunein-section" data-theme="dark">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingParticles />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.03)_0%,transparent_70%)]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-700/40" />
              <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-red-600/60">Introducing</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-700/40" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.04em] leading-[0.9] mb-4">
              <span className="block text-red-50/90">Novèlla</span>
              <span className="block text-red-600/60 text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] font-light mt-2">
                INDUCTION
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-serif text-lg md:text-xl text-neutral-400 font-light italic max-w-2xl mx-auto mt-8 leading-relaxed">
              Where precision engineering meets artisanal beauty — a masterpiece for the modern culinary atelier.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <motion.div
              className="mt-12 inline-flex items-center gap-3 border border-red-800/30 px-8 py-3 cursor-pointer group"
              whileHover={{ borderColor: "rgba(201,169,110,0.5)", backgroundColor: "rgba(201,169,110,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-400/70 group-hover:text-red-300/90 transition-colors">
                Discover
              </span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="text-red-600/50"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1" fill="none" />
              </motion.svg>
            </motion.div>
          </Reveal>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      </section>


      {/* ═══ DESIGN PHILOSOPHY ═══ */}
      {/* <section id="design" className="relative py-28 md:py-40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
           
            <div>
              <Reveal>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-red-600/70 mb-6 block">
                  Design Philosophy
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-8">
                  Seamless
                  <br />
                  <span className="text-red-500/70">Elegance</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-serif text-lg md:text-xl text-neutral-400 leading-relaxed mb-6 font-light">
                  Designed for the modern sophisticate, the Novèlla Induction cooktop integrates flawlessly into any
                  high-end kitchen. Its ultra-slim profile allows for a perfectly flush installation with your countertop,
                  creating an unbroken, elegant surface.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="font-serif text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 font-light">
                  The premium black ceramic glass and minimalist controls offer a timeless aesthetic that complements
                  marble, quartz, or wood, elevating the overall design of your culinary space.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-red-700/40" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                    Flush Mount Installation
                  </span>
                </div>
              </Reveal>
            </div>

           
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 border border-red-700/10" />
                <div className="relative bg-neutral-900/60 p-8">
                  <CooktopIllustration className="w-full h-auto" />
                 
                  <motion.div
                    className="absolute inset-0 bg-red-500/[0.02] rounded-lg"
                    animate={{ opacity: [0.02, 0.06, 0.02] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
               
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-red-700/40" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-red-700/40" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-red-700/40" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-red-700/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* ═══ MATERIAL STRIP ═══ */}
      {/* <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-neutral-950" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/[0.03] to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-light italic text-red-50/80 leading-snug">
              "Where precision engineering meets{" "}
              <span className="text-red-500/80">artisanal beauty</span>, every detail speaks to an unwavering commitment
              to perfection."
            </p>
          </Reveal>
        </div>
      </section> */}

      {/* ═══ SPECIFICATIONS ═══ */}
      {/* <section id="specifications" className="relative py-28 md:py-40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <Reveal>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-red-600/70 mb-6 block">
                Technical Excellence
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide">
                Specifications
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <SpecCard icon="⚡" title="Max Power" value="640–6,400" unit="WATTS" delay={0} />
            <SpecCard icon="◎" title="Cooking Zones" value="4" unit="ZONES" delay={0.1} />
            <SpecCard icon="⬡" title="Surface" value="77" unit="CM" delay={0.2} />
            <SpecCard icon="△" title="Profile" value="5.1" unit="CM SLIM" delay={0.3} />
            <SpecCard icon="◇" title="Efficiency" value="100" unit="%" delay={0.4} />
            <SpecCard icon="⏱" title="Boil Time" value="120" unit="SEC" delay={0.5} />
            <SpecCard icon="🛡" title="Safety" value="12" unit="FEATURES" delay={0.6} />
            <SpecCard icon="✦" title="Warranty" value="5" unit="YEARS" delay={0.7} />
          </div>
        </div>
      </section> */}

      {/* ═══ ENQUIRE / CTA ═══ */}
      {/* <section id="enquire" className="relative py-28 md:py-40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,110,0.04)_0%,transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-red-600/70 mb-6 block">
              Private Consultation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide leading-tight mb-6">
              Begin Your <span className="text-red-500/70">Journey</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-lg text-neutral-400 font-light mb-12 leading-relaxed">
              The Novèlla Induction is available exclusively through our network of authorized design partners. Schedule a
              private consultation to explore how it transforms your culinary space.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="px-10 py-4 bg-red-700/20 border border-red-700/40 font-mono text-[10px] uppercase tracking-[0.3em] text-red-300/90 hover:bg-red-700/30 transition-colors"
                whileHover={{ scale: 1.02, borderColor: "rgba(201,169,110,0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="px-10 py-4 border border-neutral-800 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-neutral-300 hover:border-neutral-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section> */}

    </section>
  );
};

export default TuneInComponent;
