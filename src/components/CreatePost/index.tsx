import {type ChangeEvent, useRef, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {useProfile} from "../../hooks/useProfile.ts";
import ProfilePhoto from "../ProfilePhoto";
import clsx from "clsx";
import {createPost} from "../../api/posts.ts";
import FilteredGameLogs from "../FilteredGameLogs";
import type {GameLog as GameLogType} from "../../types/GameLog.ts";
import GameLog from "../GameLog";

type CreatePostProps = {
    refetch: () => void;
}

export default function CreatePost({refetch}: CreatePostProps) {
    const {data: user} = useProfile();
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [gameLog, setGameLog] = useState<GameLogType | null>(null);
    const [showGameLogSelection, setShowGameLogSelection] = useState(false);

    const mutation = useMutation({
        mutationFn: () => {
            return createPost(content, image, gameLog?.id.toString());
        },
        onSuccess: () => {
            refetch();
            setContent('');
            setImage(null);
            setPreviewUrl(null);
            setShowGameLogSelection(false);
            setGameLog(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
        },
    });

    function handleImageSelect(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        setImage(file);
        setPreviewUrl(file ? URL.createObjectURL(file) : null);
    }

    function handleRemoveImage() {
        setImage(null);
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    }

    return (
        <section
            className="bg-surface rounded-xl border border-primary/10 shadow-[0_8px_32px_rgba(18,5,28,0.4)] relative group">
            <div className="absolute inset-0 texture-overlay pointer-events-none"></div>
            <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div
                className="flex border-b border-surface-variant relative z-10 bg-surface-container-low">
                <button
                    className="flex-1 py-3 px-4 font-label-md text-label-md text-secondary border-b-2 border-secondary bg-surface-variant/30 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                    Discuss
                </button>
                <button
                    className="flex-1 py-3 px-4 font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant/20 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]"
                          data-icon="sports_esports">sports_esports</span>
                    Play
                </button>
                <button
                    className="flex-1 py-3 px-4 font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant/20 transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]"
                                          data-icon="sync_alt">sync_alt</span>
                    Trade
                </button>
            </div>
            <div className="p-md relative z-10 flex flex-col gap-md">
                <div className="flex gap-sm items-start">
                    <ProfilePhoto
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-surface-variant"
                        src={user?.avatarUrl}/>
                    <div className="flex-1">
                      <textarea
                          className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md border-0 border-b border-surface-variant focus:border-secondary focus:ring-0 resize-none p-3 rounded-t-DEFAULT placeholder:text-on-surface-variant/40 transition-colors"
                          placeholder="Share your latest tabletop thoughts, strategies, or questions..."
                          rows={3}
                          value={content}
                          onChange={e => setContent(e.target.value)}></textarea>

                        {Boolean(gameLog) && !showGameLogSelection && (
                            <GameLog gameLog={gameLog!} buttonIcon="close" onButtonClick={() => setGameLog(null)}/>
                        )}

                        {showGameLogSelection && (
                            <div className="max-h-100 overflow-y-auto">
                                {Boolean(user) && (
                                    <FilteredGameLogs
                                        filter={{userId: user!.id.toString(), hasPosts: 'false'}}
                                        buttonIcon="add"
                                        onButtonClick={log => {
                                            setGameLog(log);
                                            setShowGameLogSelection(false);
                                        }}>
                                        There is no game log from this user.
                                    </FilteredGameLogs>
                                )}
                            </div>
                        )}

                        {previewUrl && (
                            <div className="relative mt-2 rounded-lg overflow-hidden border border-surface-variant">
                                <img src={previewUrl} alt="Preview" className="w-full max-h-60 object-cover"/>
                                <button
                                    onClick={handleRemoveImage}
                                    className="absolute top-2 right-2 bg-surface text-on-surface rounded-full p-1 hover:text-secondary-container transition-colors flex items-center justify-center cursor-pointer"
                                    title="Remove image">
                                    <span className="material-symbols-outlined text-[18px]"
                                          data-icon="close">close</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between items-center pl-14">
                    <div className="flex gap-2">
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageSelect}
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className={clsx("p-2 rounded-full hover:bg-surface-variant transition-colors", {
                                'text-secondary': image,
                                'text-on-surface-variant hover:text-secondary': !image,
                            })}
                            title="Add Image">
                            <span className="material-symbols-outlined" data-icon="image">image</span>
                        </button>
                        <button
                            onClick={() => setShowGameLogSelection(!showGameLogSelection)}
                            className="p-2 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-variant transition-colors"
                            title="Tag Game">
                                            <span className="material-symbols-outlined"
                                                  data-icon="extension">extension</span>
                        </button>
                    </div>
                    <button
                        onClick={() => mutation.mutate()}
                        disabled={mutation.isPending || !content.trim()}
                        className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:bg-on-primary-fixed hover:text-primary-fixed transition-all border border-transparent hover:border-primary-fixed/20 shadow-sm active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        {mutation.isPending ? 'Posting...' : 'Post'}
                        <span className="material-symbols-outlined text-[16px]"
                              data-icon="send">send</span>
                    </button>
                </div>
            </div>
        </section>
    );
}