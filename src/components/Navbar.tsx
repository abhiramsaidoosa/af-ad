import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { 
      name: "Video Production", 
      href: "#video-production",
      dropdown: [
        "Ad Films",
        "Corporate Videos",
        "Product Videos",
        "Explainer Videos",
        "TV Commercials",
        "3D Animation",
        "Social Media Videos",
        "Documentary Films"
      ]
    },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "Courses", href: "#courses" },
    { name: "Photography", href: "#photography" },
    { name: "Internship", href: "#internship" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[120px] py-5 bg-black/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-[30px]">
        <div className="text-white font-bold text-xl tracking-tighter flex items-center">
          AF AD AGENCY
        </div>
        
        <div className="hidden lg:flex items-center gap-[24px]">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
            >
              <a 
                href={link.href}
                className="text-white/70 hover:text-white text-[14px] font-medium flex items-center gap-1 transition-colors whitespace-nowrap"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
              </a>

              {link.dropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden py-2 shadow-2xl"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative group hidden md:block">
          <div className="absolute inset-0 rounded-full border-[0.6px] border-white opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-white rounded-full px-[24px] py-[10px] overflow-hidden">
            <span className="text-black text-[14px] font-medium">Get Started</span>
          </div>
        </button>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-white/70 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
