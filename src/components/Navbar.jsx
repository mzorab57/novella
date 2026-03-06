import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../public/assets/images/icon-r.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // بۆ باکگراوندەکە
  const [isHidden, setIsHidden] = useState(false); // بۆ شاردنەوە و دەرکەوتن
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ١. کۆنترۆڵکردنی باکگراوند (لەکاتی سکرۆڵ نەکردنا شەفافە)
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ٢. کۆنترۆڵکردنی شاردنەوە و دەرکەوتن
      // ئەگەر دەتەوێت کاتی سکرۆڵکردن بۆ سەرەوە بشاردرێتەوە، هێمای (>) بکە بە (<)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // سکرۆڵ بۆ خوارەوە دەکرێت، نەڤبار بشارەوە
        setIsHidden(true);
        setIsOpen(false); // ئەگەر مینیۆی مۆبایل کراوەبێت، با دابخرێت
      } else if (currentScrollY < lastScrollY.current) {
        // سکرۆڵ بۆ سەرەوە دەکرێت، نەڤبار دەربخەرەوە
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/goal", label: "GOAL" },
    { to: "/products", label: "PRODUCTS" },
    { to: "/b2b", label: "B2B" },
    { to: "/about", label: "ABOUT US" },
    { to: "/contact", label: "CONTACT US" },
  ];

  return (
    // لەم بەشەدا transform و isHidden بەکارهاتووە بۆ شاردنەوە
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* لەم بەشەدا isScrolled بەکارهاتووە بۆ گۆڕینی باکگراوند */}
      <div
        className={`px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md  border-white/10"
            : "bg-transparent border-transparent py-7" // لە کاتی شەفافی کەمێک پانتایی (py-7) زیاتر بێت جوانترە
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={icon} alt="logo" className="w-9 h-12" />
          <span className="font-serif text-lg tracking-[0.15em] text-white/80">
            NOVÈLLA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-mono text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                  isActive
                    ? "text-red-400/90"
                    : "text-white/50 hover:text-red-400/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-white/80 transition-all duration-300 ease-in-out origin-center ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white/80 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white/80 transition-all duration-300 ease-in-out origin-center ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 h-screen bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-black/90 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 px-6 pt-6 pb-4 border-b border-white/10">
          <img src={icon} alt="logo" className="w-7 h-10" />
          <span className="font-serif text-base tracking-[0.15em] text-white/80">
            NOVÈLLA
          </span>
        </div>

        <nav className="flex flex-col px-6 pt-8 gap-2">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-mono text-[11px] uppercase tracking-[0.3em] py-3 px-4 rounded-lg transition-all duration-300 border border-transparent ${
                  isActive
                    ? "text-red-400/90 bg-red-400/10 border-red-400/20"
                    : "text-white/50 hover:text-red-400/80 hover:bg-white/5 hover:border-white/10"
                }`
              }
              style={{
                animationDelay: `${index * 80}ms`,
                animation: isOpen
                  ? `slideIn 0.4s ease-out ${index * 80}ms both`
                  : "none",
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="border-t border-white/10 pt-4">
            <p className="font-mono text-[9px] text-white/30 tracking-[0.2em] uppercase text-center">
              © 2025 Novèlla
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Navbar;