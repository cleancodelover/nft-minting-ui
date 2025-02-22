import NavbarComponent from "@/src/components/navbar";
import HeroSectionUi from "@/src/ui/hero";
import MintCardSectionUi from "@/src/ui/mint-card";
import NFTHomeGallaryUi from "@/src/ui/nft-gallary";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-custom-black to-custom-gray  w-screen h-screen overflow-y-auto flex flex-col flex-1 ">
      <div className="h-[73px] w-full bg-black/80 border-b-[1px] border-[#1F2937] flex flex-2 sticky px-[80px] lg:px-[24px] sm:px-[12px]  ">
        <NavbarComponent />
      </div>

      <div className="w-full  flex-1 overflow-y-auto px-[80px] pb-[80px] lg:px-[24px] sm:px-[14px] ">
        <HeroSectionUi />

        <MintCardSectionUi />

        <NFTHomeGallaryUi />
      </div>
    </div>
  );
}
