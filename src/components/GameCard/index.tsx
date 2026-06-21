import type {Game} from "../../types/Game.ts";
import {Link} from "@tanstack/react-router";
import {gameDetailRoute} from "../../router.tsx";
import {forwardRef, type Ref} from "react";

type GameCardProps = {
    game: Game;
}

function GameCard({game}: GameCardProps, ref: Ref<HTMLAnchorElement>) {
    return (
        <Link
            ref={ref}
            to={gameDetailRoute.fullPath}
            params={{gameId: game.id.toString()}}
            className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20 relative group card-hover transition-all duration-300 flex flex-col mb-lg">
            <div
                className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
            <div className="linen-texture absolute inset-0 pointer-events-none rounded-xl"></div>
            <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={game.imageUrl}/>
                <div
                    className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm border border-secondary/30 text-secondary font-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">weight</span> {game.complexity}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1 z-10">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">{game.name}</h3>
                <p className="text-on-surface-variant font-body-sm text-sm mb-4 line-clamp-2">{game.tagline}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                    {
                        game.categories.map(category => (
                            <span
                                key={category.id}
                                className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">
                                {category.name}
                            </span>
                        ))
                    }
                </div>
                <div
                    className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm">
    <span className="flex items-center gap-1"><span
        className="material-symbols-outlined text-[16px]">group</span>{game.minPlayers === game.maxPlayers ? game.minPlayers : `${game.minPlayers}-${game.maxPlayers}`}</span>
                        <span className="flex items-center gap-1"><span
                            className="material-symbols-outlined text-[16px]">schedule</span> {game.duration}m</span>
                    </div>
                    <button className="text-primary hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined">bookmark_add</span>
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default forwardRef(GameCard);