import { motion } from "motion/react";

const services = [
  {
    number: "/01",
    title: "Ad Film Production",
    description: "Professional TV and digital ad films that capture brand essence and drive customer engagement.",
  },
  {
    number: "/02",
    title: "Corporate Video Production",
    description: "High-quality corporate films that showcase brand identity, vision, and values.",
  },
  {
    number: "/03",
    title: "Product Videos",
    description: "Visually stunning product showcase videos that highlight features and benefits.",
  },
  {
    number: "/04",
    title: "Explainer Videos",
    description: "Animated or live-action explainer videos that simplify complex ideas and services.",
  },
  {
    number: "/05",
    title: "TV Commercials",
    description: "Broadcast-ready TV advertisements that make an impact in the commercial space.",
  },
  {
    number: "/06",
    title: "3D Animation & Motion Graphics",
    description: "High-quality 3D animated content that enhances marketing, branding, and presentations.",
  },
  {
    number: "/07",
    title: "Social Media Videos",
    description: "Short-form content like Instagram reels, YouTube shorts and promotional videos.",
  },
  {
    number: "/08",
    title: "Documentary Films",
    description: "Authentic and visually engaging documentary films that tell compelling stories.",
  },
  {
    number: "/09",
    title: "Digital Marketing",
    description: "SEO, website & app development, social media, PPC, and video marketing for maximum brand growth.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-[120px] bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">We are best at in <br /> the below services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-10 bg-black hover:bg-white/5 transition-colors group"
            >
              <div className="text-white/20 text-sm font-bold mb-8 group-hover:text-white transition-colors">
                {service.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
