import type {Post} from "../../types/Post.ts";
import {useComments} from "../../hooks/usePosts.ts";
import ReactTimeAgo from "react-time-ago";

type CommentsProps = {
    post: Post;
}

export default function Comments({post}: CommentsProps) {
    const {data: comments, isLoading, isError, error} = useComments(post.id.toString());
    return (
        <div className="relative z-10 border-t border-surface-variant">
            <div className="px-md py-3 flex gap-3 items-start border-b border-surface-variant/50">
                <img alt="Your avatar"
                     className="w-8 h-8 rounded-full object-cover shrink-0 border border-surface-variant mt-0.5"
                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9m95bEOlG85BWnX6KCh1L0knUp9s5D6WVT3NdMnjt3Pqs-sveBHtskxvdcFshmz25z4DV76vQ5SpmPDrczz2uSOjUa-OZk-AP08HoG7qUsVep-uRewYF8Umk55SMxMQNfTQERPFjd_eZqij-rogXnRY0KN4usDBmEOl-AYW5QhzVE0xWo2Pyj--OTTQaC0AZsLfiNs2V4N2MNEQlx8Fnp1INLivV5c3lPYdcu6jUjwCsjerjVLAf0a1NIoOjv8SjKNALBNgd5aYY"/>
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
                            <img
                                className="w-8 h-8 rounded-full object-cover shrink-0 border border-outline-variant/30 mt-0.5"
                                src={comment.user.avatarUrl}/>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 mb-0.5">
                                    <span className="font-label-md text-label-md text-on-surface">
                                        {comment.user.username}
                                    </span>
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