import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-[120px] bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tighter uppercase">AF AD Agency</h2>
            <p className="text-white/50 max-w-sm mb-8">
              India's Leading Video Production & Digital Marketing Company. Grow your business with us.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-white/40">Services</h4>
            <ul className="space-y-4">
              {[
                "Ad Film Production", 
                "Corporate Video Production", 
                "Product Videos", 
                "3D Animation", 
                "Digital Marketing", 
                "Photography", 
                "Courses", 
                "Internship"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6 text-white/40">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Process", "Why Choose Us", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6 text-sm text-white/30">
          <p>© 2026 AF AD Agency. Grow your business with us.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
