import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Clients";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-black min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <Hero />
      
      <div className="relative z-10">
        <Ticker />

        <About />
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <Services />

        <Process />

        <WhyChooseUs />

        <Testimonials />

        <FAQ />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
