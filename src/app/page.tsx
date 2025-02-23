'use client'
import NavbarComponent from "@/src/components/navbar";
import HeroSectionUi from "@/src/ui/hero";
import MintCardSectionUi from "@/src/ui/mint-card";
import NFTHomeGallaryUi from "@/src/ui/nft-gallary";
import { useRef } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-custom-black to-custom-gray  w-screen h-screen overflow-y-auto flex flex-col flex-1 ">
      <div className="h-[73px] w-full bg-black/80 border-b-[1px] border-[#1F2937] flex flex-2 sticky px-[80px] lg:px-[24px] sm:px-[12px]  ">
        <NavbarComponent />
      </div>

      <div className="w-full  flex-1 overflow-y-auto px-[80px] pb-[80px] lg:px-[24px] sm:px-[14px] ">
        <HeroSectionUi onScroll={handleScroll} />

        <MintCardSectionUi sectionRef={sectionRef} />

        <NFTHomeGallaryUi />
      </div>
    </div>
  );
}
