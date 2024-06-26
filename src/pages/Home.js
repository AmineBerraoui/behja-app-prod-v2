import React from "react";
import NavBar from "../components/NavBar";
import BenefitsSection from "../containers/BenefitsSection";
// import DiscoverSection from "../containers/DiscoverSection";
import FAQSection from "../containers/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../containers/HeroSection";
import HowItWorksSection from "../containers/HowItWorksSection";
import NotJustaServiceSection from "../containers/NotJustaServiceSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto bg-primary-50">
      <NavBar fixed={true} />
      <HeroSection />
      {/* <DiscoverSection /> */}
      <div className="h-20" />
      <HowItWorksSection />
      <BenefitsSection />
      <NotJustaServiceSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
