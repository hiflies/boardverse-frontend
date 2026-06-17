import {useQuery} from '@tanstack/react-query'
import {getPost, getPosts} from "../api/posts.ts";

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
