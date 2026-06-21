import {type PropsWithChildren, useEffect, useRef} from "react";
import type {GameLogFilter} from "../../types/GameLogFilter.ts";
import {useGameLogs} from "../../hooks/useGameLogs.ts";
import type {GameLog as GameLogType} from "../../types/GameLog.ts";
import GameLog from "../GameLog";

type FilteredGameLogsProps = {
    filter: GameLogFilter;
    buttonIcon?: string;
    onButtonClick?: (gameLog: GameLogType) => void;
};

export default function FilteredGameLogs(props: PropsWithChildren<FilteredGameLogsProps>) {
    const {filter, buttonIcon, onButtonClick, children} = props;
    const {data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage} = useGameLogs(filter);
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

    const allLogs = data?.pages.flatMap(p => p.items) ?? []

    return (
        <div className="flex flex-col">
            {isLoading && (
                <p className="text-on-surface-variant font-body-md text-body-md">Loading game logs...</p>
            )}
            {isError && (
                <p className="text-error font-body-md text-body-md">Failed to load game logs: {error.message}</p>
            )}

            {!isLoading && !isError && allLogs.length === 0 && (
                <p className="text-secondary font-body-md text-body-md">{children}</p>
            )}
            {allLogs.map((log, index) => (
                <GameLog
                    ref={index === allLogs.length - 1 ? sentinelRef : undefined}
                    key={log.id}
                    gameLog={log}
                    buttonIcon={buttonIcon}
                    onButtonClick={onButtonClick}
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

