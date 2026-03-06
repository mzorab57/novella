import novellaLogo from "../../public/assets/images/logo.jpeg";

const footerLinks = {
  "Product": ["NV-410 Smart Hub", "Specifications", "Features", "Safety Guide"],
  "Company": ["About Us", "B2B Partnerships", "Catalog", "Contact"],
//   "Support": ["Installation Guide", "Warranty", "FAQ", "Technical Support"],
};

const Footer = () => {
  return (
    <footer className="bg-card relative border-t border-border pt-20 pb-8">
         {/* ─── 7. CTA ─── */}
     
        <div className="absolute top-0 inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
   
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-primary/20">
                <img src={novellaLogo} alt="Novella" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-montserrat font-black text-lg tracking-widest text-foreground">NOVÉLLA</div>
                <div className="text-xs text-muted-foreground tracking-[0.2em]">wave of innovation</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Redefining the cooking experience through precision induction technology, 
              seamless design, and uncompromising safety.
            </p>
            <a
              href="https://novella-inc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              novella-inc.com →
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-montserrat font-bold text-xs tracking-[0.2em] uppercase text-foreground mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors nav-link-hover">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs tracking-wider">
            © 2024 Novella. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground tracking-wider">Precision. Power. Innovation.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
