import React from "react";
import logisticsBg from "../../assets/logistics_bg.jpg";

export const CinematicSection: React.FC = () => {
  return (
    <section className="relative h-[480px] sm:h-[540px] w-full overflow-hidden flex items-center border-b border-slate-800">
      
      <img
        src={logisticsBg}
        alt="OpsSphere Supply Chain Operations"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0"
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-0 pointer-events-none" />

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white space-y-4">
        <span className="text-xs font-mono font-bold tracking-widest text-white/90 uppercase block">
          ONE OPERATIONAL SYSTEM
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white drop-shadow-md">
          Connect. <br />
          Operate. <br />
          <span className="text-[#3B82F6]">Deliver.</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-200 font-normal max-w-lg leading-relaxed drop-shadow-xs">
          OpsSphere manages the physical operations and digital workflows behind modern enterprise businesses.
        </p>
      </div>
    </section>
  );
};
