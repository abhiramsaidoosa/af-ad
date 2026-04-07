import { motion } from "motion/react";

export function Ticker() {
  const items = [
    "Video Production",
    "Digital Marketing",
    "Courses",
    "Photography",
    "Internship"
  ];

  return (
    <section className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-white/40 text-[32px] md:text-[48px] font-bold uppercase tracking-tighter">
                {item}
              </span>
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
