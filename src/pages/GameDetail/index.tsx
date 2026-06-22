import {useGame} from "../../hooks/useGames.ts";
import {gameDetailRoute, gameListRoute, loginRoute} from "../../router.tsx";
import {useState} from "react";
import clsx from "clsx";
import FilteredPosts from "../../components/FilteredPosts";
import Markdown from "../../components/Markdown";
import Modal from "../../components/Modal";
import CreateGameLog from "../../components/CreateGameLog";
import {useIsAuthenticated} from "../../store/auth.ts";
import {Link} from "@tanstack/react-router";
import {useMutation} from "@tanstack/react-query";
import { collectGame } from "../../api/games.ts";

export default function GameDetail() {
    const gameId = gameDetailRoute.useParams({select: params => params.gameId});
    const isAuthenticated = useIsAuthenticated();
    const {data: game, isLoading, isError, error, refetch} = useGame(gameId);
    const [isCommunityVisible, setIsCommunityVisible] = useState(false);
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);
    const navigate = loginRoute.useNavigate();

    const addCollectionMutation = useMutation({
        mutationFn: () => {
            return collectGame(game!.id.toString());
        },
        onSuccess: async () => {
            refetch();
        },
    });

    if (isLoading || isError || !game || error) {
        return (
            <div>Loading...</div>
        );
    }

    let topCategories = [...game.categories];
    topCategories.sort((a, b) => a.name.length - b.name.length);
    topCategories = topCategories.slice(0,2);

    return (
        <main className="flex-1 overflow-y-auto">
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-end">
                <div className="absolute inset-0 z-0 bg-surface-container">
                    <img className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                         src={game.imageUrl}/>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                    <div className="absolute inset-0 texture-overlay"></div>
                </div>
                <div
                    className="relative z-10 w-full max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin-desktop pb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-xs mb-2">
                            <span
                                className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-label-sm font-label-sm flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                {game.averageRating}
                            </span>
                            {topCategories.map((category) => (
                                <span key={category.id}
                                      className="text-label-md font-label-md text-on-surface-variant tracking-widest uppercase">
                                        {category.name}
                                </span>
                            ))}

                        </div>
                        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface mb-2 tracking-tight">{game.name}</h1>
                        <p className="text-title-lg font-title-lg text-on-surface-variant font-medium mb-4">
                            {game.tagline}
                        </p>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary text-sm">group</span>
                                <span
                                    className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Players:</span>
                                <span
                                    className="text-body-md font-body-md text-on-surface font-medium">{game.minPlayers} - {game.maxPlayers}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                                <span
                                    className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Play Time:</span>
                                <span
                                    className="text-body-md font-body-md text-on-surface font-medium">{game.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary text-sm">cake</span>
                                <span
                                    className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Age:</span>
                                <span
                                    className="text-body-md font-body-md text-on-surface font-medium">{game.minAge}+</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary text-sm">psychology</span>
                                <span
                                    className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Complexity:</span>
                                <span
                                    className="text-body-md font-body-md text-on-surface font-medium">{game.complexity} / 5</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 min-w-115">
                        <button
                            onClick={() => isAuthenticated ? addCollectionMutation.mutate() : navigate({})}
                            className="bg-primary-container text-on-primary-container hover:brightness-110 transition-all duration-200 px-8 py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 shadow-lg min-w-[180px] cursor-pointer">
                            <span className="material-symbols-outlined">
                                {game.isOwnedByCurrentUser ? 'bookmark_added' : 'bookmark_add'}
                            </span>
                            {game.isOwnedByCurrentUser ? 'Remove' : 'Add to Collection'}
                        </button>
                        <button
                            onClick={() => isAuthenticated ? setIsLogModalOpen(true) : navigate({})}
                            className="bg-surface-bright/50 backdrop-blur-sm text-on-surface hover:bg-surface-bright/70 transition-all duration-200 px-8 py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 border border-white/10 min-w-[180px] cursor-pointer">
                            <span className="material-symbols-outlined">edit_square</span>
                            Log a Play
                        </button>
                        {Boolean(game.gameRulesUrl) &&
                            <a
                                href={game.gameRulesUrl} download={true}
                                className="col-span-2 bg-surface-bright/50 backdrop-blur-sm text-on-surface hover:bg-surface-bright/70 transition-all duration-200 px-8 py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 border border-white/10 min-w-[180px]">
                                <span className="material-symbols-outlined">description</span>
                                Rules / How to Play
                            </a>
                        }
                    </div>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin-desktop py-lg">
                <div className="border-b border-outline-variant/20 mb-lg">
                    <nav className="-mb-px flex gap-8 overflow-x-auto">
                        <button onClick={() => setIsCommunityVisible(false)}
                                className={clsx("cursor-pointer border-b-2 whitespace-nowrap py-4 px-1 text-label-md font-label-md font-medium", {
                                    "border-primary text-primary": !isCommunityVisible,
                                    "border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline-variant transition-colors": isCommunityVisible
                                })}>Overview
                        </button>
                        <button onClick={() => setIsCommunityVisible(true)}
                                className={clsx("cursor-pointer border-b-2 whitespace-nowrap py-4 px-1 text-label-md font-label-md font-medium", {
                                    "border-primary text-primary": isCommunityVisible,
                                    "border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline-variant transition-colors": !isCommunityVisible
                                })}>Community
                        </button>
                    </nav>
                </div>
                <div className="flex flex-col gap-xl max-w-4xl">
                    {!isCommunityVisible && (
                        <>
                            <section>
                                <h2 className="text-headline-md font-headline-md text-primary mb-md flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary">menu_book</span>
                                    Overview
                                </h2>
                                <div
                                    className="prose prose-invert prose-p:text-body-lg prose-p:font-body-lg prose-p:text-on-surface-variant prose-p:leading-relaxed max-w-none">
                                    <Markdown>
                                        {game.description}
                                    </Markdown>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-headline-sm font-headline-sm text-primary mb-md">Mechanics &amp; Theme</h2>
                                <div className="flex flex-wrap gap-3">
                                    {
                                        game.categories.map(category => (
                                            <Link
                                                to={gameListRoute.fullPath}
                                                search={{categories: [category.id]}}
                                                key={category.id}
                                                className="bg-surface-container text-on-surface px-4 py-2 rounded-lg font-label-md text-label-md border border-outline-variant/20 hover:border-secondary/50 transition-colors cursor-pointer">
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </section>
                        </>
                    )}
                    {isCommunityVisible && (
                        <section>
                            <h2 className="text-headline-md font-headline-md text-primary mb-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">group</span>
                                Community
                            </h2>
                            <div
                                className="prose prose-invert prose-p:text-body-lg prose-p:font-body-lg prose-p:text-on-surface-variant prose-p:leading-relaxed max-w-none">
                                <FilteredPosts filter={{gameId: game.id.toString()}}>
                                    There is no community post for this game.
                                </FilteredPosts>
                            </div>
                        </section>
                    )}
                </div>
            </div>
            {isAuthenticated &&
                <Modal isOpen={isLogModalOpen} onClose={() => setIsLogModalOpen(false)} title="Log a Play">
                    <CreateGameLog gameId={game.id} onClose={() => setIsLogModalOpen(false)}/>
                </Modal>
            }
        </main>
    );
}