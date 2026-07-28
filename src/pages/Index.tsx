import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Diferenciais from "@/components/Diferenciais";
import Servicos from "@/components/Servicos";
import ProvaSocial from "@/components/ProvaSocial";
import Metodologia from "@/components/Metodologia";
import Sobre from "@/components/Sobre";
import QuebraObjecao from "@/components/QuebraObjecao";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Diferenciais />
      <Servicos />
      <ProvaSocial />
      <Metodologia />
      <Sobre />
      <QuebraObjecao />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
