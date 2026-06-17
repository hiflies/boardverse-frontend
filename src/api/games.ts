import {apiFetch} from '../lib/api'
import type {Game, GameDetails} from "../types/Game.ts";

export function getGames() {
    return apiFetch<Game[]>('/games')
}

export function getGame(id: string) {
    return apiFetch<GameDetails>(`/games/${id}`)
}
