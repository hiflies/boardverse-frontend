import Post from "../../components/Post";
import CreatePost from "../../components/CreatePost";
import {usePosts} from "../../hooks/usePosts.ts";
import {useIsAuthenticated} from "../../store/auth.ts";
import {useEffect, useRef} from "react";

export default function HomePage() {
    const {data, isLoading, isError, error, refetch, fetchNextPage, hasNextPage, isFetchingNextPage} = usePosts();
    const isAuthenticated = useIsAuthenticated();
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
        <main
            className="flex-1 w-full px-margin-mobile md:px-margin-desktop py-md md:py-lg flex justify-center">
            <div className="w-full max-w-2xl flex flex-col gap-lg">
                {isAuthenticated && <CreatePost refetch={refetch}/>}
                <div className="flex flex-col">
                    {isLoading && (
                        <p className="text-on-surface-variant font-body-md text-body-md">Loading posts...</p>
                    )}
                    {isError && (
                        <p className="text-error font-body-md text-body-md">Failed to load posts: {error.message}</p>
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
            </div>
        </main>
    );
}
