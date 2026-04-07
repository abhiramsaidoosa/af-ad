import { motion } from "motion/react";

const reasons = [
  {
    title: "Creative Excellence",
    description: "Award-winning team with a passion for storytelling.",
    icon: "🎨"
  },
  {
    title: "End-to-End Solutions",
    description: "From concept to distribution, we handle it all.",
    icon: "🎬"
  },
  {
    title: "Proven Track Record",
    description: "500+ happy clients and 10+ years of experience.",
    icon: "🏆"
  },
  {
    title: "Cutting-Edge Tech",
    description: "Using the latest 4K cameras, 3D software, and AI tools.",
    icon: "⚡"
  }
];

export function WhyChooseUs() {
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
          <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4 block">Why Us</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase max-w-4xl">
            Why Choose AF AD Agency for Video Production & Digital Marketing?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row gap-8 items-start group hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
