import type {GameLog as GameLogType, GameLog} from "../../types/GameLog.ts";
import {Link} from "@tanstack/react-router";
import {gameDetailRoute, profileRoute} from "../../router.tsx";
import {forwardRef, type Ref} from "react";
import clsx from "clsx";

type GameLogProps = {
    gameLog: GameLog;

    buttonIcon?: string;
    onButtonClick?: (gameLog: GameLogType) => void;
}

function GameLog({gameLog, buttonIcon, onButtonClick}: GameLogProps, ref: Ref<HTMLDivElement>) {
    const startedAt = new Date(gameLog.startedAt);
    const finishedAt = new Date(gameLog.finishedAt);
    const duration = Math.round((finishedAt.getTime() - startedAt.getTime()) / 60_000);

    return (
        <div
            ref={ref}
            className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 mb-4 grid grid-cols-2 gap-4">
            <div className={clsx({"col-span-2": !buttonIcon})}>
                <Link
                    to={gameDetailRoute.fullPath}
                    params={{gameId: gameLog.game.id.toString()}}
                    className="font-headline-sm text-headline-sm text-on-surface mb-1">
                    {gameLog.game.name}
                </Link>
            </div>
            {Boolean(buttonIcon) && (
                <div className="flex justify-end gap-2 text-on-surface-variant text-right">
                    <button
                        onClick={() => onButtonClick?.(gameLog)}
                        className="text-on-surface-variant hover:text-secondary transition-colors p-1 cursor-pointer">
                        <span className="material-symbols-outlined text-[16px]" data-icon={buttonIcon}>{buttonIcon}</span>
                    </button>
                </div>
            )}
            <div className="flex items-center gap-2 text-on-surface-variant">
                <div
                    className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary-fixed"
                                data-icon="calendar_month">calendar_month</span>
                </div>
                <div>
                    <p className="font-label-sm text-label-sm uppercase opacity-70">When</p>
                    <p className="font-label-md text-label-md text-on-surface">
                        {startedAt.toLocaleString()}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
                <div
                    className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary-fixed"
                                                      data-icon="history_2">history_2</span>
                </div>
                <div>
                    <p className="font-label-sm text-label-sm uppercase opacity-70">Duration</p>
                    <p className="font-label-md text-label-md text-on-surface">
                        {duration} minutes
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
                <div
                    className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary-fixed"
                                                      data-icon="group">group</span>
                </div>
                <div>
                    <p className="font-label-sm text-label-sm uppercase opacity-70">Players</p>
                    <p className="font-label-md text-label-md text-on-surface flex flex-column gap-xs">
                        {
                            gameLog.players.map((player) => (
                                <Link
                                    to={profileRoute.fullPath}
                                    params={{username: player.username}}
                                    key={player.id}>
                                    @{player.username}
                                </Link>
                            ))
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(GameLog);