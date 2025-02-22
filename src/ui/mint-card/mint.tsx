"use client";
import PrimaryTextInputComponent from "@/src/components/inputs/text-input";
import {PrimaryTextAreaInput} from "@/src/components/inputs/textarea";
import {Loader2} from "lucide-react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import AppLogo from "@/src/svgs/logo";
import { iValidateMinting } from "@/src/form-validators/mint";
import { useMintingHook } from "@/src/hooks/mint/post";
import { GetNFTType, PostNFTType } from "@/src/types/nft";
import { Dispatch, SetStateAction } from "react";

interface ComponentProps {
  toggleTab: () => void;
  setNFT: Dispatch<SetStateAction<GetNFTType | undefined>>
}

const MintCardCreateNFT = ({toggleTab, setNFT}: ComponentProps) => {
  const {control, handleSubmit, formState:{ errors} } = useForm({resolver: yupResolver(iValidateMinting),});
  const { loading, handleMint } = useMintingHook(toggleTab, setNFT);
  const onMint = (data: PostNFTType) =>{
    handleMint(data);
  }

  return (
    <div className="w-[576px] h-full rounded-[16px] border-[1px] border-[#1F2937] bg-[#11182780] p-[33px] flex flex-col space-y-4 sm:w-full sm:px-[12px] ">
      <div className="h-[32px] flex flex-2 ">
        <h1 className="font-[700] text-[24px] text-white leading-[29.05px] ">
          Mint Your NFT
        </h1>
      </div>

      <div className="flex flex-1 w-full flex-col justify-between space-y-4">
        <PrimaryTextInputComponent
          type="text"
          control={control}
          name="name"
          label="NTF Name"
          placeholder="Enter NFT name"
          error={errors.name?.message}
        />

        <PrimaryTextAreaInput
          type="text"
          control={control}
          name="description"
          label="NTF Description"
          placeholder="Describe your NFT"
          error={errors.description?.message}
        />

        <PrimaryTextInputComponent
          type="url"
          control={control}
          name="logoUrl"
          label="NTF Url"
          error={errors.logoUrl?.message}
          placeholder="Enter image URL"
        />

        <button
          onClick={handleSubmit(onMint)}
          className="w-full h-[58px] space-x-2 flex items-center justify-center rounded-[12px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110"
        >
          {loading ? (
            <Loader2 className="animate-spin" color="#ffffff" />
          ) : (
            <>
              <AppLogo width="17" height="17" fill="#ffffff" />
              <p className="text-[16px] font-[700]  ">Mint NFT</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MintCardCreateNFT;
