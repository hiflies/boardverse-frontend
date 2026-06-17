import { apiFetch } from '../lib/api'
import type {Post} from "../types/Post.ts";
import type {Comment} from "../types/Comment.ts";

export function getPosts() {
    return apiFetch<Post[]>('/posts')
}

export function getPost(id: string) {
    return apiFetch<Post>(`/posts/${id}`)
}

export function getComments(id: string) {
    return apiFetch<Comment[]>(`/posts/${id}/comments`)
}