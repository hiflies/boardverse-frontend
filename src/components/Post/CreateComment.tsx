import ProfilePhoto from "../ProfilePhoto";
import {useProfile} from "../../hooks/useProfile.ts";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import type {Post} from "../../types/Post.ts";
import {createComment} from "../../api/posts.ts";
import clsx from "clsx";
import useUpdateCommentCount from "../../hooks/useUpdateCommentCount.ts";

type CreateCommentProps = {
    post: Post;
    refetch: () => void;
}

export default function CreateComment({post, refetch}: CreateCommentProps) {
    const {data: user} = useProfile();
    const [content, setContent] = useState('');
    const updateCommentCount = useUpdateCommentCount(post.id);

    const mutation = useMutation({
        mutationFn: () => {
            return createComment(post.id.toString(), content);
        },
        onSuccess: () => {
            refetch();
            setContent('');
            updateCommentCount(1);
        },
    });

    return (
        <div className="px-md py-3 flex gap-3 items-start border-b border-surface-variant/50">
            <ProfilePhoto
                className="w-8 h-8 rounded-full object-cover shrink-0 border border-surface-variant mt-0.5"
                src={user!.avatarUrl}/>
            <div className="flex-1 flex gap-2 items-center">
                <input
                    className="flex-1 bg-surface-container-low text-on-surface font-body-md text-[14px] border-b border-surface-variant focus:border-secondary focus:outline-none px-3 py-2 rounded-t-DEFAULT placeholder:text-on-surface-variant/40 transition-colors"
                    placeholder="Write a comment..."
                    type="text"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button
                    onClick={() => mutation.mutate()}
                    disabled={mutation.isPending || !content.trim()}
                    className="p-2 text-on-surface-variant hover:text-secondary transition-colors shrink-0">
                    <span className={clsx(`material-symbols-outlined text-[20px]`, {
                        'animate-spin': mutation.isPending,
                    })}
                          data-icon={mutation.isPending ? 'progress_activity' : 'send'}>{mutation.isPending ? 'progress_activity' : 'send'}</span>
                </button>
            </div>
        </div>
    );
}