import React from "react";
import { LandingNavbar } from "../../components/landing/LandingNavbar";
import { HeroSection } from "../../components/landing/HeroSection";
import { PlatformLayers } from "../../components/landing/PlatformLayers";
import { ProblemSolution } from "../../components/landing/ProblemSolution";
import { ProductShowcase } from "../../components/landing/ProductShowcase";
import { RolePerspectives } from "../../components/landing/RolePerspectives";
import { WorkflowTimeline } from "../../components/landing/WorkflowTimeline";
import { SecurityArchitecture } from "../../components/landing/SecurityArchitecture";
import { CinematicSection } from "../../components/landing/CinematicSection";
import { FinalCTA } from "../../components/landing/FinalCTA";
import { LandingFooter } from "../../components/landing/LandingFooter";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1420] font-sans antialiased selection:bg-[#3B82F6] selection:text-white">
      <LandingNavbar />
      <main>
        
        <HeroSection />

        
        <PlatformLayers />

        
        <ProblemSolution />

        
        <ProductShowcase />

        
        <RolePerspectives />

        
        <WorkflowTimeline />

        
        <SecurityArchitecture />

        
        <CinematicSection />

        
        <FinalCTA />
      </main>

      
      <LandingFooter />
    </div>
  );
};
