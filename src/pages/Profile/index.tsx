import {useProfile} from "../../hooks/useProfile.ts";
import {gameDetailRoute, gameListRoute, loginRoute, profileRoute} from "../../router.tsx";
import {useAuthStore, useIsAuthenticated} from "../../store/auth.ts";
import {type ChangeEvent, useEffect, useRef, useState} from "react";
import ProfilePhoto from "../../components/ProfilePhoto";
import FilteredPosts from "../../components/FilteredPosts";
import FilteredGameLogs from "../../components/FilteredGameLogs";
import clsx from "clsx";
import {Link} from "@tanstack/react-router";
import type {GameLog} from "../../types/GameLog.ts";
import {deleteGameLog} from "../../api/gamelogs.ts";
import {useGames} from "../../hooks/useGames.ts";
import {useMutation} from "@tanstack/react-query";
import {updateProfile} from "../../api/profile.ts";

export default function Profile() {
    const username = profileRoute.useParams({select: params => params.username});
    const isAuthenticated = useIsAuthenticated();
    const authenticatedUsername = useAuthStore(a => a.username);
    const isEnabled = Boolean(username) || isAuthenticated;
    const {data: user, isLoading, isError, refetch} = useProfile(username, isEnabled, true);
    const {data: games, isLoading: isGamesLoading, isError: isGamesError} = useGames({
        username: user?.username,
        pageSize: 3,
        sortBy: 'rating',
    }, Boolean(user));
    const [textInput, setTextInput] = useState(user?.profileText ?? '');
    const [editTextVisible, setEditTextVisible] = useState(false);
    const navigate = loginRoute.useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const updateProfileTextMutation = useMutation({
        mutationFn: () => updateProfile({text: textInput}),
        onSuccess: () => {
            setEditTextVisible(false);
            refetch();
        }
    });

    const updateProfileImageMutation = useMutation({
        mutationFn: () => updateProfile({image: fileInputRef.current!.files![0] ?? undefined}),
        onSuccess: () => {
            refetch();
        }
    });

    useEffect(() => {
        if (!isEnabled) {
            navigate({});
        }
    }, [isEnabled, navigate]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTextInput(user?.profileText ?? '');
    }, [user]);

    function handleDelete(refetch: () => void, gameLog: GameLog) {
        if (!confirm("Related comments and posts will be deleted. Are you sure you want to delete this game log?")) {
            return;
        }
        deleteGameLog(gameLog.id.toString())
            .then(() => refetch());
    }

    function handleImageSelect(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            updateProfileImageMutation.mutate();
        }
    }

    if (isLoading || isError || !user || isGamesLoading || isGamesError || !games) {
        return null;
    }

    const allGames = games?.pages.flatMap(p => p.items) ?? []
    const isMyProfile = !username || username === authenticatedUsername;

    return (
        <main
            className="flex-1 w-full px-margin-mobile md:px-margin-desktop py-md md:py-lg flex justify-center">
            <div className="p-margin-mobile md:p-margin-desktop space-y-xl max-w-6xl mx-auto pb-32 md:pb-xl pt-lg">
                <section className="flex items-center gap-md">
                    <div className="relative">
                        <ProfilePhoto
                            src={user.avatarUrl}
                            alt={user.username}
                            className="w-16 h-16 rounded-full border-2 border-primary/30 object-cover"
                        />
                        {isMyProfile && (
                            <>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="absolute left-0 top-0 w-full h-full flex justify-center items-center cursor-pointer hover:bg-black/50 rounded-full group">
                                <span
                                    className="material-symbols-outlined text-secondary invisible group-hover:visible">
                                    upload
                                </span>
                                </button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageSelect}
                                />
                            </>
                        )}
                    </div>
                    <div>
                        <p className="font-headline-md text-headline-md text-on-surface">{user.username}</p>
                        {!editTextVisible && (
                            <p className="font-label-md text-label-md text-on-surface-variant">
                                {user.profileText}
                                {isMyProfile && (
                                    <button
                                        onClick={() => setEditTextVisible(true)}
                                        className="material-symbols-outlined text-primary hover:text-secondary cursor-pointer ml-1 text-label-md!">edit
                                    </button>
                                )}
                            </p>
                        )}
                        {editTextVisible && (
                            <p className="font-label-md text-label-md text-on-surface-variant">
                                <input
                                    type="text"
                                    className="bg-surface-container-lowest border-0 border-b border-outline-variant/50 text-on-background placeholder:text-outline/50 focus:ring-0 focus:border-secondary-container transition-colors input-well"
                                    onChange={(e) => setTextInput(e.target.value)}
                                    value={textInput}/>
                                <button onClick={() => updateProfileTextMutation.mutate()}
                                        className="material-symbols-outlined text-primary hover:text-secondary cursor-pointer ml-1 text-label-md!">
                                    check
                                </button>
                            </p>
                        )}
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                    <div className="lg:col-span-8 space-y-xl">
                        <section>
                            <div className="flex items-center justify-between mb-md">
                                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">diamond</span>
                                    Featured Collection
                                </h2>
                                <Link to={gameListRoute.fullPath}
                                      search={{username: user.username, sortBy: 'rating'}}
                                      className="font-label-md text-label-md text-primary hover:text-surface-tint transition-colors">
                                    View All
                                </Link>
                            </div>
                            {allGames.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                                    {allGames.map(game => (
                                        <Link
                                            to={gameDetailRoute.fullPath}
                                            params={{gameId: game.id.toString()}}
                                            key={game.id}
                                            className="glass-card texture-overlay rounded-lg overflow-hidden group cursor-pointer relative pb-4 transition-transform hover:-translate-y-1 duration-300">
                                            <div
                                                className="aspect-3/4 overflow-hidden bg-surface-container-lowest relative">
                                                <div
                                                    className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 opacity-80"></div>
                                                <img alt={game.name}
                                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                     src={game.imageUrl}/>
                                            </div>
                                            <div className="relative z-20 px-4 -mt-6">
                                                <h3 className="font-title-lg text-title-lg text-on-surface mb-1 truncate">{game.name}</h3>
                                                <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px]">star</span>
                                                    {game.averageRating.toFixed(1)} Rating
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>)}

                            {allGames.length == 0 && (
                                <p className="text-secondary font-body-md text-body-md">No games collected</p>
                            )}
                        </section>
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">history</span>
                                Recent Plays
                            </h2>
                            <div
                                className="glass-card texture-overlay rounded-xl p-md md:p-lg relative max-h-150 overflow-y-auto">
                                <FilteredGameLogs filter={{userId: user.id.toString()}}
                                                  buttonIcon={isMyProfile ? 'delete' : undefined}
                                                  onButtonClick={handleDelete}
                                >
                                    No game logged
                                </FilteredGameLogs>
                            </div>
                        </section>
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">history</span>
                                Posts
                            </h2>
                            <FilteredPosts filter={{userId: user.id.toString()}}>
                                No post shared
                            </FilteredPosts>
                        </section>
                    </div>
                    <div className="lg:col-span-4 space-y-xl">
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">format_list_numbered</span>
                                Top 5 Games
                            </h2>
                            <div className="glass-card texture-overlay rounded-xl p-md">
                                <div className="space-y-3">
                                    {user.topGames!.length > 0 && user.topGames!.map((game, index) => (
                                        <Link
                                            to={gameDetailRoute.fullPath}
                                            params={{gameId: game.id.toString()}}
                                            key={game.id}
                                            className="flex items-center gap-3 p-2 hover:bg-surface-container rounded transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/20">
                                        <span
                                            className={clsx("w-6 text-center", {
                                                "text-secondary": index === 0,
                                                "text-outline": index === 1,
                                                "text-outline-variant": index > 1,
                                                "font-display-lg text-headline-sm": index < 3,
                                                "font-label-md text-label-md": index >= 3,
                                            })}>{index + 1}</span>
                                            <div className="flex-1">
                                                <p className={clsx("text-on-surface group-hover:text-primary transition-colors", {
                                                    "font-title-lg text-title-lg": index < 3,
                                                    "font-body-md text-body-md": index >= 3,
                                                })}>
                                                    {game.name}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}

                                    {user.topGames!.length === 0 && (
                                        <p className="text-secondary font-body-md text-body-md">No game played</p>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}