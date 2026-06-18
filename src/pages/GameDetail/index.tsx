import {useGame} from "../../hooks/useGames.ts";
import Markdown from "react-markdown";
import {gameDetailRoute} from "../../router.tsx";

export default function GameDetail() {
    const gameId = gameDetailRoute.useParams({select: params => params.gameId});
    const {data: game, isLoading, isError, error} = useGame(gameId);

    if (isLoading || isError || !game || error) {
        return (
            <div>Loading...</div>
        );
    }

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
                            {game.categories.map((category) => (
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
                    <div className="flex flex-wrap gap-4">
                        <button
                            className="bg-primary-container text-on-primary-container hover:brightness-110 transition-all duration-200 px-8 py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 shadow-lg flex-1 min-w-[180px]">
                            <span className="material-symbols-outlined">add</span>
                            Add to Collection
                        </button>
                        <button
                            className="bg-surface-bright/50 backdrop-blur-sm text-on-surface hover:bg-surface-bright/70 transition-all duration-200 px-8 py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 border border-white/10 flex-1 min-w-[180px]">
                            <span className="material-symbols-outlined">edit_square</span>
                            Log a Play
                        </button>
                        {Boolean(game.gameRulesUrl) &&
                            <a
                                href={game.gameRulesUrl} download={true}
                                className="bg-surface-bright/50 backdrop-blur-sm text-on-surface hover:bg-surface-bright/70 transition-all duration-200 px-8 py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 border border-white/10 flex-1 min-w-[180px]">
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
                        <a className="border-b-2 border-primary text-primary whitespace-nowrap py-4 px-1 text-label-md font-label-md font-medium"
                           href="#">Overview</a>
                        <a className="border-b-2 border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline-variant whitespace-nowrap py-4 px-1 text-label-md font-label-md font-medium transition-colors"
                           href="#">Community</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-xl max-w-4xl">
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
                                    <span
                                        key={category.id}
                                        className="bg-surface-container text-on-surface px-4 py-2 rounded-lg font-label-md text-label-md border border-outline-variant/20 hover:border-secondary/50 transition-colors cursor-default">
                                        {category.name}
                                    </span>

                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}