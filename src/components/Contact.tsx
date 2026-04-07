import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-[120px] bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4 block">Contact Us</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-[0.9]">
              Let's Talk <br /> Your Next <br /> Big Idea
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl font-bold">contact@afadagency.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-xl font-bold">+91 79956 14066</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10"
          >
            <form className="space-y-6">
              <div>
                <label className="text-sm text-white/40 uppercase tracking-widest mb-2 block">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-sm text-white/40 uppercase tracking-widest mb-2 block">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="text-sm text-white/40 uppercase tracking-widest mb-2 block">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button className="w-full relative group">
                <div className="absolute inset-0 rounded-xl border-[0.6px] border-white opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white rounded-xl px-6 py-5 flex items-center justify-center gap-3 overflow-hidden">
                  <span className="text-black font-bold uppercase tracking-tight">Send Message</span>
                  <Send size={18} className="text-black" />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
