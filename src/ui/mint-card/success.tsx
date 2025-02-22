"use client";
import LocalCheckIcon from "@/src/svgs/check";
import Image from "next/image";
import AppLogo from "@/src/svgs/logo";
import LocalShareIcon from "@/src/svgs/share";
import { GetNFTType } from "@/src/types/nft";
import { formatNumberWithHash } from "@/src/helpers";

interface ComponentProps {
  toggleTab: () => void;
  nft?:GetNFTType
}

const MintCardNFTSuccess = ({toggleTab, nft}: ComponentProps) => {
  console.log("Created NFT :>>>>>>>>>>>>>>", nft);
  return (
    <div className="w-[576px] sm:w-full rounded-[16px] border-[1px] border-[#10B981] bg-[#11182780] p-[33px] sm:px-[12px] flex flex-col space-y-7 sm:space-y-4 ">
      <div className="w-full flex flex-col items-center space-y-4">
        <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#10B98133] ">
          <LocalCheckIcon />
        </div>

        <h1 className="text-[#10B981] font-[700] text-[24px] leading-[24px] sm:text-[18px] sm:leading-[18px]  ">
          NFT Minted Successfully
        </h1>
        <p className="text-[16px] leading-[16px] text-center w-[428px] sm:w-full font-[400] text-[#9CA3AF] ">{`Your NFT has been created and added to your collection`}</p>
      </div>

      <div className="w-[510px] h-[476px] sm:w-full sm:h-auto rounded-[12px] bg-[#1F293780] border-[1px] shadow-sm p-[24px] sm:px-[12px] flex flex-col space-y-6 ">
        {nft?.logoUrl && <Image
          width={100}
          height={600}
          className="w-full h-[256px] rounded-[8px] object-cover "
          alt="nft"
          src={nft?.logoUrl}
        />}

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-start space-y-1">
            <p className="text-[#9CA3AF] text-[16px] leading-[16px] font-[400] sm:text-[14px] ">
              NFT Name
            </p>
            <span className="text-[16px] font-[700] leading-[16px] text-[#ffffff] sm:text-[14px] ">
              {`${nft?.name} ${formatNumberWithHash(nft?.id ?? 0)}`}
            </span>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <p className="text-[#9CA3AF] text-[16px] leading-[16px] font-[400] sm:text-[14px]">
              Description
            </p>

            <p className="text-[#9CA3AF] text-[16px] leading-[16px] font-[400] sm:text-[14px] ">
              {nft?.description ?? ''}
            </p>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <span className="text-[#9CA3AF] text-[16px] leading-[16px] font-[400] sm:text-[14px]">
              NFT ID
            </span>

            <p className="text-[#8B5CF6] text-[16px] leading-[16px] font-[400] sm:text-[14px] ">
              {`${nft?.nftAddress ?? ''}`}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-1 space-x-3 sm:flex-col sm:space-x-0 sm:space-y-4 ">
        <button className=" h-[48px] w-1/2 sm:w-full space-x-1 flex items-center border-[1px] border-[#374151] justify-center bg-[#1F293780]/50 rounded-[12px] text-white shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
          <LocalShareIcon />
          <p className="text-[16px] font-[400]  ">Share</p>
        </button>

        <button
          onClick={toggleTab}
          className=" h-[48px] w-1/2 sm:w-full space-x-2 flex items-center justify-center rounded-[12px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110"
        >
          <AppLogo width="17" height="17" fill="#ffffff" />
          <p className="text-[16px] font-[700]  ">Mint Another</p>
        </button>
      </div>
    </div>
  );
};

export default MintCardNFTSuccess;
