import type {User} from "./User.ts";

export type Comment = {
    id: number
    user: User
    content: string
    createdAt: string
}
