import { useMutation } from "@tanstack/react-query";
import { HookOnErrorType, HookOnSuccessType } from "../../types/global";
import { minNFTApi } from "@/src/client/requests/mint";
import useToast from "../notifications/toast";
import { PostNFTType } from "@/src/types/nft";
import { useMinting } from "@/src/contexts/minting";

export const useMintingHook = (
    onSuccess?: HookOnSuccessType,
    handleOthers?: any,
    onError?: HookOnErrorType
  ) => {
    const {showToast} = useToast();
    const { mintNFT } = useMinting();
    const {mutate, error, status, isPending, data} = useMutation({
      mutationFn: minNFTApi,
      onSuccess: async res => {
        showToast({message: res?.data?.message, type:'success'});
        handleOthers && res?.data?.data && handleOthers({...res?.data?.data})
        onSuccess && onSuccess();
      },
      onError: (error: any) => {
        const errMsg = error?.response?.data?.message;
        onError && onError();
        showToast({message: errMsg ?? "Failed to verify account", type:'success'});
      },
    });
  
    const handleMint = async (data: PostNFTType) => {
      const transaction = mintNFT && await mintNFT();
      if(transaction){
        data.nftAddress = transaction;
        mutate(data);
      }
    };
  
    return {
      handleMint,
      error,
      status,
      loading: isPending,
      nft: data,
    };
  };
  