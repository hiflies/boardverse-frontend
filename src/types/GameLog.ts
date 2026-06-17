import type {Game} from "./Game.ts";
import type {User} from "./User.ts";

export type GameLog = {
    id: number
    game: Game
    players: User[]
    startedAt: string
    finishedAt: string
};