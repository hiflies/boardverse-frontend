import {apiFetch} from '../lib/api'
import type {GameLog} from '../types/GameLog'

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
