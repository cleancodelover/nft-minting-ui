import { GetNFTType } from "./nft";

export type HookOnSuccessType = () => void | null;
export type HookOnErrorType = () => void | null;
export type HookOnMutateType = () => void | null;

export interface GlobalApiResponse {
  message: string;
  count: number;
  status: number;
}

export type GlobalRequestParams = {
  page?: number,
  size?: number,
  searchQuery?: string,
}

export interface GetMintingNFTsApiResponse extends GlobalApiResponse {
  data: GetNFTType[];
}

export interface GetMintingNFTApiResponse extends GlobalApiResponse {
  data: GetNFTType;
}