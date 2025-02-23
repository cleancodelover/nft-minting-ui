//#region Imports
import { extractErrorMessage, generateFakeAddress } from "@/src/helpers";
import useToast from "@/src/hooks/notifications/toast";
import { PostNFTType } from "@/src/types/nft";
import React, { createContext, useContext, useEffect, useState } from "react";
import { parseAbi } from "viem";
import { useAccount, useWalletClient } from "wagmi";
//#endregion

type MintingProviderProps = {
  children: React.ReactNode;
};

export type MintingContextModel = {
    mintNFT?:(data?: PostNFTType)=>void,
    isConnected?:boolean
};

const CONTRACT_ADDRESS = "0x743f49311a82fe72eb474c44e78da2a6e0ae951c";
const nftAbi = parseAbi([
  "function mint(address to, uint256 tokenId, string memory metadataUrl) public returns (string memory)",
]);

export const MintingContext = createContext<MintingContextModel>({});

const MintingProvider = ({ children }: MintingProviderProps) => {
  const { data: walletClient } = useWalletClient();
  const { address, isConnected } = useAccount();
  const { showToast } = useToast();

  const mintNFT = async (data?: PostNFTType) => {
    if (!walletClient || !address || !data || !data?.tokenId) {
      console.error('Wallet not connected');
      if(showToast){
        showToast({message:`All fields are required. Wallet may also not connected`, type:'error'});
      }
      return;
    }

    try {
      const transaction = await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: nftAbi,
        functionName: 'mint',
        args: [address, BigInt(data.tokenId), data.logoUrl],
      });
      
      return transaction ?? generateFakeAddress();
      
    } catch (error: any) {
      // console.error('Minting failed:', error);
      const errorMessage = new Error(error);
      if(showToast){
        showToast({message:`${extractErrorMessage(errorMessage)}`, type:'error'});
      }
      return null;
    }
  };

  return (
    <MintingContext.Provider value={{mintNFT, isConnected}}>{children}</MintingContext.Provider>
  );
};

export default MintingProvider;

export const useMinting = () => useContext(MintingContext);
