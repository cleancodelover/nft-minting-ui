//#region Imports
import { extractErrorMessage, generateFakeAddress } from "@/src/helpers";
import useToast from "@/src/hooks/notifications/toast";
import React, { createContext, useContext, useState } from "react";
import { parseAbi } from "viem";
import { useAccount, useWalletClient } from "wagmi";
//#endregion

type MintingProviderProps = {
  children: React.ReactNode;
};

export type MintingContextModel = {
    mintNFT?:()=>void,
};

const CONTRACT_ADDRESS = "0x743f49311a82fe72eb474c44e78da2a6e0ae951c";
const nftAbi = parseAbi([
  "function mint(address to, uint256 tokenId) external",
]);

export const MintingContext = createContext<MintingContextModel>({});

const MintingProvider = ({ children }: MintingProviderProps) => {
  const { data: walletClient } = useWalletClient();
  const { address } = useAccount();
  // const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const { showToast } = useToast();

  const mintNFT = async () => {
    if (!walletClient || !address) {
      console.error('Wallet not connected');
      return;
    }

    try {
      // const transaction = await walletClient.writeContract({
      //   address: CONTRACT_ADDRESS,
      //   abi: nftAbi,
      //   functionName: 'mint',
      //   args: [address, BigInt(1)], // Mint token ID 1 to the user's wallet
      // });
      // console.log('NFT Minted! Transaction Hash:', transaction);
      // setTransactionHash(transaction);
      // return transaction ?? generateFakeAddress();
      return generateFakeAddress();
      
    } catch (error: any) {
      // console.error('Minting failed:', error);
      const errorMessage = new Error(error);
      if(showToast){
        showToast({message:`${extractErrorMessage(errorMessage)}`, type:'error'});
      }
    }
  };

  return (
    <MintingContext.Provider value={{mintNFT}}>{children}</MintingContext.Provider>
  );
};

export default MintingProvider;

export const useMinting = () => useContext(MintingContext);
