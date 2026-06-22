import {useInfiniteQuery, useQuery} from '@tanstack/react-query'
import {getComments, getPosts} from "../api/posts.ts";
import type {PostFilter} from "../types/PostFilter.ts";
import {useAuthStore} from "../store/auth.ts";

export function usePosts(postFilter: PostFilter = {}) {
    const username = useAuthStore(a => a.username);
    return useInfiniteQuery({
        queryKey: ['posts', postFilter, username],
        queryFn: ({pageParam}) => getPosts(pageParam, postFilter),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    })
}

export function useComments(id: string) {
    return useQuery({
        queryKey: ['comments', id],
        queryFn: () => getComments(id),
    })
}