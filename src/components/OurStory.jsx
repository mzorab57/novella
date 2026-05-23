import homeVideo from '../assets/videos/home-video.mp4';
import logo from '../../public/assets/images/logo.jpeg';
import { useInView } from '../hooks/useInView';

const OurStory = () => {
  const { ref: imgRef, isInView: imgInView } = useInView({ threshold: 0.3 });
  const { ref: storyRef, isInView: storyIn } = useInView({ threshold: 0.3 });
  const { ref: statsRef, isInView: statsIn } = useInView({ threshold: 0.3 });

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left: Text Content ── */}
          <div
            ref={storyRef}
            className={`transition-all duration-1000 delay-200 ${
              storyIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <h3 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              IT ALL STARTED
              <br />
              WITH{' '}
              <span className="text-gradient-red">PASSION</span>
            </h3>

            {/* Quote Block */}
            <div className="border-l-2 border-primary/60 pl-5 mb-8">
              <p className="text-neutral-300 text-lg italic leading-relaxed">
                "A kitchen is not just a place to prepare food — it's the heart of a home."
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-neutral-400 text-base leading-relaxed">
                At Novella, we believe that a kitchen is not just a place to prepare food — 
                it's a home. It's where families gather, where creativity flourishes, and 
                where memories are crafted over the warmth of a shared meal.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed">
                Our story is one of relentless pursuit: to preserve the heritage of Italian
                craftsmanship while embracing the latest in induction technology. Every piece
                that bears the Novella name has been designed with one clear purpose — to bring
                the art of Italian living into your home.
              </p>
            </div>

            {/* Logo Badge */}
            <div className="mt-10 flex items-center gap-5 p-4 rounded-2xl border border-white/5 bg-white/[0.02] w-fit">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-primary/30 animate-glow-pulse flex-shrink-0">
                <img
                  src={logo}
                  alt="Novella"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-montserrat text-xl text-foreground tracking-widest">
                  NOVÉLLA
                </div>
                <div className="text-primary text-[10px] tracking-[0.35em] uppercase font-light mt-0.5">
                  wave of innovation
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Video ── */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-1000 delay-400 ${
              imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="relative group">

              {/* Outer glow */}
              <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-all duration-700" />

              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary/60 rounded-tl-lg z-10" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary/60 rounded-tr-lg z-10" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary/60 rounded-bl-lg z-10" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary/60 rounded-br-lg z-10" />

              {/* Video */}
              <div className="relative border border-white/10 rounded-2xl overflow-hidden animate-float shadow-2xl">
                <video
                  src={homeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full md:h-[60rem] lg:h-[50rem] object-cover"
                />
                {/* Overlay gradient on video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Badge on video */}
              <div className="absolute -bottom-5 left-6 z-10 bg-black border border-primary/40 px-5 py-2.5 rounded-xl flex items-center gap-3 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-light">
                  Our Kitchen Journey
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ── Stats Row ── */}
        <div
          ref={statsRef}
          className={`mt-28 grid grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            statsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '2018', label: 'Founded' },
            { value: '40+', label: 'Countries' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="font-montserrat text-4xl sm:text-5xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-500 text-xs tracking-[0.3em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurStory;