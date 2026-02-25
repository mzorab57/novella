import { useState, useEffect, useRef } from 'react';

// ═══ REVEAL ANIMATION COMPONENT ═══
const Reveal = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: 'translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    scale: 'scale-90',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : `opacity-0 ${transforms[direction]}`
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// ═══ ANIMATED WAVE SVG ═══
const WaveAnimation = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
    {/* Wave Layer 1 - Slowest, Back */}
    <svg
      className="relative block w-[200%] h-[120px] md:h-[180px] animate-wave-slow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C120,100 240,0 360,50 C480,100 600,20 720,60 C840,100 960,10 1080,50 C1200,90 1320,30 1440,60 L1440,120 L0,120 Z"
        fill="rgba(220, 38, 38, 0.08)"
      />
    </svg>

    {/* Wave Layer 2 - Medium */}
    <svg
      className="absolute bottom-0 left-0 block w-[200%] h-[100px] md:h-[150px] animate-wave-medium"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,60 C160,10 320,100 480,50 C640,0 800,80 960,40 C1120,0 1280,70 1440,30 L1440,120 L0,120 Z"
        fill="rgba(220, 38, 38, 0.12)"
      />
    </svg>

    {/* Wave Layer 3 - Fastest, Front */}
    <svg
      className="absolute bottom-0 left-0 block w-[200%] h-[80px] md:h-[120px] animate-wave-fast"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 C200,40 400,90 600,50 C800,10 1000,70 1200,40 C1300,25 1380,55 1440,45 L1440,120 L0,120 Z"
        fill="rgba(220, 38, 38, 0.18)"
      />
    </svg>

    {/* Wave Layer 4 - Bottom solid */}
    <svg
      className="absolute bottom-0 left-0 block w-[200%] h-[50px] md:h-[80px] animate-wave-base"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,90 C240,60 480,100 720,70 C960,40 1200,80 1440,60 L1440,120 L0,120 Z"
        fill="rgba(220, 38, 38, 0.25)"
      />
    </svg>
  </div>
);

// ═══ FLOATING PARTICLES ═══
const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.size > 3 ? 'rgba(220, 38, 38, 0.3)' : 'rgba(255, 255, 255, 0.2)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

// ═══ ANIMATED COUNTER ═══
const Counter = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = end / 60;
    const interval = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(interval);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-bold text-3xl md:text-4xl text-red-600">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-2">{label}</div>
    </div>
  );
};

// ═══ COOKTOP ILLUSTRATION ═══
const CooktopIllustration = ({ className }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="360" height="260" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
    <rect x="30" y="30" width="340" height="240" rx="8" fill="#111" stroke="#222" strokeWidth="0.5"/>
    {/* Burner 1 */}
    <circle cx="130" cy="110" r="45" stroke="#dc2626" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="130" cy="110" r="35" stroke="#dc2626" strokeWidth="1" opacity="0.5"/>
    <circle cx="130" cy="110" r="25" stroke="#dc2626" strokeWidth="1.5" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="130" cy="110" r="4" fill="#dc2626" opacity="0.9">
      <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    {/* Burner 2 */}
    <circle cx="270" cy="110" r="40" stroke="#dc2626" strokeWidth="1.5" opacity="0.2"/>
    <circle cx="270" cy="110" r="30" stroke="#dc2626" strokeWidth="1" opacity="0.4"/>
    <circle cx="270" cy="110" r="20" stroke="#dc2626" strokeWidth="1.5" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="270" cy="110" r="3" fill="#dc2626" opacity="0.8">
      <animate attributeName="r" values="2;4;2" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    {/* Burner 3 */}
    <circle cx="130" cy="210" r="35" stroke="#dc2626" strokeWidth="1.5" opacity="0.2"/>
    <circle cx="130" cy="210" r="25" stroke="#dc2626" strokeWidth="1" opacity="0.35"/>
    <circle cx="130" cy="210" r="15" stroke="#dc2626" strokeWidth="1.5" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite"/>
    </circle>
    {/* Burner 4 */}
    <circle cx="270" cy="210" r="50" stroke="#dc2626" strokeWidth="1.5" opacity="0.25"/>
    <circle cx="270" cy="210" r="40" stroke="#dc2626" strokeWidth="1" opacity="0.35"/>
    <circle cx="270" cy="210" r="30" stroke="#dc2626" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="270" cy="210" r="20" stroke="#dc2626" strokeWidth="1" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="270" cy="210" r="5" fill="#dc2626" opacity="0.9">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
    </circle>
    {/* Control panel */}
    <rect x="165" y="260" width="70" height="4" rx="2" fill="#dc2626" opacity="0.4">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
    </rect>
  </svg>
);

