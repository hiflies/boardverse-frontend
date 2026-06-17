import {useQuery} from '@tanstack/react-query'
import {getComments, getPost, getPosts} from "../api/posts.ts";

export function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })
}

export function usePost(id: string) {
    return useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPost(id),
    })
}

export function useComments(id: string) {
    return useQuery({
        queryKey: ['comments', id],
        queryFn: () => getComments(id),
    })
}