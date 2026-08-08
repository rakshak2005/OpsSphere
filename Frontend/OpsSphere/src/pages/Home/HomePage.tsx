import React from "react";
import { LandingNavbar } from "../../components/landing/LandingNavbar";
import { HeroSection } from "../../components/landing/HeroSection";
import { TrustMetricsStrip } from "../../components/landing/TrustMetricsStrip";
import { ProblemSolutionSection } from "../../components/landing/ProblemSolutionSection";
import { FeatureModulesSection } from "../../components/landing/FeatureModulesSection";
import { InteractiveDashboardPreview } from "../../components/landing/InteractiveDashboardPreview";
import { RolesSection } from "../../components/landing/RolesSection";
import { WorkflowSection } from "../../components/landing/WorkflowSection";
import { SecuritySection } from "../../components/landing/SecuritySection";
import { FinalCTA } from "../../components/landing/FinalCTA";
import { LandingFooter } from "../../components/landing/LandingFooter";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-indigo-500 selection:text-white antialiased">
      <LandingNavbar />
      <main>
        <HeroSection />
        <TrustMetricsStrip />
        <ProblemSolutionSection />
        <FeatureModulesSection />
        <InteractiveDashboardPreview />
        <RolesSection />
        <WorkflowSection />
        <SecuritySection />
        <FinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
};