// ═══ MAIN COMPONENT ═══
export default function Wave() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('mousemove', handleMouse); };
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @keyframes wave-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-medium {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(-75%); }
        }
        @keyframes wave-fast {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(-60%); }
        }
        @keyframes wave-base {
          0% { transform: translateX(-5%); }
          100% { transform: translateX(-55%); }
        }
        .animate-wave-slow { animation: wave-slow 20s linear infinite; }
        .animate-wave-medium { animation: wave-medium 15s linear infinite; }
        .animate-wave-fast { animation: wave-fast 10s linear infinite; }
        .animate-wave-base { animation: wave-base 12s linear infinite; }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-120px) translateX(30px) scale(1.5); }
          90% { opacity: 1; }
        }
        .animate-float-particle { animation: float-particle 12s ease-in-out infinite; }

        @keyframes hero-text-reveal {
          0% { clip-path: inset(0 100% 0 0); opacity: 0; }
          100% { clip-path: inset(0 0% 0 0); opacity: 1; }
        }
        .animate-text-reveal {
          animation: hero-text-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        @keyframes slide-up-fade {
          0% { transform: translateY(60px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up-fade 0.8s ease-out forwards; }
        .animate-slide-up-d1 { animation: slide-up-fade 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up-d2 { animation: slide-up-fade 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-slide-up-d3 { animation: slide-up-fade 0.8s ease-out 0.6s forwards; opacity: 0; }
        .animate-slide-up-d4 { animation: slide-up-fade 0.8s ease-out 0.8s forwards; opacity: 0; }
        .animate-slide-up-d5 { animation: slide-up-fade 0.8s ease-out 1.0s forwards; opacity: 0; }
        .animate-slide-up-d6 { animation: slide-up-fade 0.8s ease-out 1.2s forwards; opacity: 0; }

        @keyframes line-grow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-line-grow { animation: line-grow 1.5s ease-out 0.8s forwards; transform-origin: left; transform: scaleX(0); }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.05); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.15); }
        }
        .animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }

        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(12px); opacity: 1; }
        }
        .animate-scroll { animation: scroll-indicator 2s ease-in-out infinite; }

        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate-slow { animation: rotate-slow 30s linear infinite; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(220,38,38,0.08), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes border-draw {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-pulse-ring { animation: pulse-ring 2s ease-out infinite; }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }

        .gradient-text {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #dc2626 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-red-50/30">
        {/* Background Decorative Elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translate(${mousePos.x * 10 - 5}px, ${mousePos.y * 10 - 5}px)` }}
        >
          {/* Large decorative circle */}
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full border border-red-100/50 animate-rotate-slow" />
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full border border-red-200/30 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '45s' }} />
          
          {/* Small decorative elements */}
          <div className="absolute top-20 left-[15%] w-2 h-2 bg-red-400/30 rounded-full animate-pulse" />
          <div className="absolute top-40 left-[25%] w-1 h-1 bg-red-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 right-[20%] w-3 h-3 bg-red-200/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Gradient orbs */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-50/30 rounded-full blur-3xl" />
        </div>

        <FloatingParticles />

        {/* Parallax background lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute left-0 right-0 h-px bg-red-900" style={{ top: `${(i + 1) * 12}%` }} />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Text Content */}
            <div className="order-2 lg:order-1">
              {/* Overline */}
              <div className="animate-slide-up-d1 flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-red-600 to-transparent animate-line-grow" />
                <span className="font-inter text-[10px] uppercase tracking-[0.5em] text-red-600/70">
                  Premium Collection 2024
                </span>
              </div>

              {/* Main heading */}
              <div className="animate-slide-up-d2">
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-4">
                  <span className="block text-gray-900">Novèlla</span>
                  <span className="block gradient-text mt-2">Induction</span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="animate-slide-up-d3 mt-8">
                <p className="font-cormorant text-xl md:text-2xl text-gray-500 leading-relaxed max-w-md italic">
                  Where culinary precision meets timeless elegance — crafted for those who demand perfection.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="animate-slide-up-d4 mt-10 flex flex-wrap items-center gap-5">
                <button className="group relative px-8 py-4 bg-red-600 text-white font-inter text-sm uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-0.5">
                  <span className="relative z-10">Discover More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
                <button className="group flex items-center gap-3 px-6 py-4 border border-gray-200 font-inter text-sm uppercase tracking-[0.2em] text-gray-600 transition-all duration-500 hover:border-red-300 hover:text-red-600 hover:-translate-y-0.5">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Film
                </button>
              </div>

              {/* Stats */}
              <div className="animate-slide-up-d5 mt-14 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                <Counter end={99} suffix="%" label="Efficiency" />
                <Counter end={17} suffix="" label="Heat Levels" />
                <Counter end={4} suffix="" label="Zones" />
              </div>
            </div>

            {/* Right - Visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="animate-slide-up-d2 relative">
                {/* Outer decorative ring */}
                <div className="absolute -inset-8 border border-red-100/30 rounded-sm animate-pulse" style={{ animationDuration: '4s' }} />
                
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent rounded-sm" />
                
                {/* Main illustration container */}
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 md:p-10 rounded-sm animate-glow-pulse border border-gray-100">
                  <CooktopIllustration className="w-full h-auto" />
                  
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 animate-slide-up-d4">
                    <span className="font-inter text-[9px] uppercase tracking-[0.3em]">New 2024</span>
                  </div>
                  
                  {/* Temperature indicator */}
                  <div className="absolute -bottom-3 left-8 bg-white shadow-xl shadow-red-100/50 border border-gray-100 px-5 py-3 flex items-center gap-3 animate-slide-up-d5">
                    <div className="relative w-3 h-3">
                      <div className="absolute inset-0 bg-red-500 rounded-full" />
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse-ring" />
                    </div>
                    <span className="font-inter text-xs text-gray-600 tracking-wider">Active Zone</span>
                    <span className="font-playfair text-lg text-red-600 font-bold">240°</span>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-red-400/40" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-red-400/40" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-red-400/40" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-red-400/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-slide-up-d6">
          <span className="font-inter text-[9px] uppercase tracking-[0.4em] text-gray-400">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-red-300 to-transparent relative overflow-hidden">
            <div className="absolute w-full h-3 bg-red-500 animate-scroll" />
          </div>
        </div>

        {/* Wave Animation */}
        <WaveAnimation />
      </section>

      {/* ═══ DESIGN PHILOSOPHY ═══ */}
      <section id="design" className="relative py-28 md:py-40 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200/40 to-transparent" />
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #dc2626 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Text */}
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-red-500/50" />
                  <span className="font-inter text-[10px] uppercase tracking-[0.5em] text-red-500/70">Design Philosophy</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight mb-8 text-gray-900">
                  Seamless<br />
                  <span className="gradient-text">Elegance</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-cormorant text-lg md:text-xl text-gray-500 leading-relaxed mb-6">
                  Designed for the modern sophisticate, the Novèlla Induction cooktop integrates flawlessly into any
                  high-end kitchen. Its ultra-slim profile allows for a perfectly flush installation with your countertop,
                  creating an unbroken, elegant surface.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="font-cormorant text-lg md:text-xl text-gray-500 leading-relaxed mb-10">
                  The premium black ceramic glass and minimalist controls offer a timeless aesthetic that complements
                  marble, quartz, or wood, elevating the overall design of your culinary space.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-red-400/40" />
                  <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-gray-400">Flush Mount Installation</span>
                </div>
              </Reveal>
            </div>

            {/* Image */}
         
