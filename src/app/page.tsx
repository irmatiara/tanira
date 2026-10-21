import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FaqSection from "@/components/sections/FaqSection";
import LocationSection from "@/components/sections/LocationSection";

export default function TaniraLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-sage/30 text-earth">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AdvantagesSection />
        <ProcessSection />
        <ProductsSection />
        <ComparisonSection />
        <FaqSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}
