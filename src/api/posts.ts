import { apiFetch } from '../lib/api'
import type {Post} from "../types/Post.ts";

export function getPosts() {
    return apiFetch<Post[]>('/posts')
}

export function getPost(id: string) {
    return apiFetch<Post>(`/posts/${id}`)
}
