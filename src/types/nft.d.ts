

export interface PostNFTType {
    name: string;
    description: string;
    logoUrl: string;
    tokenId?: number;
    nftAddress?: string;
  }

  export interface GetNFTType {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
    nftAddress?: string;
  }