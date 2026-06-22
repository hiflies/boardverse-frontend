import {apiFetch, rawApiFetch} from '../lib/api'
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
    pageSize?: number
    sortBy?: string
    username?: string
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
    if (filter.username != null) params.set('username', String(filter.username))
    if (filter.sortBy != null) params.set('sortBy', String(filter.sortBy))
    if (filter.page && filter.page > 1) params.set('page', String(filter.page))
    if (filter.pageSize) params.set('pageSize', String(filter.pageSize))
    const qs = params.toString()
    return apiFetch<PagedResult<Game>>(`/games${qs ? `?${qs}` : ''}`)
}

export function getGame(id: string) {
    return apiFetch<GameDetails>(`/games/${id}`)
}

export async function collectGame(gameId: string) {
    const response = await rawApiFetch(`/games/${gameId}/collect`, {method: 'POST'})
    if (!response.ok) {
        throw new Error(`Request to collect game failed with status ${response.status}`)
    }
    return true;
}