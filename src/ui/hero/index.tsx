"use client";

import { WalletConnectButton } from "@/src/components/walletConnectButton";
import { useMinting } from "@/src/contexts/minting";
import PlayIcon from "@/src/svgs/play";
import RocketIcon from "@/src/svgs/rocket";
import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

type ScrollButtonProps = {
  onScroll: () => void;
}

const HeroSectionUi:FC<ScrollButtonProps> = ({onScroll}) => {
  const { isConnected } = useMinting();

  return (
    <div className="w-full h-fit flex flex-col items-center pt-[96px] space-y-[40px] lg:space-y-[30px] sm:space-y-[28px] sm:pt-[44px] ">
      <h1 className="w-[577px] h-[180px]  font-[700] leading-[60px] text-[60px] lg:text-[50px] text-center sm:w-full sm:text-[24px] sm:leading-[34px]  ">
        Discover & Collect{" "}
        <span className="text-primary">
          <Typewriter
            words={[
              "Extraordinary NFTs",
              "Unique Digital Art",
              "Next-Gen Collectibles",
              "Metaverse Assets",
              "Future of Ownership",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>
      <p className="w-[795px] text-center font-[400] leading-[20px] text-[20px] tab:w-full sm:w-full sm:px-[14px] sm:text-[16px] sm:leading-[20px]  ">
        {`Enter the world of digital art and collectibles. Explore unique NFTs created by artists worldwide.`}
      </p>

      <div className="flex flex-row items-center justify-center w-full mt-[40px] space-x-8 sm:flex-col sm:space-y-4 sm:space-x-0 ">
        {isConnected && (
          <button onClick={onScroll} className="w-[180px] sm:w-full h-[58px] space-x-1 flex items-center justify-center rounded-[12px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
            <RocketIcon />
            <p className="text-[16px] font-[700]  ">Start Creating</p>
          </button>
        )}

        {!isConnected && (
          <div className="w-[180px] sm:w-full h-[58px] space-x-1 flex items-center justify-center rounded-[12px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
            <RocketIcon />
            <WalletConnectButton title="Start Creating" />
          </div>
        )}

        <button className="w-[180px] sm:w-full h-[58px] space-x-1 flex items-center border-[1px] border-[#374151] justify-center bg-[#1F293780]/50 rounded-[12px] text-white shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
          <PlayIcon />
          <p className="text-[16px] font-[400]  ">Watch Demo</p>
        </button>
      </div>
    </div>
  );
};

export default HeroSectionUi;
