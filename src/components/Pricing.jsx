// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingData = [
  {
    plan: "Starter",
    price: "Rp 150.000",
    per: "/bulan",
    features: [
      "3 Akun Sosial",
      "Analisis Dasar",
      "Laporan Mingguan",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    plan: "Pro",
    price: "Rp 450.000",
    per: "/bulan",
    features: [
      "10 Akun Sosial",
      "Analisis Sentimen AI",
      "Laporan Kustom",
      "Dukungan Prioritas",
      "Integrasi API",
    ],
    isPopular: true,
  },
  {
    plan: "Enterprise",
    price: "Kustom",
    per: "",
    features: [
      "Akun Tak Terbatas",
      "API Access Penuh",
      "Manajer Akun Khusus",
      "SLA & Keamanan Tingkat Lanjut",
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="harga" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Paket Harga yang Fleksibel
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Pilih paket yang paling sesuai dengan kebutuhan Anda. Batalkan kapan
            saja.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingData.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg dark:shadow-slate-950 relative ${
                tier.isPopular
                  ? "border-4 border-primary transform md:scale-105"
                  : "border dark:border-slate-700"
              }`}
            >
              {tier.isPopular && (
                <div className="bg-primary text-white text-sm font-bold tracking-wider uppercase px-4 py-1 rounded-full inline-block absolute -top-4 left-1/2 -translate-x-1/2">
                  Paling Populer
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                {tier.plan}
              </h3>
              <p className="text-center mt-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {tier.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {tier.per}
                </span>
              </p>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${
                  tier.isPopular
                    ? "bg-primary text-white hover:bg-violet-700"
                    : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600"
                }`}
              >
                {tier.plan === "Enterprise" ? "Hubungi Sales" : "Pilih Paket"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
