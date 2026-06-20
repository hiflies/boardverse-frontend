import type {Post} from "../../types/Post.ts";
import {useComments} from "../../hooks/usePosts.ts";
import ReactTimeAgo from "react-time-ago";
import ProfilePhoto from "../ProfilePhoto";
import {Link} from "@tanstack/react-router";
import {loginRoute, profileRoute} from "../../router.tsx";
import {useProfile} from "../../hooks/useProfile.ts";
import {useIsAuthenticated} from "../../store/auth.ts";
import {useEffect} from "react";

type CommentsProps = {
    post: Post;
}

export default function Comments({post}: CommentsProps) {
    const isAuthenticated = useIsAuthenticated();
    const {data: user} = useProfile(undefined, isAuthenticated);
    const {data: comments, isLoading, isError, error} = useComments(post.id.toString());
    const navigate = loginRoute.useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated && comments!.length === 0) {
            navigate({});
        }
    }, [comments, isAuthenticated, isLoading, navigate]);

    return (
        <div className="relative z-10 border-t border-surface-variant">
            {isAuthenticated && (
                <div className="px-md py-3 flex gap-3 items-start border-b border-surface-variant/50">
                    <ProfilePhoto
                        className="w-8 h-8 rounded-full object-cover shrink-0 border border-surface-variant mt-0.5"
                        src={user!.avatarUrl}/>
                    <div className="flex-1 flex gap-2 items-center">
                        <input
                            className="flex-1 bg-surface-container-low text-on-surface font-body-md text-[14px] border-b border-surface-variant focus:border-secondary focus:outline-none px-3 py-2 rounded-t-DEFAULT placeholder:text-on-surface-variant/40 transition-colors"
                            placeholder="Write a comment..." type="text"/>
                        <button
                            className="p-2 text-on-surface-variant hover:text-secondary transition-colors shrink-0">
                            <span className="material-symbols-outlined text-[20px]" data-icon="send">send</span>
                        </button>
                    </div>
                </div>
            )}
            <div className="divide-y divide-surface-variant/40">
                {isLoading && (
                    <p className="text-on-surface-variant font-body-md text-body-md">Loading comments...</p>
                )}
                {isError && (
                    <p className="text-error font-body-md text-body-md">Failed to load comments: {error.message}</p>
                )}
                {comments && comments.length > 0 && (
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="px-md py-3 flex gap-3 group/comment hover:bg-surface-container-lowest/30 transition-colors">
                            <Link
                                to={profileRoute.fullPath}
                                params={{username: comment.user.username}}
                            >
                                <ProfilePhoto
                                    className="w-8 h-8 rounded-full object-cover shrink-0 border border-outline-variant/30 mt-0.5"
                                    src={comment.user.avatarUrl}/>
                            </Link>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 mb-0.5">
                                    <Link
                                        to={profileRoute.fullPath}
                                        params={{username: comment.user.username}}
                                        className="font-label-md text-label-md text-on-surface">
                                        {comment.user.username}
                                    </Link>
                                    <span className="font-label-sm text-[11px] text-on-surface-variant">
                                        <ReactTimeAgo date={new Date(comment.createdAt)} locale="en"/>
                                    </span>
                                </div>
                                <div className="font-body-md text-[14px] text-on-surface/80 leading-snug">
                                    {comment.content}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}