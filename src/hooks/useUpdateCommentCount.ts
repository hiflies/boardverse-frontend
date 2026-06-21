import {type InfiniteData, useQueryClient} from "@tanstack/react-query";
import type {PagedResult} from "../types/Game.ts";
import type {Post} from "../types/Post.ts";

export default function useUpdateCommentCount(postId: number) {
    const queryClient = useQueryClient();
    return (change: number) => {
        const previous = queryClient.getQueryData<InfiniteData<PagedResult<Post>>>(['posts']);
        queryClient.setQueryData<InfiniteData<PagedResult<Post>>>(['posts'], (old) => {
            if (!old) return old;
            return {
                ...old,
                pages: old.pages.map((page) => ({
                    ...page,
                    items: page.items.map((p) =>
                        p.id === postId ? {...p, commentCount: p.commentCount + change} : p
                    ),
                })),
            };
        });
        return {previous};
    }
}