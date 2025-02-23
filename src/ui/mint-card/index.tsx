"use client";
import {FC, RefObject, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import MintCardCreateNFT from "./mint";
import MintCardNFTSuccess from "./success";
import { GetNFTType } from "@/src/types/nft";

type MintCardProps = {
  sectionRef?:RefObject<HTMLDivElement | null>
}

const MintCardSectionUi:FC<MintCardProps> = ({ sectionRef }) => {

  const [tab, setTab] = useState<"create" | "success">("create");
  const [nft, setNft] = useState<GetNFTType>()

  const toggleTab = (data?: GetNFTType) => {
    if (data) {
      setNft({...data});
    }
    setTab(prev => (prev === "create" ? "success" : "create"));
  };

  return (
    <motion.div
      layout
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, ease: "easeInOut"}}
      className="w-full flex flex-col justify-center items-center pt-[96px] sm:pt-[60px] relative overflow-hidden"
    >
      {/* Animated Container for Height Transition */}
      <motion.div
        key={tab}
        layout
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -20}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        ref={sectionRef}
        className="w-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {tab === "create" && (
            <MintCardCreateNFT key="create" setNFT={setNft} toggleTab={toggleTab} />
          )}
          {tab === "success" && (
            <MintCardNFTSuccess key="success" nft={nft} toggleTab={toggleTab} />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default MintCardSectionUi;
