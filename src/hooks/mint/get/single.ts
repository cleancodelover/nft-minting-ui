import { getNFTByIdApi } from "@/src/client/requests/mint";
import { GetNFTType } from "@/src/types/nft";
import { useQuery } from "@tanstack/react-query";

export const useGetNFT = (id?: string) =>{
    const queryKey = [id]
    const { data, isPending, isError} = useQuery({ queryKey:queryKey, queryFn: ()=> getNFTByIdApi(id) });

    return {
        nft: data?.data?.data as GetNFTType,
        loading: isPending,
        error: isError,
    }
}