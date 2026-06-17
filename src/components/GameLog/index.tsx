import type {GameLog} from "../../types/GameLog.ts";
import Markdown from "react-markdown";

type GameLogProps = {
    gameLog: GameLog;
    content: string;
}

export default function GameLog({gameLog, content}: GameLogProps) {
    const startedAt = new Date(gameLog.startedAt);
    const finishedAt = new Date(gameLog.finishedAt);
    const duration = Math.round((finishedAt.getTime() - startedAt.getTime())/60_000);
    return (
        <div
            className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                    {gameLog.game.name}
                </h4>
                <div className="font-body-md text-body-md text-on-surface-variant">
                    <Markdown>{content}</Markdown>
                </div>
            </div>
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
                                <span key={player.id}>
                                    @{player.username}
                                </span>
                            ))
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}