import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh K.",
    role: "CEO of TechVibe",
    quote: "AF AD Agency transformed our brand's presence with their exceptional video production. Highly recommended!"
  },
  {
    name: "Priya S.",
    role: "Marketing Head at GreenLeaf",
    quote: "Their team is incredibly creative and professional. The corporate film they made for us was outstanding."
  },
  {
    name: "Anil M.",
    role: "Founder of FitLife",
    quote: "The best digital marketing partner we've ever worked with. Our sales have increased significantly."
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-[120px] bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Experience Shared <br /> by Our Clients</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-white/20 mb-8" size={40} />
                <p className="text-white/80 text-lg leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <div className="text-xl font-bold text-white uppercase tracking-tight">{t.name}</div>
                <div className="text-sm text-white/40 uppercase tracking-widest mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
