import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Globe } from "lucide-react";
import { useInView } from "../hooks/useInView";

const contactInfo = [
  { icon: Globe, label: "Website", value: "novella-inc.com", href: "https://novella-inc.com/" },
  { icon: Mail, label: "Email", value: "contact@novella-inc.com", href: "mailto:info@novella-inc.com" },
  { icon: Phone, label: "Phone", value: "+964 750 668 3552", href: "tel:+9647506683552" },
  { icon: MapPin, label: "Location", value: "Available Worldwide", href: "#" },
];

const Contact = () => {
  const { ref: headRef, isInView: headInView } = useInView();
  const { ref: formRef, isInView: formInView } = useInView();

  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", type: "general" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", company: "", message: "", type: "general" });
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
         
          <h2 className="font-montserrat  text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            CONTACT US
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to elevate your kitchen? Reach out for product inquiries, B2B partnerships, or technical support.
          </p>
        </div>

        <div
          ref={formRef}
          className="grid lg:grid-cols-5 gap-12"
        >
          {/* Contact info */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${
            formInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">Let's Talk</h3>
            <div className="section-divider mb-8" />

            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 group transition-all duration-500 ${
                    formInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground tracking-widest uppercase mb-0.5">{label}</div>
                    <div className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Follow Us</div>
              <div className="flex gap-3">
                <a
                  href="https://novella-inc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://novella-inc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
            formInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div className="border border-border rounded-2xl p-8 glass">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 animate-glow-pulse">
                    <Send size={24} className="text-primary" />
                  </div>
                  <h4 className="font-montserrat font-bold text-foreground text-xl mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Inquiry type */}
                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase mb-3 block">Inquiry Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["general", "b2b", "support"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, type }))}
                          className={`py-2 text-xs font-semibold tracking-wider uppercase rounded border transition-all ${
                            formData.type === type
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }`}
                        >
                          {type === "b2b" ? "B2B" : type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                        className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-semibold tracking-widest uppercase text-sm rounded transition-all hover:bg-primary/90 animate-glow-pulse flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
