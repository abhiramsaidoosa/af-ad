import { motion } from "motion/react";

const steps = [
  {
    number: "/01",
    title: "Understanding Your Brand",
    description: "We discuss your objectives, target audience, and project scope.",
  },
  {
    number: "/02",
    title: "Strategic Planning",
    description: "Our team develops a comprehensive storyline, script & visual direction.",
  },
  {
    number: "/03",
    title: "Pre Production",
    description: "Storyboarding, location scouting, casting, and setup planning.",
  },
  {
    number: "/04",
    title: "Production",
    description: "Professional filming, animation, and voiceover execution.",
  },
  {
    number: "/05",
    title: "Post Production",
    description: "Editing, sound design, color correction & visual effects integration.",
  },
  {
    number: "/06",
    title: "Delivery",
    description: "Final video delivery optimized for all platforms and formats.",
  }
];

export function Process() {
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
          <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Our Creative Process: <br />From Concept to Execution</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="text-white/20 text-sm font-bold mb-8 group-hover:text-white transition-colors">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
