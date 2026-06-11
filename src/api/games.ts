import { apiFetch } from '../lib/api'

export type Game = {
    id: number
    name: string
    description: string
    category: string
    minPlayers : number
    maxPlayers : number
    releaseYear: number
    imageUrl : string
    gameRulesUrl :string
    createdAt : string
    updatedAt: string

    duration: number
    complexity: number

}

export function getGames() {
    return apiFetch<Game[]>('/Game')
}

export function getGame(id: string) {
    return apiFetch<Game>(`/Game/${id}`)
}
