import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Differentials />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
