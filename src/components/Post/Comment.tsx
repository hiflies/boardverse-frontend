import ProfilePhoto from "../ProfilePhoto";
import {Link} from "@tanstack/react-router";
import ReactTimeAgo from "react-time-ago";
import {profileRoute} from "../../router";
import type {Post} from "../../types/Post.ts";
import type {Comment} from "../../types/Comment.ts";
import {useIsAuthenticated} from "../../store/auth.ts";
import {useProfile} from "../../hooks/useProfile.ts";
import {useMutation} from "@tanstack/react-query";
import {deleteComment} from "../../api/posts.ts";
import useUpdateCommentCount from "../../hooks/useUpdateCommentCount.ts";
import Markdown from "../Markdown";

type CommentProps = {
    post: Post;
    comment: Comment;
    refetch: () => void;
}

export default function Comment({post, comment, refetch}: CommentProps) {
    const isAuthenticated = useIsAuthenticated();
    const {data: user} = useProfile(undefined, isAuthenticated);
    const updateCommentCount = useUpdateCommentCount(post.id);

    const mutation = useMutation({
        mutationFn: () => {
            return deleteComment(post.id.toString(), comment.id.toString());
        },
        onSuccess: () => {
            refetch();
            updateCommentCount(-1);
        },
    });

    return (
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
                    <Markdown>{comment.content}</Markdown>
                </div>
            </div>
            {
                isAuthenticated && comment.user.id === user?.id && (
                    <button
                        onClick={() => confirm('Are you sure you want to delete this comment?') && mutation.mutate()}
                        className="text-on-surface-variant hover:text-secondary cursor-pointer transition-colors ">
                                        <span className="material-symbols-outlined text-[18px]!"
                                              data-icon="delete">delete</span>
                    </button>
                )
            }
        </div>
    )
}