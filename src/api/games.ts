import { apiFetch } from '../lib/api'
import type {Game} from "../types/Game.ts";

export function getGames() {
    return apiFetch<Game[]>('/Game')
}

export function getGame(id: string) {
    return apiFetch<Game>(`/Game/${id}`)
}
