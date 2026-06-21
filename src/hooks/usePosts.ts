import {useInfiniteQuery, useQuery} from '@tanstack/react-query'
import {getComments, getPost, getPosts} from "../api/posts.ts";
import type {PostFilter} from "../types/PostFilter.ts";

export function usePosts(postFilter: PostFilter = {}) {
    return useInfiniteQuery({
        queryKey: ['posts', postFilter],
        queryFn: ({pageParam}) => getPosts(pageParam, postFilter),
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