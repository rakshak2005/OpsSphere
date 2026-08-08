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
        {/* 1. LIGHT HERO (#F7F9FC) */}
        <HeroSection />

        {/* 2. WHITE SYSTEM (#FFFFFF) */}
        <PlatformLayers />

        {/* 3. SOFT GRAY PROBLEM/SOLUTION (#EEF3F8) */}
        <ProblemSolution />

        {/* 4. DARK PRODUCT SHOWCASE (#0D1420) */}
        <ProductShowcase />

        {/* 5. WHITE ROLE EXPERIENCE (#FFFFFF) */}
        <RolePerspectives />

        {/* 6. WHITE WORKFLOW (#FFFFFF) */}
        <WorkflowTimeline />

        {/* 7. LIGHT SECURITY (#EEF3F8) */}
        <SecurityArchitecture />

        {/* 8. CINEMATIC BRAND MOMENT */}
        <CinematicSection />

        {/* 9. WHITE CTA (#FFFFFF) */}
        <FinalCTA />
      </main>

      {/* 10. DARK FOOTER (#0D1420) */}
      <LandingFooter />
    </div>
  );
};
