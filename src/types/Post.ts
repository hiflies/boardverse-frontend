import type {User} from "./User.ts";
import type {GameLog} from "./GameLog.ts";

export type Post = {
    id: number
    user: User
    content: string
    gameLog?: GameLog
    hashtags: string[]
    imageUrl?: string
    likeCount: number
    commentCount: number
    createdAt: string
}
