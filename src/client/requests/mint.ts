import { generateUrlWithParams } from "@/src/helpers/generate-params";
import { GetMintingNFTApiResponse, GetMintingNFTsApiResponse, GlobalRequestParams } from "@/src/types/global";
import { MINTING_ENDPONT } from "../endpoints";
import { globalHttpClient } from "../http-client";
import { PostNFTType } from "@/src/types/nft";


export const getNFTsApi = async (params?: GlobalRequestParams) =>{
    const endpoint = generateUrlWithParams(MINTING_ENDPONT, params);
    try {
        const response = await globalHttpClient.get<GetMintingNFTApiResponse>(endpoint);
        return response;
    } catch (error) {
        console.log("Error :>>>>>>>>>>>>", error)
        throw error;
    }
}

export const getNFTByIdApi = async (id?: string) => {
    const endpoint = `${MINTING_ENDPONT}/${id}`;
    try {
        const response = await globalHttpClient.get<GetMintingNFTApiResponse>(endpoint);
        return response;
        
    } catch (error) {
        console.log("Error :>>>>>>>>>>>>", error)
        throw error;
    }
}

export const minNFTApi = async (data: PostNFTType) =>{
    console.log("data :>>>>>>>>>>>>", data);
    try{
        const response = await globalHttpClient.post<GetMintingNFTsApiResponse>(MINTING_ENDPONT, data, {});
        return response;
    } catch (error) {
        console.log("Error :>>>>>>>>>>>>", error)
        throw error;
    }
}