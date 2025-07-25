// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Analytica mengubah cara kami melihat data. Dashboard-nya sangat intuitif dan laporan otomatisnya menghemat waktu kami berjam-jam setiap minggu!",
    name: "Sarah L.",
    title: "Marketing Manager, Startup Tech",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote:
      "Sebagai agensi kecil, kami membutuhkan tool yang kuat namun terjangkau. Analytica memberikan semua yang kami butuhkan dan lebih.",
    name: "David Chen",
    title: "Founder, DC Creative",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials = () => {
  return (
    // PERBAIKAN: Menggunakan bg-dark-text agar konsisten
    <section id="testimonials" className="py-20 bg-light-bg dark:bg-dark-text">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-text dark:text-white">
            Apa Kata Mereka Tentang Analytica
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Dipercaya oleh para profesional di berbagai industri.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg dark:shadow-slate-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-600 dark:text-gray-300 italic text-lg mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-dark-text dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
