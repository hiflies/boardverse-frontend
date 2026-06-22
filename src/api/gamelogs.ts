import {apiFetch, rawApiFetch} from '../lib/api'
import type {GameLog} from '../types/GameLog'
import type {PagedResult} from "../types/Game.ts";
import type {GameLogFilter} from "../types/GameLogFilter.ts";

export type CreateGameLogPayload = {
    gameId: number
    playerIds: number[]
    startedAt: string
    finishedAt: string
}

export function createGameLog(payload: CreateGameLogPayload) {
    return apiFetch<GameLog>('/gamelogs', {
        method: 'POST',
        body: JSON.stringify(payload),
    })
}

export function deleteGameLog(id: string ) {
    return rawApiFetch(`/gamelogs/${id}`, {
        method: 'DELETE',
    })
}

export function getGameLogs(page = 1, filter: GameLogFilter = {}) {
    const params = new URLSearchParams()
    if (page > 1) {
        params.set('page', page.toString());
    }
    for (const [key, value] of Object.entries(filter)) {
        params.set(key, value);
    }

    let qs = params.toString()
    if (qs) {
        qs = `?${qs.toString()}`;
    }
    return apiFetch<PagedResult<GameLog>>(`/gamelogs${qs}`)
}