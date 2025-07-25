import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Apa yang membedakan Analytica dari tools lain?",
    answer:
      "Fokus kami pada AI untuk memberikan wawasan yang lebih dalam, bukan hanya data mentah. Antarmuka kami juga dirancang untuk non-analis, sehingga mudah digunakan oleh siapa saja.",
  },
  {
    question: "Apakah ada periode uji coba gratis?",
    answer:
      "Ya! Kami menawarkan uji coba gratis 14 hari untuk paket Pro, tanpa perlu kartu kredit. Anda bisa mencoba semua fitur premium kami.",
  },
  {
    question: "Dukungan integrasi apa saja yang tersedia?",
    answer:
      "Saat ini kami mendukung Instagram, Facebook, Twitter, dan LinkedIn. Platform baru seperti TikTok dan YouTube sedang dalam pengembangan.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-slate-700 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-900 dark:text-white"
      >
        <span>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 dark:text-gray-300">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Menemukan jawaban yang Anda butuhkan.
          </p>
        </div>
        <div>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
