import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { useInView } from "../hooks/useInView"; 
import b2bHero from "../assets/b2b-bg.jpeg";
import b2bConsultation from "../assets/b2b-work.jpeg";
import {
  Building2,
  Utensils,
  Hotel,
  ChefHat,
  Shield,
  Wrench,
  Flame,
  Award,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  FileText,
  Settings,
  HeadphonesIcon,
  Home,
  Store,
  PenTool,
  Send,
  User,
  Phone,
  Mail,
  Briefcase,
  MessageSquare,
  Hash,
} from "lucide-react";
import Parallax from "@/components/ui/Parallax";
import ParallaxText from "@/components/ui/ParallaxText";

/* ─── Hero ─── */
const HeroSection = () => {
  const { ref, isInView } = useInView(0.1);
  return (
     
      <section className="relative pt-16 text-start min-h-[90vh] flex items-center  overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
            <Parallax>
          <img src={b2bHero} alt="" className="w-full h-screen object-cover" />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div
          ref={ref}
          className={`relative z-10 max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
            <ParallaxText>
          <div className="max-w-5xl ">
           
             <h1 className="font-montserrat  text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] mb-6">
          B2B
          <br />
          <span className="text-gradient-red">PARTNERSHIPS</span>
        </h1>
        <span className="text-neutral-300 text-2xl italic">Business & Projects</span>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl my-5 leading-relaxed">
          Elevate your commercial projects with Novella's premium induction technology.
          Tailored solutions for businesses, designers, and developers.
        </p>
          </div>
          </ParallaxText>
        </div>
      </section>
  );
};

/* ─── Why Novella ─── */
const whyReasons = [
  {
    icon: Award,
    title: "Project Quality Standards",
    desc: "Novella induction cooktops bring European-quality design and advanced technology to every project, ensuring premium finishes for apartments and villas.",
  },
  {
    icon: Wrench,
    title: "Technical Support & Fabric Samples",
    desc: "We don't just sell products — we provide technical guidance, fabric samples, and a dedicated team ready for any project need.",
  },
  {
    icon: Shield,
    title: "Safety & Weight Efficiency",
    desc: "Induction cooktops are lighter, safer, and more efficient than gas alternatives — eliminating fire risks in residential buildings.",
  },
];

const WhySection = () => {
  const { ref: headRef, isInView: headIn } = useInView();
  const { ref: contentRef, isInView: contentIn } = useInView();

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`text-center mb-20 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
         
          <h2 className="font-montserrat  text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            WHY CHOOSE <span className="text-gradient-red">NOVELLA</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A new standard for projects — combining innovation, reliability, and European craftsmanship.
          </p>
        </div>

        <div
          ref={contentRef}
          className="grid md:grid-cols-3 "
        >
          {whyReasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`relative group p-8   ${i === 0 ? 'border-r border-b border-primary/30' : ''} ${i === 1 ? 'border-t bg-gradient-to-br from-primary/5 to-transparent opacity-100 md:border-r border-l md:border-l-0  border-primary/30' : ''} ${i === 2 ? 'border-b border-t md:border-t-0 border-r md:border-r-0  border-primary/30' : ''} transition-all duration-700 ${
                contentIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0  transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Who We Work With ─── */
const partners = [
  {
    icon: Home,
    label: "Homeowners",
    desc: "Clean kitchen solutions for apartments, villas, and residential buildings with tailored installation support.",
  },
  {
    icon: Store,
    label: "Showrooms & Retailers",
    desc: "Backed by Novella's marketing, brand trust, and competitive pricing to drive your sales.",
  },
  {
    icon: PenTool,
    label: "Designers & Engineers",
    desc: "We provide files, specifications, and dimensions for the smoothest integration into your kitchen designs.",
  },
];

const PartnersSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-32  relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-20">
            
            <h2 className="  text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              WHO WE <span className="text-gradient-red">WORK WITH</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-2">
            {partners.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className={` relative overflow-hidden  border border-border bg-background p-10 transition-all duration-700 ${i === 0 ? '-skew-x-12 -rotate-12 ' : ''} ${i === 1 ? '-skew-x-12 -rotate-6 ' : ''} ${i === 2 ? '-skew-x-12 -rotate-12' : ''} ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                {/* top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent  origin-left transition-transform duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6  transition-transform duration-300">
                  <Icon size={30} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-foreground mb-3">{label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Process Steps ─── */
const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Consultation",
    desc: "Our engineering team assesses your project dimensions, requirements, and the best pricing for your scale.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Custom Offer",
    desc: "We present the best solutions and pricing tailored to your project scope and timeline.",
  },
  {
    icon: Settings,
    num: "03",
    title: "Installation & Setup",
    desc: "Seamless delivery and professional installation, ensuring every appliance is perfectly integrated.",
  },
  {
    icon: HeadphonesIcon,
    num: "04",
    title: "After-Sales Support",
    desc: "Ongoing warranty, maintenance, and continuous monitoring to ensure long-term satisfaction.",
  },
];

const ProcessSection = () => {
  const { ref: headRef, isInView: headIn } = useInView();
  const { ref: stepsRef, isInView: stepsIn } = useInView();

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`text-center mb-20 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          
          <h2 className="font-montserrat  text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            HOW WE <span className="text-gradient-red">WORK</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined process designed to make your experience seamless from start to finish.
          </p>
        </div>

        {/* Image + Steps side by side */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${headIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative  overflow-hidden border-glow">
              <img src={b2bConsultation} alt="Consultation" className="w-full h-[440px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
          </div>

          {/* Steps */}
          <div ref={stepsRef} className="space-y-6">
            {steps.map(({ icon: Icon, num, title, desc }, i) => (
              <div
                key={num}
                className={`group flex gap-6 p-4  border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-500 ${
                  stepsIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-primary/70 font-montserrat  text-xs tracking-widest">{num}</span>
                    <h3 className="font-montserrat font-bold text-lg text-foreground">{title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Inquiry Form ─── */
const InquiryForm = () => {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    workType: "",
    phone: "",
    city: "",
    units: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full bg-card border border-border rounded-lg px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all";

  return (
    <section id="b2b-inquiry" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="section-divider" />
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Get Started</span>
            <div className="section-divider rotate-180" />
          </div>
          <h2 className="font-montserrat  text-4xl sm:text-5xl text-foreground mb-4">
            BUSINESS <span className="text-gradient-red">INQUIRY</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fill out the form below and our team will get back to you within 24 hours with a tailored proposal.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle size={40} className="text-primary" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">Inquiry Submitted!</h3>
            <p className="text-muted-foreground">We'll contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  name="fullName"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                />
              </div>
              <div className="relative">
                <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  name="company"
                  placeholder="Company / Project Name"
                  value={formData.company}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <select
                  name="workType"
                  required
                  value={formData.workType}
                  onChange={handleChange}
                  className={`${inputClass} pl-11 appearance-none`}
                >
                  <option value="">Type of Work</option>
                  <option value="homeowner">Homeowner</option>
                  <option value="showroom">Showroom / Retailer</option>
                  <option value="designer">Designer / Engineer</option>
                  <option value="developer">Real Estate Developer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  name="city"
                  placeholder="City / Location"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                />
              </div>
              <div className="relative">
                <Hash size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  name="units"
                  placeholder="Number of Units Needed"
                  value={formData.units}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            <div className="relative">
              <MessageSquare size={16} className="absolute left-4 top-4 text-muted-foreground" />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} pl-11 resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-lg transition-all hover:bg-primary/90 animate-glow-pulse"
            >
              Submit Inquiry
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

/* ─── FAQ ─── */
const faqs = [
  {
    q: "What is the minimum order for B2B partnerships?",
    a: "There is no strict minimum — we work with projects of all sizes, from single-unit installations to large-scale developments.",
  },
  {
    q: "Do you provide installation support?",
    a: "Yes. Our technical team provides full installation guidance, and we can coordinate with your contractors on-site.",
  },
  {
    q: "Can I get product samples for my showroom?",
    a: "Absolutely. We offer demo units and marketing materials for authorized showroom partners.",
  },
  {
    q: "What warranty do B2B customers receive?",
    a: "All B2B partners receive our standard 2-year warranty, with options for extended coverage on bulk orders.",
  },
];

const FAQSection = () => {
  const { ref, isInView } = useInView();
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-14">
         
          <h2 className="font-montserrat  text-4xl sm:text-5xl text-foreground">
            COMMON <span className="text-gradient-red">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border border-border rounded-xl overflow-hidden transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${openIdx === i ? "border-primary/30" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
              >
                <span className="font-montserrat font-semibold text-foreground text-sm">{q}</span>
                <span
                  className={`text-primary transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIdx === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Main Page ─── */
const B2B = () => (
  <div className="bg-background min-h-screen">
    {/* <Navbar /> */}
    <HeroSection />
    <WhySection />
    <PartnersSection />
    <ProcessSection />
    {/* <InquiryForm /> */}
    <FAQSection />
    {/* <Footer /> */}
  </div>
);

export default B2B;
