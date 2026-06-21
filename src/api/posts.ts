import {apiFetch, rawApiFetch} from '../lib/api'
import type {Post} from "../types/Post.ts";
import type {Comment} from "../types/Comment.ts";
import type {PagedResult} from "../types/Game.ts";

export function getPosts(page = 1) {
    const qs = page > 1 ? `?page=${page}` : ''
    return apiFetch<PagedResult<Post>>(`/posts${qs}`)
}

export function getPost(id: string) {
    return apiFetch<Post>(`/posts/${id}`)
}

export function getComments(id: string) {
    return apiFetch<Comment[]>(`/posts/${id}/comments`)
}

export async function createPost(content: string, hashtags: string[], image: File | null) {
    const form = new FormData()
    form.append('content', content)
    hashtags.forEach(tag => form.append('hashtags', tag))
    if (image) form.append('image', image)

    return await apiFetch<Post>('/posts', {method: 'POST', body: form})
}

export async function createComment(id: string, content: string) {
    return await apiFetch<Post>(`/posts/${id}/comments`, {method: 'POST', body: JSON.stringify({ content })})
}

export async function deletePost(postId: string) {
    const response= await rawApiFetch(`/posts/${postId}`, {method: 'DELETE'})
    if (!response.ok) {
        throw new Error(`Request to delete post failed with status ${response.status}`)
    }
    return true;
}

export async function deleteComment(postId: string, commentId: string) {
    const response= await rawApiFetch(`/posts/${postId}/comments/${commentId}`, {method: 'DELETE'})
    if (!response.ok) {
        throw new Error(`Request to delete comment failed with status ${response.status}`)
    }
    return true;
}
