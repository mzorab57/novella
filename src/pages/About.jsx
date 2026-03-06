
import { useInView } from "../hooks/useInView";
import { Heart, Gem, Eye, Layers, Sparkles, Quote, ArrowRight } from "lucide-react";
import aboutHero from "../assets/goal.jpeg";
import aboutCraftsmanship from "../assets/about-craftsmanship.jpeg";
import aboutPhilosophy from "../assets/about-philosophy.jpeg";
import novellaLogo from "../../public/assets/images/logo.jpeg";

const philosophyItems = [
  {
    icon: Gem,
    title: "Minimalism",
    desc: "Our designs speak through silence. Clean lines, pure surfaces — we strip away the unnecessary so only beauty remains.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    desc: "We use only the finest European-grade materials. Every component is tested, refined, and built to last generations.",
  },
  {
    icon: Layers,
    title: "Attention to Detail",
    desc: "From the curve of a touch panel to the weight of a knob — every millimeter is intentional, every detail considered.",
  },
];



const About = () => {
  const { ref: heroTextRef, isInView: heroTextIn } = useInView(0.1);
  const { ref: storyRef, isInView: storyIn } = useInView();
  const { ref: storyImgRef, isInView: storyImgIn } = useInView();
  const { ref: philoHeadRef, isInView: philoHeadIn } = useInView();
  const { ref: philoCardsRef, isInView: philoCardsIn } = useInView();
  const { ref: diffRef, isInView: diffIn } = useInView();
  const { ref: ceoRef, isInView: ceoIn } = useInView();
  const { ref: ctaRef, isInView: ctaIn } = useInView();

  return (
    <div className="bg-background min-h-screen">
      

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Italian Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-float" />
        <div className="absolute bottom-1/3 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-float delay-500" />
        <div className="absolute top-20 right-1/4 w-20 h-20 rounded-full border border-primary/10 animate-float delay-300" />

        <div
          ref={heroTextRef}
          className={`relative z-10 text-start max-w-5xl px-4 transition-all duration-1000 ${
            heroTextIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
         

          <h1 className="font-montserrat  text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[0.95]">
            CELEBRATING
            <br />
            <span className="text-gradient-red">ITALIAN </span>DESIGN
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Where the art of Italian craftsmanship meets the precision of modern technology.
            Every Novella product tells a story of passion, beauty, and innovation.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary/60 animate-float">
            <div className="w-px h-8 bg-primary/40" />
            <span className="text-xs tracking-[0.3em] uppercase"> NOVÈLLA</span>
            <div className="w-px h-8 bg-primary/40" />
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div
              ref={storyRef}
              className={`transition-all duration-1000 ${
                storyIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
             

              <h2 className="font-montserrat  text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
                IT ALL STARTED
                <br />
                WITH <span className="text-gradient-red">PASSION</span>
              </h2>

              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Novella, we believe that a kitchen is not just a place to prepare food — it's a
                  home. It's where families gather, where creativity flourishes, and where memories are
                  crafted over the warmth of a shared meal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our story is one of relentless pursuit: to preserve the heritage of Italian
                  craftsmanship while embracing the latest in induction technology. Every piece that
                  bears the Novella name has been designed with a clear purpose — to bring the art of
                  Italian living into your home.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From our first sketch to the final product, Novella has been driven by an unwavering
                  ambition: to merge beauty with precision, tradition with innovation, and elegance
                  with everyday function.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
               
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-primary/30 animate-glow-pulse">
                
                  <img src={novellaLogo} alt="Novella" className="w-full h-full object-cover" />
                  
                </div>
                <div>
                  <div className="font-montserrat  text-2xl text-foreground tracking-tight">
                    NOVÉLLA
                  </div>
                  <div className="text-primary text-xs tracking-[0.3em] uppercase font-light">
                    wave of innovation
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              ref={storyImgRef}
              className={`relative transition-all duration-1000 delay-300 ${
                storyImgIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative  overflow-hidden border border-border">
                <img
                  src={aboutCraftsmanship}
                  alt="Italian Craftsmanship"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/20 rounded-2xl animate-float" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div
              className={`relative  overflow-hidden transition-all duration-1000 ${
                philoHeadIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src={aboutPhilosophy}
                alt="Design Philosophy"
                className="w-full h-[450px] object-cover "
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent rounded-2xl" />
            </div>

            {/* Text */}
            <div
              ref={philoHeadRef}
              className={`transition-all duration-1000 ${
                philoHeadIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              

              <h2 className="font-montserrat  text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
                DESIGN 
                <br />
                <span className="text-gradient-red">IS NOT </span> JUST BEAUTY
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                At Novella, we don't just create appliances — we craft experiences. Our philosophy
                is rooted in the Italian tradition of "La Dolce Vita," where design serves life,
                not the other way around.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our cooktops are not merely functional tools. They are pieces of furniture-grade
                technology designed to blend seamlessly into the most discerning kitchens worldwide.
              </p>
            </div>
          </div>

          {/* Philosophy cards */}
          <div
            ref={philoCardsRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {philosophyItems.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group relative border border-border p-4 glass card-hover border-glow transition-all duration-700 ${
                  philoCardsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16  bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h4 className="font-montserrat font-bold text-xl text-foreground mb-3">
                    {title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ===== CEO MESSAGE ===== */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

        <div
          ref={ceoRef}
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            ceoIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Quote size={48} className="text-primary/30 mx-auto mb-8" />

          <blockquote className="font-montserrat font-light text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed mb-10 italic">
            "Our goal is to embody the spirit of{" "}
            <span className="text-gradient-red font-semibold not-italic">La Dolce Vita</span> — the
            sweet life. Novella is more than a brand. It's a promise: a cooktop that brings warmth,
            a call that gathers the family, and a design that makes your kitchen the heart of your home."
          </blockquote>

          <div className="flex items-center justify-center gap-4 ">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 animate-glow-pulse">
              <img src={novellaLogo} alt="Novella" className="w-full h-full object-cover" />
               {/* shadow psht image ka */}
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
            </div>
            <div className="text-left">
              <div className="font-montserrat font-bold text-foreground">Novella Team</div>
              <div className="text-primary text-sm tracking-wider">Leadership</div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== WHY DIFFERENT ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        </div>

        <div
          ref={diffRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-20">
            <div
              className={`transition-all duration-1000 ${
                diffIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              

              <h2 className="font-montserrat  text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                WHAT MAKES US
                <br />
                <span className="text-gradient-red">DIFFERENT</span>
              </h2>

              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                We don't just sell cooktops. We deliver a commitment to your kitchen — technology
                that understands you, design that inspires you, and support that never leaves you.
              </p>
            </div>
          </div>

         

          {/* Feature highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Technology Serves Design",
                desc: "Our induction cooktops aren't just smart — they're beautiful. Touch panels that respond like silk, surfaces that gleam like obsidian, and heat zones that know exactly what you need.",
              },
              {
                icon: Eye,
                title: "La Dolce Vita in Every Detail",
                desc: "Inspired by the Italian spirit of living well, every Novella product is designed to transform your daily cooking routine into a moment of joy, elegance, and creative expression.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group relative border border-border  p-10 glass card-hover border-glow transition-all duration-700 ${
                  diffIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.5 + i * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex gap-6">
                  <div className="w-14 h-14  bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xl text-foreground mb-3">
                      {title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      


   
    </div>
  );
};

export default About;
