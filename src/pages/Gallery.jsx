import { Aos } from "../components/ui/aos";
import aboutSection from "/assets/images/hero2.jpeg";
import aboutCraftsmanship from "../assets/about-craftsmanship.jpeg";
import aboutPhilosophy from "/assets/images/see-through.jpg";
import b2bWork from "/assets/images/hero3.png";
import goalHero from "../assets/goal-hero.jpeg";
import productHero from "/assets/images/hero3.png";
import productLifestyle from "../assets/product-lifestyle.jpeg";
import nv410Product from "../assets/nv410-product.jpeg";
import homeVideo from "../assets/videos/home-video.mp4";
import video1 from "../assets/videos/video1.mp4";

const galleryItems = [
  {
    type: "video",
    src: homeVideo,
    title: "Wave Of Innovation",
    label: "Motion",
    className: "md:col-span-2 md:row-span-2 min-h-[22rem] md:min-h-[36rem]",
  },
  {
    type: "image",
    src: productHero,
    title: "Precision In Focus",
    label: "Product",
    className: "min-h-[22rem]",
  },
  {
    type: "image",
    src: aboutSection,
    title: "Crafted Atmosphere",
    label: "Lifestyle",
    className: "min-h-[22rem]",
  },
  {
    type: "image",
    src: nv410Product,
    title: "NV-410 Signature",
    label: "Detail",
    className: "md:col-span-2 min-h-[22rem]",
  },
    {
    type: "video",
    src: video1,
    title: "Wave Of Innovation",
    label: "Motion",
    className: "md:col-span-2 md:row-span-2 min-h-[22rem] md:min-h-[36rem]",
  },
  {
    type: "image",
    src: productLifestyle,
    title: "Modern Living",
    label: "Interior",
    className: "min-h-[24rem]",
  },
  {
    type: "image",
    src: goalHero,
    title: "Heat. Light. Balance.",
    label: "Design",
    className: "min-h-[24rem]",
  },
  {
    type: "image",
    src: aboutCraftsmanship,
    title: "Built With Intent",
    label: "Material",
    className: "min-h-[24rem]",
  },
  {
    type: "image",
    src: b2bWork,
    title: "Professional Scenes",
    label: "Experience",
    className: "md:col-span-2 min-h-[22rem]",
  },
  {
    type: "image",
    src: aboutPhilosophy,
    title: "Quiet Luxury",
    label: "Mood",
    className: "min-h-[22rem]",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative flex min-h-screen items-end overflow-hidden pt-24">
        <div className="absolute inset-0">
          <video
            src={homeVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/25 to-black/55" />
        </div>

        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <Aos animation="fade-up">
            <div className="max-w-4xl">
             
              <h1 className="font-montserrat text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
               Modern Clean

 

                <br />
                <span className="text-gradient-red">VISUAL</span> STORIES
                <br />
               IN MOTION
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                A curated wall of Novella visuals - product details, spatial moments, and video all in
                one place, with no filters and no distractions.
              </p>
            </div>
          </Aos>

         
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Aos animation="fade-up">
            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.35em] text-primary">Visual Archive</div>
                <h2 className="mt-4 font-montserrat text-4xl leading-tight text-foreground sm:text-5xl">
                  A simple gallery with image and video together.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Each frame keeps the same dark, premium mood of the website while letting the media take
                the focus.
              </p>
            </div>
          </Aos>

          <div className="grid auto-rows-[minmax(18rem,auto)] gap-5 md:grid-cols-3">
            {galleryItems.map((item, index) => (
              <Aos
                key={`${item.title}-${index}`}
                animation="fade-up"
                delay={Math.min(index * 60, 240)}
                className={item.className}
              >
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
                  <div className="absolute inset-0">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-95" />
                  <div className="absolute inset-0 border border-white/5" />

                  <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                    <div className="mb-3 text-[11px] uppercase tracking-[0.35em] text-primary/90">
                      {item.label}
                    </div>
                    <h3 className="max-w-xs font-montserrat text-2xl leading-tight text-white sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </Aos>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
