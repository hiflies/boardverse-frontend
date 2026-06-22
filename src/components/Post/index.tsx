import type {Post} from "../../types/Post.ts";
import GameLog from "../GameLog";
import ReactTimeAgo from "react-time-ago";
import {forwardRef, type Ref, useState} from "react";
import Comments from "./Comments.tsx";
import ProfilePhoto from "../ProfilePhoto";
import {Link} from "@tanstack/react-router";
import {loginRoute, profileRoute} from "../../router.tsx";
import clsx from "clsx";
import {useMutation} from "@tanstack/react-query";
import {deletePost, likePost} from "../../api/posts.ts";
import {useIsAuthenticated} from "../../store/auth.ts";
import {useProfile} from "../../hooks/useProfile.ts";
import Markdown from "../Markdown";

type PostProps = {
    post: Post
    refetch: () => void;
}

function Post({post, refetch}: PostProps, ref: Ref<HTMLDivElement>) {
    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    const isAuthenticated = useIsAuthenticated();
    const {data: user} = useProfile(undefined, isAuthenticated);
    const navigate = loginRoute.useNavigate();

    const mutation = useMutation({
        mutationFn: () => {
            return deletePost(post.id.toString());
        },
        onSuccess: async () => {
            refetch();
        },
    });

    const likeMutation = useMutation({
        mutationFn: () => {
            return likePost(post.id.toString());
        },
        onSuccess: async () => {
            refetch();
        },
    });

    return (
        <article
            ref={ref}
            className="bg-surface rounded-xl border border-primary/5 shadow-[0_4px_24px_rgba(18,5,28,0.3)] relative group transition-all duration-300 mb-lg">
            <div className="absolute inset-0 texture-overlay pointer-events-none rounded-xl"></div>
            {
                Boolean(post.gameLog) &&
                <div className="absolute z-50 top-0 left-0 w-1 h-full bg-secondary rounded-l-xl"></div>
            }
            <div className="p-md pb-2 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                    <Link
                        to={profileRoute.fullPath}
                        params={{username: post.user.username}}
                        className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
                        <ProfilePhoto
                            className="w-full h-full object-cover"
                            src={post.user.avatarUrl}
                        />
                    </Link>
                    <div>
                        <Link
                            to={profileRoute.fullPath}
                            params={{username: post.user.username}}
                            className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
                            {post.user.username}
                        </Link>
                        <div className="font-body-md text-[13px] text-on-surface-variant">
                            <ReactTimeAgo date={new Date(post.createdAt)} locale="en"/>
                        </div>
                    </div>
                </div>
                {
                    isAuthenticated && post.user.id === user?.id && (
                        <button
                            onClick={() => confirm('Are you sure you want to delete this post?') && mutation.mutate()}
                            className="text-on-surface-variant hover:text-secondary transition-colors p-1 cursor-pointer">
                            <span className="material-symbols-outlined" data-icon="delete">delete</span>
                        </button>
                    )
                }
            </div>
            <div className="px-md py-sm relative z-10">
                <div className="font-body-md text-body-md text-on-surface/90 leading-relaxed mb-4">
                    <Markdown>{post.content}</Markdown>
                </div>
                {Boolean(post.gameLog) && <GameLog gameLog={post.gameLog!}/>}
                {Boolean(post.imageUrl) &&
                    <div
                        className="rounded-lg overflow-hidden border border-surface-variant mb-4 relative aspect-[16/9]">
                        <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            src={post.imageUrl}
                        />
                    </div>
                }
            </div>
            <div
                className="px-md py-3 border-t border-surface-variant flex items-center gap-6 relative z-10 bg-surface-container-lowest/50 rounded-b-xl">
                <button
                    onClick={() => isAuthenticated ? likeMutation.mutate() : navigate({})}
                    className={clsx("flex items-center gap-2 group transition-colors cursor-pointer", {
                        "text-on-surface-variant hover:text-secondary": !post.isLikedByCurrentUser,
                        "text-secondary hover:text-secondary-container": post.isLikedByCurrentUser,
                    })}>
                      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                          {post.isLikedByCurrentUser ? 'heart_smile' : 'favorite'}
                      </span>
                    <span className="font-label-md text-label-md">{post.likeCount}</span>
                </button>
                <button
                    onClick={() => setIsCommentsVisible(!isCommentsVisible)}
                    className={clsx("flex items-center gap-2 transition-colors group cursor-pointer", {
                        "text-on-surface-variant hover:text-secondary": !isCommentsVisible,
                        "text-secondary hover:text-secondary-container": isCommentsVisible,
                    })}>
                      <span className="material-symbols-outlined group-hover:scale-110 transition-transform"
                            data-icon="chat_bubble">chat_bubble</span>
                    <span className="font-label-md text-label-md">
                        {post.commentCount > 0 ? `${post.commentCount} Comments` : 'Write a comment'}
                    </span>
                </button>
            </div>
            {
                isCommentsVisible && (
                    <Comments post={post} refetch={refetch}/>
                )
            }
        </article>
    )
}

export default forwardRef(Post);