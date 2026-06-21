import {useInfiniteQuery, useQuery} from '@tanstack/react-query'
import {getComments, getPost, getPosts} from "../api/posts.ts";

export function usePosts() {
    return useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: ({pageParam}) => getPosts(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
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