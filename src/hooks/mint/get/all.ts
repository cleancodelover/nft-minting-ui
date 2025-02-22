import { getNFTsApi } from "@/src/client/requests/mint";
import { queryKeys } from "@/src/react-query/query-keys";
import { GlobalRequestParams } from "@/src/types/global";
import { GetNFTType } from "@/src/types/nft";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";

export const useGetNFTs = (initialParams?: GlobalRequestParams) => {
    const [params, setParams] = useState<GlobalRequestParams>(initialParams || {});
    
    const queryKey = useMemo(() => [queryKeys.NFTS, params], [params]);

    const { 
        data, 
        isPending, 
        isFetching, 
        isError, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage 
    } = useInfiniteQuery({
        queryKey, 
        queryFn: ({ pageParam }) => getNFTsApi({ page: pageParam, ...params }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => {
            return pages != null ? pages?.length + 1 : 1; // Avoids infinite requests
        }
    });

    const handleSearch = useCallback((searchQuery?: GlobalRequestParams) => {
        setParams((prevParams) => {
            if (JSON.stringify(prevParams) !== JSON.stringify(searchQuery)) {
                return { ...prevParams, ...searchQuery };
            }
            return prevParams;
        });
    }, []);

    const nfts = useMemo(() => 
        data?.pages.reduce((acc, page) => {
            acc.count += page?.data?.count;
            acc.data = acc.data.concat(page?.data?.data);
            return acc;
        }, {
            count: 0,
            data: [] as GetNFTType[]
        }), 
        [data]
    );

    return {
        nfts: nfts?.data ?? [],
        loading: isPending,
        fetching: isFetching,
        error: isError,
        fetchNextPage,
        handleSearch,
        hasNextPage,
        isFetchingNextPage
    };
};