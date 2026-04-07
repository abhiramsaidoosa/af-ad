import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Video */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black" 
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[64px] md:text-[120px] font-bold leading-[1] tracking-tighter text-white mb-6 uppercase"
        >
          Create, <br /> Impactful
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[18px] md:text-[24px] font-medium text-white/80 max-w-[800px] mb-10"
        >
          India's Leading Video Production & Digital Marketing Company
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="relative group">
            <div className="absolute inset-0 rounded-full border-[0.6px] border-white opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-full px-[40px] py-[16px] overflow-hidden">
              <span className="text-black text-[16px] font-bold uppercase tracking-tight">Get Started</span>
            </div>
          </button>
          
          <button className="relative group">
            <div className="absolute inset-0 rounded-full border-[0.6px] border-white/20 group-hover:border-white/40 transition-colors" />
            <div className="relative bg-transparent rounded-full px-[40px] py-[16px] overflow-hidden">
              <span className="text-white text-[16px] font-bold uppercase tracking-tight">Our Work</span>
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
