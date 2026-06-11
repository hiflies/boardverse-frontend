import { useQuery } from '@tanstack/react-query'
import { getGame, getGames } from '../api/games'

export function useGames() {
    return useQuery({
        queryKey: ['games'],
        queryFn: getGames,
    })
}

export function useGame(id: string) {
    return useQuery({
        queryKey: ['games', id],
        queryFn: () => getGame(id),
        enabled: !!id,
    })
}
