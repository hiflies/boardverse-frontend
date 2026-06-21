import {useInfiniteQuery} from '@tanstack/react-query'
import type {GameLogFilter} from "../types/GameLogFilter.ts";
import { getGameLogs } from "../api/gamelogs.ts";

export function useGameLogs(filter: GameLogFilter = {}) {
    return useInfiniteQuery({
        queryKey: ['gamelogs', filter],
        queryFn: ({pageParam}) => getGameLogs(pageParam, filter),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    })
}
