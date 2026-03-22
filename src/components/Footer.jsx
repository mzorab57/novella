import { Link } from "react-router-dom";
import novellaLogo from "../../public/assets/images/logo.jpeg";

const footerLinks = {
  "Product": [{link:"nv-410-smart-hub"}, {link:"specifications"}, {link:"features"}, {link:"safety-guide"}],
  "Company": [{link:"about"}, {link:"b2b"}, {link:"products"}, {link:"contact"}],
//   "Support": ["Installation Guide", "Warranty", "FAQ", "Technical Support"],
};

const Footer = () => {
  return (
    <footer className="bg-card relative border-t border-border pt-20 pb-8">
         
     
        
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between lg:px-8">
       
          {/* Brand */}
          <div className="">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-20 rounded-lg overflow-hidden border border-primary/20">
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
           
          </div>
 <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-montserrat  font-bold text-xs tracking-[0.2em] uppercase text-foreground mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link onClick={() => {
                      if (category === "Company") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }} to={`/${category === "Company" ? link.link : ''}`} className="text-muted-foreground uppercase text-sm hover:text-primary transition-colors nav-link-hover">  
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
        {/* Bottom */}
        {/* <div className="border-t border-border max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="absolute -z-10 top-0 inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
   
          <p>&copy; {new Date().getFullYear()} NOVÉLLA all rights reserved.</p>
          <p className="mt-1">
            Powered by{" "}
            <a 
              href="https://wa.me/96407701411893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline "
            >
              Al-Code
            </a>
          </p>
        
        </div> */}
    </footer>
  );
};

export default Footer;
