import {apiFetch, rawApiFetch} from '../lib/api'
import type {Post} from "../types/Post.ts";
import type {Comment} from "../types/Comment.ts";
import type {PagedResult} from "../types/Game.ts";
import type {PostFilter} from "../types/PostFilter.ts";

export function getPosts(page = 1, filter: PostFilter = {}) {
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
    return apiFetch<PagedResult<Post>>(`/posts${qs}`)
}

export function getPost(id: string) {
    return apiFetch<Post>(`/posts/${id}`)
}

export function getComments(id: string) {
    return apiFetch<Comment[]>(`/posts/${id}/comments`)
}

export async function createPost(content: string, image: File | null, gameLogId?: string) {
    const form = new FormData()
    form.append('content', content)
    if (image) form.append('image', image)
    if (gameLogId) form.append('gameLogId', gameLogId);

    return await apiFetch<Post>('/posts', {method: 'POST', body: form})
}

export async function createComment(id: string, content: string) {
    return await apiFetch<Post>(`/posts/${id}/comments`, {method: 'POST', body: JSON.stringify({content})})
}

export async function deletePost(postId: string) {
    const response = await rawApiFetch(`/posts/${postId}`, {method: 'DELETE'})
    if (!response.ok) {
        throw new Error(`Request to delete post failed with status ${response.status}`)
    }
    return true;
}

export async function deleteComment(postId: string, commentId: string) {
    const response = await rawApiFetch(`/posts/${postId}/comments/${commentId}`, {method: 'DELETE'})
    if (!response.ok) {
        throw new Error(`Request to delete comment failed with status ${response.status}`)
    }
    return true;
}
