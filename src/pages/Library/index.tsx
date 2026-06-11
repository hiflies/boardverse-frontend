import GameCard from "../../components/GameCard";
import { useGames } from "../../hooks/useGames";

export default function Library() {
    const { data: games, isLoading, isError, error } = useGames();

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
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-on-surface-variant text-sm font-label-md mr-2">Active Filters:</span>
                        <div
                            className="flex items-center gap-1 bg-surface-container border border-secondary/30 text-secondary px-3 py-1.5 rounded-full font-label-sm text-label-sm">
                            Worker Placement
                            <button className="hover:text-white transition-colors ml-1 focus:outline-none"><span
                                className="material-symbols-outlined text-[14px]">close</span></button>
                        </div>
                        <div
                            className="flex items-center gap-1 bg-surface-container border border-secondary/30 text-secondary px-3 py-1.5 rounded-full font-label-sm text-label-sm">
                            Area Control
                            <button className="hover:text-white transition-colors ml-1 focus:outline-none"><span
                                className="material-symbols-outlined text-[14px]">close</span></button>
                        </div>
                        <div
                            className="flex items-center gap-1 bg-surface-container border border-primary/30 text-primary px-3 py-1.5 rounded-full font-label-sm text-label-sm">
                            Weight: 3-4
                            <button className="hover:text-white transition-colors ml-1 focus:outline-none"><span
                                className="material-symbols-outlined text-[14px]">close</span></button>
                        </div>
                        <div
                            className="flex items-center gap-1 bg-surface-container border border-primary/30 text-primary px-3 py-1.5 rounded-full font-label-sm text-label-sm">
                            Players: 3-4
                            <button className="hover:text-white transition-colors ml-1 focus:outline-none"><span
                                className="material-symbols-outlined text-[14px]">close</span></button>
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
                                name={game.name}
                                description={game.description}
                                peopleCount={{min : game.minPlayers, max : game.maxPlayers}}
                                duration={game.duration || 50}
                                complexity={game.complexity || 5}
                            />
                        ))}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                   <GameCard
                       name="Brass: Birmingham"
                       description="Build networks, develop industries, and navigate the industrial revolution in this economic masterpiece."
                       peopleCount={{min:2, max:4}}
                       duration={120}
                       complexity={3.90}
                   />
                    <div
                        className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20 relative group card-hover transition-all duration-300 flex flex-col">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
                        <div className="linen-texture absolute inset-0 pointer-events-none rounded-xl"></div>
                        <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
                            <img
                                alt="A detailed overhead shot of a massive fantasy board game campaign spread across a large table. Miniature figures are placed on hex-based dungeon tiles alongside scattered cards and tokens. The lighting is warm and tavern-like, casting soft shadows that highlight the intricate textures of the game pieces. The overall aesthetic is epic, dark, and highly tactical."
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="A detailed overhead shot of a massive fantasy board game campaign spread across a large table. Miniature figures are placed on hex-based dungeon tiles alongside scattered cards and tokens. The lighting is warm and tavern-like, casting soft shadows that highlight the intricate textures of the game pieces. The overall aesthetic is epic, dark, and highly tactical."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC91JNaIrh0sqbXAw3Y27BjrFhNJ-p-t35Yrs4hpencdewsU7GTaWaG23rLtkEFXfHD9q7-DOKtzt1UkL83R25qxepiKCIUY2LEepah5N71EY0ZBFqnYmfmLjKRcfUB0sLZ9iiF9TZYvoSbaC7ZKEB6_UrEQcrtyMfZYkt0pllsYC8jEl0eAtYDUZa_feCYIQFUYIrOVHZ6t2FRQJtoyugshgiS-MfZKwax62DrHG2QoEUJ8ktdfDylzzYsQOwLvZKalmd9k9gLYpg"/>
                            <div
                                className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm border border-secondary/30 text-secondary font-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">weight</span> 3.89
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1 z-10">
                            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Gloomhaven</h3>
                            <p className="text-on-surface-variant font-body-sm text-sm mb-4 line-clamp-2">Vanquish
                                monsters with strategic cardplay and fulfill your quest to clear the dungeons.</p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Cooperative</span>
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Campaign</span>
                                <span
                                    className="bg-secondary/10 px-2 py-1 rounded text-secondary font-label-sm text-[11px] uppercase tracking-wider border border-secondary/20">Grid Move</span>
                            </div>
                            <div
                                className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">group</span> 1-4</span>
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">schedule</span> 120m</span>
                                </div>
                                <button className="text-primary hover:text-secondary transition-colors">
                                    <span className="material-symbols-outlined">bookmark_add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20 relative group card-hover transition-all duration-300 flex flex-col">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
                        <div className="linen-texture absolute inset-0 pointer-events-none rounded-xl"></div>
                        <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
                            <img
                                alt="A sleek, sci-fi themed board game setup featuring hexagonal tiles depicting Martian landscapes, oceans, and greenery. The components include metallic cubes and resource trackers. The lighting is cool and slightly futuristic, using a palette of deep reds, vibrant greens, and metallic silvers against a dark background, evoking a premium space-exploration vibe."
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="A sleek, sci-fi themed board game setup featuring hexagonal tiles depicting Martian landscapes, oceans, and greenery. The components include metallic cubes and resource trackers. The lighting is cool and slightly futuristic, using a palette of deep reds, vibrant greens, and metallic silvers against a dark background, evoking a premium space-exploration vibe."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Ye2DlCj78tNme8w3C23GIG7RfXQ1ZTOwO35TAja-nQaU1JzNIcKXDUowlJ4eiKB-gjs0yVF6KG7i6Re9F0EfDUBQaJZnEEYquTy9KmDOJXbqvkL55PknpMAk5BLIPM7iEXad-gEzUtcNKeVNOKxZ_pBLlI0Si1ulK3Im2qgKNe33DSeyUp0huGE71-D8dVzqJSaMgOz_qKl7IvKJy_UxtAzW-UcU8WRFst_oCDMFIt5a4gr6_PF2xctUciVicRGO1QXflfseQ74"/>
                            <div
                                className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm border border-secondary/30 text-secondary font-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">weight</span> 3.25
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1 z-10">
                            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Terraforming
                                Mars</h3>
                            <p className="text-on-surface-variant font-body-sm text-sm mb-4 line-clamp-2">Compete with
                                rival CEOs to make Mars habitable and build your corporate empire.</p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Engine Building</span>
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Card Drafting</span>
                            </div>
                            <div
                                className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">group</span> 1-5</span>
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">schedule</span> 120m</span>
                                </div>
                                <button className="text-primary hover:text-secondary transition-colors">
                                    <span className="material-symbols-outlined">bookmark_add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20 relative group card-hover transition-all duration-300 flex flex-col">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
                        <div className="linen-texture absolute inset-0 pointer-events-none rounded-xl"></div>
                        <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
                            <img
                                alt="An imposing tabletop game layout featuring dieselpunk mech miniatures traversing a beautifully illustrated map of 1920s Eastern Europe. Resource tokens shaped like oil, wood, and metal are clustered around player mats. The visual aesthetic is a mix of pastoral landscapes and heavy industrial machinery, lit with a cool, slightly overcast, high-contrast style."
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="An imposing tabletop game layout featuring dieselpunk mech miniatures traversing a beautifully illustrated map of 1920s Eastern Europe. Resource tokens shaped like oil, wood, and metal are clustered around player mats. The visual aesthetic is a mix of pastoral landscapes and heavy industrial machinery, lit with a cool, slightly overcast, high-contrast style."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwvB3ylb1jBkQ45NevblmCOg0W9BKiEqD_7t4YP0bg-KT8QvYxftY9h7q5kouN_4vnC4IM7ptce92VUi31KHm-PP6hO4xRM_5sncBdj0jFppVEDc95_OWTt4hPKHC50B80pvlWr1uv8jUk1_F5-UQpi8OHgNh-6XabWIHy4JzXudO_gvyi8HVEX9hjYCRmiSNyPA6KICYwu4dsbr5Fi6-38E_6fON4XlhZy9cpMm2If7aOpehPREDxJ1FoOMAj7aI0MMvmbnLPIoI"/>
                            <div
                                className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm border border-secondary/30 text-secondary font-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">weight</span> 3.44
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1 z-10">
                            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Scythe</h3>
                            <p className="text-on-surface-variant font-body-sm text-sm mb-4 line-clamp-2">Five factions
                                vie for dominance in a war-torn, mech-filled, alternate-history 1920s Europa.</p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                <span
                                    className="bg-secondary/10 px-2 py-1 rounded text-secondary font-label-sm text-[11px] uppercase tracking-wider border border-secondary/20">Area Control</span>
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Resource Mgmt</span>
                            </div>
                            <div
                                className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">group</span> 1-5</span>
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">schedule</span> 115m</span>
                                </div>
                                <button className="text-primary hover:text-secondary transition-colors">
                                    <span className="material-symbols-outlined">bookmark_add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20 relative group card-hover transition-all duration-300 flex flex-col">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
                        <div className="linen-texture absolute inset-0 pointer-events-none rounded-xl"></div>
                        <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
                            <img
                                alt="A vibrant, beautifully illustrated board game setup featuring a large 3D cardboard tree structure acting as a centerpiece. The board is covered in cards depicting woodland creatures and resources like twigs, resin, and berries made of custom shaped tokens. The lighting is bright and inviting, emphasizing the rich, colorful, storybook aesthetic of the game components."
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="A vibrant, beautifully illustrated board game setup featuring a large 3D cardboard tree structure acting as a centerpiece. The board is covered in cards depicting woodland creatures and resources like twigs, resin, and berries made of custom shaped tokens. The lighting is bright and inviting, emphasizing the rich, colorful, storybook aesthetic of the game components."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSWP8HJ5m1M1CiQtfs5biEBz7F-bF4vJWsY-afqELFQ18OClq6Fh_wem8BYMdPZQcw_CEdOGAZJ45uzGH9Ti9STx845qGP1QGNgCZgChnVmHoO1bVt5F0lqs7qBUMHrjfWZy77ccaj0UHyCbTks4U7TElIzjDwbrslKr8Yg7pOh2TX1O_Gf7tJDDLjIIGk4tCr9QjWbAXRoWG3FdDiVcoDkCa_Vh3ItmSwsbJzjBLCr1WYhVzqEINF5QacylH61UdpnLNS5PJ8pik"/>
                            <div
                                className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm border border-secondary/30 text-secondary font-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">weight</span> 2.82
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1 z-10">
                            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Everdell</h3>
                            <p className="text-on-surface-variant font-body-sm text-sm mb-4 line-clamp-2">Under the
                                boughs of towering trees, a civilization of forest critters is flourishing.</p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                <span
                                    className="bg-secondary/10 px-2 py-1 rounded text-secondary font-label-sm text-[11px] uppercase tracking-wider border border-secondary/20">Worker Placement</span>
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Tableau Building</span>
                            </div>
                            <div
                                className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">group</span> 1-4</span>
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">schedule</span> 80m</span>
                                </div>
                                <button className="text-primary hover:text-secondary transition-colors">
                                    <span className="material-symbols-outlined">bookmark_add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20 relative group card-hover transition-all duration-300 flex flex-col">
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
                        <div className="linen-texture absolute inset-0 pointer-events-none rounded-xl"></div>
                        <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
                            <img
                                alt="A complex cooperative board game laid out on a dark table, featuring modular island boards with plastic invader miniatures and wooden spirit tokens. Thick stacks of colorful power cards are arranged around the play area. The lighting is focused and slightly mysterious, highlighting the contrast between the natural wooden elements and the stark white invader pieces in a premium hobby setting."
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="A complex cooperative board game laid out on a dark table, featuring modular island boards with plastic invader miniatures and wooden spirit tokens. Thick stacks of colorful power cards are arranged around the play area. The lighting is focused and slightly mysterious, highlighting the contrast between the natural wooden elements and the stark white invader pieces in a premium hobby setting."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu3va2lXSaNO-k5dDp2XP8GjJbPTg4yFzTSF79VgNV52hgm9xDJecbOQbM5i8L61d9_XUT0B3QrZfipDDnUcM4Wyww58TjB_kyDCz75-l_zhlP-gMv9O55EXMYWXghtFmbFLoujrcvHqs4_Oa36iHFcjYWmfffn5vsveUA07JFoY68QyC88diUCbPyz2aMb0C9kPQ_xdYPFc0Rjd9lSEbwBfRsJpe3qIRyU7U1HQxKwYXEbPIuCs0q7WfLroQAY97J44uE7O4iJsQ"/>
                            <div
                                className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm border border-secondary/30 text-secondary font-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">weight</span> 4.06
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1 z-10">
                            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Spirit
                                Island</h3>
                            <p className="text-on-surface-variant font-body-sm text-sm mb-4 line-clamp-2">Complex and
                                thematic cooperative game about defending your island home from colonizing Invaders.</p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Cooperative</span>
                                <span
                                    className="bg-secondary/10 px-2 py-1 rounded text-secondary font-label-sm text-[11px] uppercase tracking-wider border border-secondary/20">Area Majority</span>
                                <span
                                    className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Hand Mgmt</span>
                            </div>
                            <div
                                className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                                <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">group</span> 1-4</span>
                                    <span className="flex items-center gap-1"><span
                                        className="material-symbols-outlined text-[16px]">schedule</span> 120m</span>
                                </div>
                                <button className="text-primary hover:text-secondary transition-colors">
                                    <span className="material-symbols-outlined">bookmark_add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-xl mb-xl">
                    <button
                        className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-label-md text-label-md flex items-center gap-2 group">
                        Load More Titles
                        <span
                            className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
                    </button>
                </div>
            </div>
        </main>
    );
}