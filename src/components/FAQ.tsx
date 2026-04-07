import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What services does AF AD Agency offer?",
    a: "We specialize in video production (ad films, corporate videos, 3D animation) and digital marketing (SEO, social media, PPC)."
  },
  {
    q: "How long does it take to produce a video?",
    a: "The timeline varies depending on the project's complexity, but typically it takes 2-4 weeks from concept to final delivery."
  },
  {
    q: "Do you work with clients outside of India?",
    a: "Yes, we work with clients globally, providing high-quality content and marketing solutions regardless of location."
  },
  {
    q: "What is the cost of your services?",
    a: "Our pricing is tailored to each project's specific requirements. Contact us for a customized quote."
  },
  {
    q: "Can you help with social media management?",
    a: "Absolutely! We offer comprehensive social media management services to help your brand grow and engage with your audience."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-[120px] bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4 block">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Common Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold uppercase tracking-tight pr-8">{faq.q}</span>
                {openIndex === index ? <Minus size={20} className="shrink-0" /> : <Plus size={20} className="shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
