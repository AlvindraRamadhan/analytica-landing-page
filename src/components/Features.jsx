// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import featureSentiment from "../assets/feature-sentiment.svg";
import featureDashboard from "../assets/feature-dashboard.svg";
import featureReport from "../assets/feature-report.svg";

const featureData = [
  {
    imgSrc: featureSentiment,
    title: "Analisis Sentimen AI",
    description:
      "Pahami emosi di balik setiap mention dan komentar. Ketahui apa yang benar-benar dirasakan audiens tentang brand Anda.",
  },
  {
    imgSrc: featureDashboard,
    title: "Dashboard Intuitif",
    description:
      "Semua metrik penting—dari engagement hingga jangkauan—disajikan dalam satu tampilan yang bersih dan mudah dipahami.",
  },
  {
    imgSrc: featureReport,
    title: "Laporan Otomatis",
    description:
      "Hemat waktu dengan laporan PDF mingguan atau bulanan yang dikirim langsung ke email Anda. Sempurna untuk presentasi.",
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const Features = () => {
  return (
    <section id="fitur" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-text">
            Fitur Unggulan untuk Pertumbuhan Bisnis
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Semua yang Anda butuhkan untuk mendominasi media sosial.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-light-bg p-8 rounded-xl shadow-md text-center flex flex-col items-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="h-40 mb-6"
              />
              <h3 className="text-2xl font-bold text-dark-text mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
