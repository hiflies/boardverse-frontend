import GameCard from "../../components/GameCard";
import {useGames} from "../../hooks/useGames";
import "./style.css";
import {useUIStore} from "../../store/ui.tsx";
import {useEffect} from "react";
import Filter from "./Filter.tsx";

export default function GameList() {
    const {data: games, isLoading, isError, error} = useGames();
    const {setSidebarSlot} = useUIStore();

    useEffect(() => {
        setSidebarSlot(<Filter/>);

        return () => setSidebarSlot(null);
    }, [setSidebarSlot]);

    return (
        <main className="flex-1 flex flex-col md:flex-row w-full max-w-max-width mx-auto">
            <div className="flex-1 p-gutter md:p-margin-desktop flex flex-col gap-lg">
                <div className="flex flex-col gap-4">
                    <div className="flex items-end justify-between">
                        <div>
                            <h1 className="font-display-lg md:text-display-lg text-display-lg-mobile font-bold text-on-background">Explore
                                Library</h1>
                            <p className="text-on-surface-variant mt-2 font-body-lg text-body-lg">Showing 142 premium
                                titles matching your criteria.</p>
                        </div>
                    </div>
                </div>
                {isLoading && (
                    <p className="text-on-surface-variant font-body-md text-body-md">Loading games...</p>
                )}
                {isError && (
                    <p className="text-error font-body-md text-body-md">Failed to load games: {error.message}</p>
                )}
                {games && games.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                        {games.map((game) => (
                            <GameCard
                                key={game.id}
                                game={game}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}