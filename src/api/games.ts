import {apiFetch} from '../lib/api'
import type {Game, GameDetails, PagedResult} from "../types/Game.ts";

export type GamesFilter = {
    name?: string
    categories?: number[]
    minComplexity?: number
    maxComplexity?: number
    playerCount?: number
    minRating?: number
    maxRating?: number
    page?: number
}

export function getGames(filter: GamesFilter = {}) {
    const params = new URLSearchParams()
    if (filter.name) params.set('name', filter.name)
    filter.categories?.forEach(id => params.append('categories', String(id)))
    if (filter.minComplexity != null) params.set('minComplexity', String(filter.minComplexity))
    if (filter.maxComplexity != null) params.set('maxComplexity', String(filter.maxComplexity))
    if (filter.playerCount != null) params.set('playerCount', String(filter.playerCount))
    if (filter.minRating != null) params.set('minRating', String(filter.minRating))
    if (filter.maxRating != null) params.set('maxRating', String(filter.maxRating))
    if (filter.page && filter.page > 1) params.set('page', String(filter.page))
    const qs = params.toString()
    return apiFetch<PagedResult<Game>>(`/games${qs ? `?${qs}` : ''}`)
}

export function getGame(id: string) {
    return apiFetch<GameDetails>(`/games/${id}`)
}
