import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Shield, Timer, Lock, Thermometer, Cpu, Hand, Sparkles, Gauge, Leaf, ChevronDown, ChevronUp, Flame, PlugZap } from "lucide-react";
import { useInView } from "../hooks/useInView";
import productHero from "../assets/product-hero.jpeg";
import productTouch from "../assets/product-touch.jpeg";
import productLifestyle from "../assets/product-lifestyle.jpeg";
// import nv410 from "/assets/nv410-product.jpg";
import novellaLogo from "/assets/images/see-through.jpg";

/* ═══════════════════════════════════════════════════
   COMPACT CARD (چاککراو)
   ═══════════════════════════════════════════════════ */
function CompactCard({ num, title, desc, icon: Icon, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative p-8 border border-primary/15 hover:border-primary/30 bg-luxury-dark/80 backdrop-blur-sm transition-all duration-700 h-full">
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          {/* Number */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] text-primary/50 tracking-[0.3em]">
               {String(num + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 h-px bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="w-8 h-8 border border-primary/20 flex items-center justify-center text-primary/50 group-hover:border-primary/40 group-hover:text-primary/70 transition-all duration-500">
              {/* لێرەدا Icon بە پیتی گەورە بانگ دەکرێت */}
              {Icon && <Icon className="w-5 h-5" />}
            </div>
          </div>
          
          <h3 className="font-playfair text-white text-lg mb-3 tracking-wide group-hover:text-primary/90 transition-colors duration-500">
            {title}
          </h3>
          <p className="font-cormorant text-neutral-500 text-base leading-relaxed">
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

const highlights = [
  { icon: Zap, label: "Speed", desc: "Boils water in under 90 seconds" },
  { icon: Shield, label: "Safety", desc: "Auto-off & child lock protection" },
//   { icon: Sparkles, label: "Design", desc: "Sleek frameless black glass" },
  { icon: Leaf, label: "Eco", desc: "90% energy goes directly to food" },
  { icon: Hand, label: "Easy to Use", desc: "Intuitive touch controls" },
//   { icon: Zap, label: "Speed", desc: "Boils water in under 90 seconds" },
];

const specs = [
  { label: "Model", value: "NV-410" },
  { label: "Cooking Zones", value: "4 Burners" },
  { label: "Max Power", value: "2000W" },
  { label: "Heat Levels", value: "0 – 9" },
  { label: "Booster Duration", value: "5 min" },
  { label: "Timer Range", value: "0 – 99 min" },
  { label: "Voltage", value: "220–240V" },
  { label: "Surface", value: "Ceramic Glass" },
];

const howItWorks = [
  {
    step: 1,
    title: "Place Your Cookware",
    desc: "A magnetic sensor detects compatible cookware instantly. If no pan is detected within 120 seconds, the zone automatically shuts off.",
  },
  {
    step: 2,
    title: "Electromagnetic Heating",
    desc: "A powerful coil beneath the glass generates an electromagnetic field that heats the pan directly — not the surface. This means faster cooking and cooler surroundings.",
  },
  {
    step: 3,
    title: "Precision Cooking",
    desc: "After cooking, the surface cools down rapidly since only residual heat remains. A cold surface indicator 'H' warns you until it's safe to touch.",
  },
];

const features = [
  { icon: Hand, title: "Touch Controls", desc: "Responsive slider controls for each zone — adjust heat from 0 to 9 with a simple swipe. Everything is under your fingertips." },
  { icon: Sparkles, title: "Easy Cleaning", desc: "Flat ceramic glass surface with no grooves or grates. Spills don't bake on because the surface stays cool. Just wipe and go." },
  { icon: Gauge, title: "Bezel Design", desc: "A sleek, seamless border keeps the aesthetic clean and modern, integrating flawlessly into any countertop." },
  { icon: Timer, title: "Countdown Timer", desc: "Set precise cooking timers up to 99 minutes per zone. Never overcook again — it auto-shuts when time's up." },
  { icon: Lock, title: "Child Lock", desc: "With children and automatic shut-off systems, the child safety lock gives you peace of mind at all times." },
  { icon: Thermometer, title: "Residual Heat", desc: "'H' indicator warns when the surface is still hot after use, preventing accidental burns." },
];

const comparisonData = [
  { feature: "Induction Cooktop", novella: "Instant", gas: "Slow warm-up" },
  { feature: "Safety", novella: "No flame / Auto-off", gas: "Gas leak risk" },
  { feature: "Cleaning", novella: "One wipe clean", gas: "Requires scrubbing" },
  { feature: "Energy Efficiency", novella: "90% heat to food", gas: "~40% heat to food" },
  { feature: "Speed", novella: "Fast heating", gas: "Gradual heating" },
];

const faqs = [
  {
    q: "What cookware works with induction?",
    a: "Any magnetic-based cookware works — cast iron, stainless steel with magnetic base, and specially labeled induction-compatible pots and pans. A simple magnet test on the base of your pan tells you if it's compatible.",
  },
  {
    q: "Is induction cooking safe for children?",
    a: "Absolutely. The NV-410 features a child lock system, auto-off on pan removal, and a residual heat indicator. The surface itself doesn't generate heat — only the pan does.",
  },
  {
    q: "How much energy does it save compared to gas?",
    a: "Induction cooking delivers approximately 90% of generated heat directly to the food, compared to about 40% for gas stoves. This translates to significant energy savings over time.",
  },
  {
    q: "Can I install it into my existing countertop?",
    a: "Yes. The NV-410 is designed for standard countertop cut-out installation. Detailed installation dimensions and guidelines are included in the product manual.",
  },
];

/* ─── COMPONENTS ─── */

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-montserrat font-semibold text-foreground pr-4">{q}</span>
        {open ? <ChevronUp size={20} className="text-primary shrink-0" /> : <ChevronDown size={20} className="text-muted-foreground shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

/* ─── PAGE ─── */

const Products = () => {
  const { ref: heroRef, isInView: heroIn } = useInView();
  const { ref: highlightRef, isInView: highlightIn } = useInView();
  const { ref: howRef, isInView: howIn } = useInView();
  const { ref: featRef, isInView: featIn } = useInView();
  const { ref: compareRef, isInView: compareIn } = useInView();
  const { ref: faqRef, isInView: faqIn } = useInView();
  const { ref: ctaRef, isInView: ctaIn } = useInView();

  return (
    <div className="bg-background min-h-screen">
    

      {/* ─── 1. HERO ─── */}
      <section className="relative pt-16 text-start min-h-[90vh] flex items-center  overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={productHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div
          ref={heroRef}
          className={`relative z-10 max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="max-w-5xl ">
           
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-8xl text-white  text-foreground leading-[1.1] mb-6">
              SMART<br />
              <span className="text-gradient-red">4-BURNER HUB</span>
             
            </h1>
            <p className="text-xl text-muted-foreground mb-3 font-montserrat font-bold tracking-widest">
              NV-410
            </p>
            <p className="text-secondary-foreground text-lg leading-relaxed mb-10 max-w-4xl">
              A masterpiece of design and engineering. Novella brings advanced magnetic induction technology — rare in every era. Designed for beauty, built for precision, crafted for modern life.
            </p>
          
          </div>
        </div>
      </section>

      {/* ─── 2. HIGHLIGHTS BAR ─── */}
     {/* ─── 2. HIGHLIGHTS BAR (چاککراو) ─── */}
      <section ref={highlightRef} className="relative z-20 -mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ${highlightIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {highlights.map((item, i) => (
              <CompactCard 
                key={i} // کلیلی لێرە بێت نەک لە ناو کۆمپۆنێنتەکە
                num={i}
                icon={item.icon}
                title={item.label}
                desc={item.desc}
                delay={i * 0.1} // زیادکردنی دواکەوتنی جوڵە بۆ جوانی
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. HOW IT WORKS ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={howRef}
            className={`text-center mb-20 transition-all duration-700 ${howIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            
            <h2 className="font-playfair  text-4xl sm:text-5xl text-foreground mb-4">
              HOW <span className="text-primary">INDUCTION</span>  WORKS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              It's not magic — it's science. Electromagnetic fields heat your cookware directly, leaving the surface cool.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className={`relative transition-all duration-1000 ${howIn ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                {/* shadow psht image ka */}
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
              <div className="relative border border-border  overflow-hidden">
                <img src={productLifestyle} alt="Induction cooking in action" className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {howItWorks.map(({ step, title, desc }, i) => (
                <div
                  key={step}
                  className={`flex gap-6 lg:mt-7 transition-all duration-700 ${howIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${i * 0.2}s` }}
                >
                  <div className="shrink-0 w-14 h-14  bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="font-montserrat font-black text-primary text-xl">{step}</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground text-lg mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURES ─── */}
      <section id="features" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={featRef}
            className={`text-center mb-20 transition-all duration-700 ${featIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            
            <h2 className="font-playfair  text-4xl sm:text-5xl text-foreground mb-4">
              BUILT <span className="text-primary">FOR</span> MODERN LIFE
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every detail designed to make daily cooking effortless, safe, and beautiful.
            </p>
          </div>

          {/* Product image + specs */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className={`relative transition-all duration-1000 ${featIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
              <div className="relative border border-border  overflow-hidden product-img-container">
                <img src={productTouch} alt="NV-410 Touch Controls" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-200 ${featIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <h3 className=" text-2xl text-foreground mb-2">Technical Specifications</h3>
              <div className="section-divider mb-8" />
              <div className="grid grid-cols-2 gap-6">
                {specs.map(({ label, value }) => (
                  <div key={label} className=" font-medium p-4 glass ">
                    <div className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-lg  text-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`border   p-4 glass  border-primary/20 transition-all duration-700 ${featIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h4 className="font-montserrat font-bold text-foreground mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. COMPARISON TABLE ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div
            ref={compareRef}
            className={`text-center mb-16 transition-all duration-700 ${compareIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            
            <h2 className=" text-4xl sm:text-5xl text-foreground mb-4">
              NOVELLA <span className="text-primary">VS</span> GAS
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See how induction technology outperforms traditional gas in every category.
            </p>
          </div>

          <div className={`border border-border  overflow-hidden glass transition-all duration-700 ${compareIn ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary/10 border-b border-border">
              <div className="p-5 text-lg font-montserrat font-bold text-muted-foreground tracking-wider uppercase">Feature</div>
              <div className="p-5 text-lg font-montserrat font-bold text-primary tracking-wider uppercase text-center flex items-center justify-center gap-2">
                <PlugZap size={16} /> Novella
              </div>
              <div className="p-5 text-sm font-montserrat font-bold text-muted-foreground tracking-wider uppercase text-center flex items-center justify-center gap-2">
                <Flame size={16} /> Gas Stove
              </div>
            </div>
            {/* Rows */}
            {comparisonData.map(({ feature, novella, gas }, i) => (
              <div
                key={feature}
                className={`grid grid-cols-3 border-b border-border/50 last:border-b-0 transition-all duration-500 hover:bg-primary/5 ${compareIn ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${i * 0.1 + 0.3}s` }}
              >
                <div className="p-5 text-lg text-foreground font-medium">{feature}</div>
                <div className="p-5 text-lg text-primary font-semibold text-center">{novella}</div>
                <div className="p-5 text-lg text-muted-foreground text-center">{gas}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. FAQ ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div
            ref={faqRef}
            className={`text-center mb-16 transition-all duration-700 ${faqIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            
            <h2 className=" text-4xl sm:text-5xl text-foreground">
              QUESTIONS <span className="text-primary">ANSWERED</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${faqIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <FAQItem q={faq.q} a={faq.a} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

     

      
    </div>
  );
};

export default Products;
