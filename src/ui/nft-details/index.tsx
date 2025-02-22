import { formatNumberWithHash } from "@/src/helpers";
import { GetNFTType } from "@/src/types/nft";
import Image from "next/image";

interface ModalProps {
  nft?: GetNFTType
}

export default function NFTDetails({ nft }: ModalProps) {

  return (

    <div className="w-[510px] h-[550px] sm:w-full sm:h-auto rounded-[12px] bg-[#1F293780] border-[1px] shadow-sm p-[24px] sm:px-[12px] flex flex-col space-y-6 ">
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
  );
}
