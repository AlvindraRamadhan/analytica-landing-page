// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 bg-light-bg dark:bg-dark-bg h-screen">
      <Hero3D />
      <div className="relative container mx-auto px-6 text-center z-10 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-tight"
        >
          Ubah Data Media Sosial Menjadi Keputusan Bisnis yang Cerdas.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Analytica memberikan Anda kekuatan AI untuk melacak performa, memahami
          sentimen audiens, dan mengoptimalkan strategi konten Anda dengan
          mudah.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#harga"
          className="mt-10 inline-block bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 pointer-events-auto"
        >
          Mulai Uji Coba Gratis →
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