<Reveal delay={0.2}>
  <div className="relative group">
    
    {/* Outer rotating border */}
    <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute inset-0 rounded-2xl border border-dashed border-luxury-gold/20 animate-[spin_20s_linear_infinite]" />
    </div>

    {/* Glowing orbs behind */}
    <div className="absolute -top-12 -right-12 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl group-hover:bg-luxury-gold/10 transition-all duration-1000" />
    <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-luxury-gold/3 rounded-full blur-3xl group-hover:bg-luxury-gold/8 transition-all duration-1000 delay-200" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-luxury-gold/[0.02] rounded-full blur-2xl group-hover:w-96 group-hover:h-96 transition-all duration-1000" />

    {/* Animated border frame - outer */}
    <div className="absolute -inset-5 rounded-lg overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 350">
        <rect
          x="2" y="2" width="396" height="346" rx="8"
          fill="none"
          stroke="url(#gold-gradient)"
          strokeWidth="0.5"
          strokeDasharray="800"
          strokeDashoffset="800"
          className="group-hover:animate-[borderDraw_2s_ease-out_forwards]"
        />
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.6)" />
            <stop offset="50%" stopColor="rgba(212,175,55,0.2)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.6)" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Inner border with gradient */}
    <div className="absolute -inset-[1px] bg-gradient-to-br from-luxury-gold/20 via-transparent to-luxury-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    {/* Main container */}
    <div className="relative overflow-hidden rounded-lg">
      
      {/* Shimmer sweep effect */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-lg">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-luxury-gold/[0.07] to-transparent skew-x-12 group-hover:animate-[shimmerSweep_1.5s_ease-in-out]" />
      </div>

      {/* Background layers */}
      <div className="relative bg-gradient-to-br from-luxury-charcoal/80 via-luxury-charcoal/60 to-luxury-charcoal/80 p-10 md:p-12">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />

        {/* Radial glow behind illustration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-luxury-gold/5 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 group-hover:bg-luxury-gold/10 transition-all duration-1000" />

        {/* The Cooktop Illustration */}
        <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
          <CooktopIllustration className="w-full h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.05)]" />
        </div>

        {/* Floating accent particles */}
        <div className="absolute top-6 right-8 w-1 h-1 bg-luxury-gold/40 rounded-full animate-[floatUp_4s_ease-in-out_infinite]" />
        <div className="absolute top-12 right-16 w-0.5 h-0.5 bg-luxury-gold/30 rounded-full animate-[floatUp_5s_ease-in-out_1s_infinite]" />
        <div className="absolute bottom-8 left-10 w-1.5 h-1.5 bg-luxury-gold/20 rounded-full animate-[floatUp_6s_ease-in-out_2s_infinite]" />
        <div className="absolute top-1/3 left-6 w-0.5 h-0.5 bg-luxury-gold/30 rounded-full animate-[floatUp_4.5s_ease-in-out_0.5s_infinite]" />
      </div>
    </div>

    {/* Corner accents - enhanced */}
    <div className="absolute -top-3 -left-3 w-8 h-8">
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-luxury-gold/60 to-transparent group-hover:w-10 transition-all duration-500" />
      <div className="absolute top-0 left-0 h-full w-[1.5px] bg-gradient-to-b from-luxury-gold/60 to-transparent group-hover:h-10 transition-all duration-500" />
      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-luxury-gold/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-0.5 -translate-y-0.5" />
    </div>
    <div className="absolute -top-3 -right-3 w-8 h-8">
      <div className="absolute top-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-luxury-gold/60 to-transparent group-hover:w-10 transition-all duration-500" />
      <div className="absolute top-0 right-0 h-full w-[1.5px] bg-gradient-to-b from-luxury-gold/60 to-transparent group-hover:h-10 transition-all duration-500" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-luxury-gold/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-0.5 -translate-y-0.5" />
    </div>
    <div className="absolute -bottom-3 -left-3 w-8 h-8">
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-luxury-gold/60 to-transparent group-hover:w-10 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 h-full w-[1.5px] bg-gradient-to-t from-luxury-gold/60 to-transparent group-hover:h-10 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-luxury-gold/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-0.5 translate-y-0.5" />
    </div>
    <div className="absolute -bottom-3 -right-3 w-8 h-8">
      <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-luxury-gold/60 to-transparent group-hover:w-10 transition-all duration-500" />
      <div className="absolute bottom-0 right-0 h-full w-[1.5px] bg-gradient-to-t from-luxury-gold/60 to-transparent group-hover:h-10 transition-all duration-500" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-luxury-gold/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-0.5 translate-y-0.5" />
    </div>

    {/* Floating label badge */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-8 transition-all duration-500">
      <div className="bg-luxury-charcoal/90 backdrop-blur-sm border border-luxury-gold/20 px-4 py-1.5 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-luxury-gold/60 rounded-full animate-pulse" />
        <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-luxury-gold/70">Premium Design</span>
      </div>
    </div>

    {/* Side accent line */}
    <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 group-hover:-right-10 transition-all duration-700">
      <div className="w-px h-8 bg-gradient-to-b from-transparent to-luxury-gold/40" />
      <div className="w-1.5 h-1.5 bg-luxury-gold/30 rounded-full" />
      <div className="w-px h-16 bg-luxury-gold/20" />
      <div className="w-1.5 h-1.5 bg-luxury-gold/30 rounded-full" />
      <div className="w-px h-8 bg-gradient-to-t from-transparent to-luxury-gold/40" />
    </div>

  </div>
</Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES SECTION ═══ */}
      <section className="relative py-28 bg-gray-950 text-white overflow-hidden">
        {/* Red accent wave at top */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[200%] h-[80px] animate-wave-fast" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C200,40 400,90 600,50 C800,10 1000,70 1200,40 C1300,25 1380,55 1440,45 L1440,120 L0,120 Z" fill="rgba(220, 38, 38, 0.15)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <span className="font-inter text-[10px] uppercase tracking-[0.5em] text-red-500/70 mb-4 block">Features</span>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl">
                Precision in Every <span className="text-red-500">Detail</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '◇', title: 'Smart Detection', desc: 'Automatically detects cookware size and adjusts the heating zone for optimal energy use.' },
              { icon: '○', title: 'Touch Control', desc: 'Intuitive slider controls with haptic feedback for precise temperature management.' },
              { icon: '□', title: 'Safety Lock', desc: 'Advanced child safety lock and automatic shutoff for complete peace of mind.' },
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="group relative p-8 border border-white/5 hover:border-red-500/30 transition-all duration-700 hover:-translate-y-2 bg-white/[0.02] hover:bg-red-500/[0.03]">
                  <div className="text-3xl text-red-500/60 mb-6 group-hover:text-red-400 transition-colors duration-500">{feature.icon}</div>
                  <h3 className="font-playfair text-xl mb-4 group-hover:text-red-300 transition-colors duration-500">{feature.title}</h3>
                  <p className="font-cormorant text-gray-400 leading-relaxed text-lg">{feature.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/0 group-hover:via-red-500/50 to-transparent transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-[200%] h-[60px] animate-wave-medium" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C160,10 320,100 480,50 C640,0 800,80 960,40 C1120,0 1280,70 1440,30 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>
    </div>
  );
}