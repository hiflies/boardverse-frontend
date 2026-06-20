import { apiFetch, rawApiFetch } from '../lib/api'
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

export async function createPost(content: string, hashtags: string[], image: File | null): Promise<Post> {
    const form = new FormData()
    form.append('content', content)
    hashtags.forEach(tag => form.append('hashtags', tag))
    if (image) form.append('image', image)

    const response = await rawApiFetch('/posts', {method: 'POST', body: form})
    if (!response.ok) throw new Error(`createPost failed: ${response.status}`)
    return response.json() as Promise<Post>
}