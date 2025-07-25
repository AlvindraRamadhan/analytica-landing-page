import Hero from "../components/Hero";
import WaveDivider from "../components/WaveDivider";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials"; 
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WaveDivider />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
