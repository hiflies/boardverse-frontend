import GameCard from "../../components/GameCard";
import {useGames} from "../../hooks/useGames";
import "./style.css";
import {useUIStore} from "../../store/ui.tsx";
import {useEffect, useRef} from "react";
import Filter from "./Filter.tsx";
import {useSearch} from "@tanstack/react-router";
import {gameListRoute} from "../../router.tsx";

export default function GameList() {
    const search = useSearch({from: gameListRoute.id})
    const {data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage} = useGames(search)
    const {setSidebarSlot} = useUIStore();
    const sentinelRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        setSidebarSlot(<Filter/>);
        return () => setSidebarSlot(null);
    }, [setSidebarSlot]);

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

    const allItems = data?.pages.flatMap(p => p.items) ?? []
    const totalCount = data?.pages[0]?.totalCount ?? 0

    return (
        <main className="flex-1 flex flex-col md:flex-row w-full max-w-max-width mx-auto">
            <div className="flex-1 p-gutter md:p-margin-desktop flex flex-col gap-lg">
                <div className="flex flex-col gap-4">
                    <div className="flex items-end justify-between">
                        <div>
                            <h1 className="font-display-lg md:text-display-lg text-display-lg-mobile font-bold text-on-background">
                                {search.username ? `${search.username}'s` : 'Explore'} Library
                            </h1>
                            {data && (
                                <p className="text-on-surface-variant mt-2 font-body-lg text-body-lg">
                                    Showing {allItems.length} of {totalCount} titles.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                {isLoading && (
                    <p className="text-on-surface-variant font-body-md text-body-md">Loading games...</p>
                )}
                {isError && (
                    <p className="text-error font-body-md text-body-md">Failed to load games: {error.message}</p>
                )}
                {allItems.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-gutter">
                        {allItems.map((game, index) => (
                            <GameCard
                                key={game.id}
                                game={game}
                                ref={index === allItems.length - 1 ? sentinelRef : undefined}
                            />
                        ))}
                    </div>
                )}
                {data && allItems.length === 0 && !isLoading && (
                    <p className="text-on-surface-variant font-body-md text-body-md">No games match your filters.</p>
                )}
                {isFetchingNextPage && (
                    <p className="text-on-surface-variant font-body-md text-body-md text-center py-lg">Loading
                        more...</p>
                )}
            </div>
        </main>
    );
}
