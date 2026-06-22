import type { Game } from "./Game"

export type User = {
    id: number
    username: string
    profileText?: string
    avatarUrl?: string
    topGames?: Game[]
}
