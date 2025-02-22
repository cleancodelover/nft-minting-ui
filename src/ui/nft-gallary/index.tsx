"use client";
import {motion} from "framer-motion";
import NFTItemCardComponent from "@/src/components/nft-item-card";
import { useGetNFTs } from "@/src/hooks/mint/get/all";
import { useState } from "react";
import { GetNFTType } from "@/src/types/nft";
import MintCardNFTSuccess from "../mint-card/success";
import Modal from "@/src/components/modal";
import NFTDetails from "../nft-details";

const NFTHomeGallaryUi = () => {
  const { nfts, fetchNextPage, hasNextPage } = useGetNFTs();
  const [nft, setNft] = useState<GetNFTType>();
  return (
    <>
    <div className="w-full h-fit flex flex-col items-center pt-[96px] gap-y-12 sm:gap-y-6 sm:pt-[40px]">
      <div className="w-full">
        <h1 className="w-fit font-bold text-2xl text-white">
          Your NFT Gallery
        </h1>
      </div>
      <motion.div
        className="w-full flex flex-row items-center gap-8 sm:gap-4 flex-wrap tab:justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1, transition: {staggerChildren: 0.2}},
        }}
      >
        {nfts.map((item, index) => (
          <NFTItemCardComponent setNft={setNft} nft={item} key={item.name} index={index} />
        ))}
      </motion.div>
    </div>
    <Modal isOpen={nft ? true : false} onClose={()=>{setNft(undefined)}}>
      <NFTDetails nft={nft}  />
    </Modal>
    </>
  );
};

export default NFTHomeGallaryUi;
