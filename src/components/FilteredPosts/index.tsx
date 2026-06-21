import {usePosts} from "../../hooks/usePosts.ts";
import {type PropsWithChildren, useEffect, useRef} from "react";
import Post from "../Post";
import type { PostFilter } from "../../types/PostFilter.ts";

type FilteredPostsProps = {
    filter: PostFilter;
};

export default function FilteredPosts({filter, children}: PropsWithChildren<FilteredPostsProps>) {
    const {data, isLoading, isError, error, refetch, fetchNextPage, hasNextPage, isFetchingNextPage} = usePosts(filter);
    const sentinelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const sentinel = sentinelRef.current
        if (!sentinel) return
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage()
                }
            },
            {rootMargin: '200px'},
        )
        observer.observe(sentinel)
        return () => observer.disconnect()
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    const allPosts = data?.pages.flatMap(p => p.items) ?? []

    return (
        <div className="flex flex-col">
            {isLoading && (
                <p className="text-on-surface-variant font-body-md text-body-md">Loading posts...</p>
            )}
            {isError && (
                <p className="text-error font-body-md text-body-md">Failed to load posts: {error.message}</p>
            )}

            {!isLoading && !isError && allPosts.length === 0 && (
                <p className="text-secondary font-body-md text-body-md">{children}</p>
            )}
            {allPosts.map((post, index) => (
                <Post
                    ref={index === allPosts.length - 1 ? sentinelRef : undefined}
                    key={post.id}
                    post={post}
                    refetch={refetch}
                />
            ))}

            {isFetchingNextPage && (
                <div className="py-lg flex justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined animate-spin"
                              data-icon="progress_activity">progress_activity</span>
                </div>
            )}
        </div>
    );
}

