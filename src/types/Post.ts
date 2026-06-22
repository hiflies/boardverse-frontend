import type {User} from "./User.ts";
import type {GameLog} from "./GameLog.ts";

export type Post = {
    id: number
    user: User
    content: string
    gameLog?: GameLog
    imageUrl?: string
    likeCount: number
    isLikedByCurrentUser: boolean
    commentCount: number
    createdAt: string
}
