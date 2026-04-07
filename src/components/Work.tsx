import { motion } from "motion/react";

const projects = [
  {
    title: "The Future of Web3",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
  },
  {
    title: "Digital Renaissance",
    category: "Campaign",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564"
  },
  {
    title: "Metaverse Identity",
    category: "Design",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2670"
  }
];

export function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-[120px] bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Selected Works</h2>
            <p className="text-white/60 max-w-md text-lg">
              A glimpse into the projects where we've pushed the boundaries of digital storytelling.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white font-medium border-b border-white/20 pb-1 hover:border-white transition-colors"
          >
            View all projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <span className="text-sm text-white/40 mb-2 block">{project.category}</span>
              <h3 className="text-xl font-medium">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
