import { motion } from "motion/react";

const highlights = [
  {
    label: "Leading Brands Worked With",
    value: "20+",
  },
  {
    label: "Years of Experience",
    value: "10+",
  },
  {
    label: "Happy Clients",
    value: "500+",
  }
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-[120px] bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase">Who We Are – <br />AF AD Agency</h2>
            <p className="text-white/80 text-xl font-medium mb-8">
              Welcome to AF AD Agency – India's Leading Video Production & Digital Marketing Company
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              At AF AD Agency, we are one of India's leading video production companies, offering top-notch services such as ad films, corporate videos, TV commercials, 3D animation, and VFX solutions. Our skilled team, including creative directors, filmmakers, and digital strategists, works collaboratively to bring your brand's story to life with visually striking and strategically impactful content.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              We specialize in video production and digital marketing, creating tailored content strategies that drive brand awareness, increase audience engagement, and boost conversions. Our impressive portfolio includes collaborations with iconic film teams like RRR and Baahubali.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-4xl font-bold mb-2 tracking-tighter">{item.value}</div>
                  <div className="text-[12px] uppercase tracking-widest text-white/40 leading-tight">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2071"
                alt="AF AD Agency Creative Work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
