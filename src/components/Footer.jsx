import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, MessageCircle, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import novellaLogo from "../../public/assets/images/logo.jpeg";

// Data objects remain the same, which is great for maintenance
const footerLinks = {
  "Product": [{link:"nv-410-smart-hub"}, {link:"specifications"}, {link:"features"}, {link:"safety-guide"}],
  "Company": [{link:"about"}, {link:"b2b"}, {link:"products"}, {link:"contact"}, {link:"gallery"}],
};

const contactItems = [
  { icon: Phone, label: "Mobile", value: "+964 770 1967400", href: "tel:+9647701967400" },
  { icon: Mail, label: "Email", value: "info@novella-inc.com", href: "mailto:info@novella-inc.com" },
  { icon: MapPin, label: "Location", value: "Iraq, Sulaymaniyah, Malik Mahmud Ring Road", href: "https://maps.app.goo.gl/QE1MWqRPyUc7xkBL6" },
];

const socialLinks = [
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/9647701967400" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/zirak.decorr?igsh=eHNqZ2psb3k4NnAy&utm_source=qr" }, // Add your link
    // { icon: Facebook, label: "Facebook", href: "#" }, // Add your link
];

// Reusable component for section titles
const FooterTitle = ({ children }) => (
  <h4 className="font-montserrat font-semibold text-sm tracking-[0.2em] uppercase text-neutral-400 mb-6">
    {children}
  </h4>
);

const Footer = () => {
  return (
    <footer className="bg-black relative text-neutral-300 border-t border-white/10 pt-20 pb-8">
      {/* Subtle top gradient line for a premium feel */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 rounded-xl overflow-hidden border-2 border-primary/20 p-1">
                <img src={novellaLogo} alt="Novella Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <div className="font-montserrat font-bold text-xl tracking-widest text-white">NOVÉLLA</div>
                <div className="text-xs text-neutral-400 tracking-[0.2em] mt-1">wave of innovation</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Redefining cooking with precision induction technology and seamless Italian design.
            </p>
          </div>

          {/* Column 2 & 3: Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <FooterTitle>{category}</FooterTitle>
              <ul className="space-y-3">
                {links.map(({ link }) => (
                  <li key={link}>
                    <Link
                      to={`/${category.toLowerCase()}/${link}`}
                      className="text-neutral-400 capitalize text-sm transition-all duration-300 hover:text-white hover:pl-2"
                    >
                      {link.replace(/-/g, ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Connect */}
          <div>
            <FooterTitle>Connect</FooterTitle>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-3 group">
                    <Icon size={16} className="text-primary transition-colors group-hover:text-white" />
                    <span className="text-sm text-neutral-400 transition-colors group-hover:text-white">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar: Copyright and Social Icons */}
      <div className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-neutral-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Novella Inc. All rights reserved. Developed by{" "}
            <a
              href="https://wa.me/9647701411893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 transition-colors hover:text-primary font-medium"
            >
              Al-Code
            </a>
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="size-10 flex items-center justify-center rounded-full bg-neutral-800/50 text-neutral-400 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;