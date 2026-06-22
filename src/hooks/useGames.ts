import {useInfiniteQuery, useQuery} from '@tanstack/react-query'
import {getGame, getGames, type GamesFilter} from '../api/games'

export function useGames(filter: GamesFilter = {}, enabled = true) {
    return useInfiniteQuery({
        queryKey: ['games', filter],
        queryFn: ({pageParam}) => getGames({...filter, page: pageParam}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        enabled,
    });
}

export function useGame(id: string) {
    return useQuery({
        queryKey: ['games', id],
        queryFn: () => getGame(id),
    })
}
