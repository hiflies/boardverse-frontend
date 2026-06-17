import type {Post} from "../../types/Post.ts";
import GameLog from "../GameLog";
import Markdown from "react-markdown";
import ReactTimeAgo from "react-time-ago";
import {useState} from "react";
import Comments from "./Comments.tsx";

type PostProps = {
    post: Post
}

export default function Post({post}: PostProps) {
    const[isCommentsVisible, setIsCommentsVisible] = useState(false);
    return (
        <article
            className="bg-surface rounded-xl border border-primary/5 shadow-[0_4px_24px_rgba(18,5,28,0.3)] relative group transition-all duration-300 hover:border-primary/20">
            <div className="absolute inset-0 texture-overlay pointer-events-none rounded-xl"></div>
            {
                Boolean(post.gameLog) &&
                <div className="absolute z-50 top-0 left-0 w-1 h-full bg-secondary rounded-l-xl"></div>
            }
            <div className="p-md pb-2 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
                        <img
                            className="w-full h-full object-cover"
                            src={post.user.avatarUrl}
                        />
                    </div>
                    <div>
                        <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
                            {post.user.username}
                        </h3>
                        <div className="font-body-md text-[13px] text-on-surface-variant">
                            <ReactTimeAgo date={new Date(post.createdAt)} locale="en"/>
                        </div>
                    </div>
                </div>
                <button className="text-on-surface-variant hover:text-primary-fixed transition-colors p-1">
                    <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                </button>
            </div>
            <div className="px-md py-sm relative z-10">
                <div className="font-body-md text-body-md text-on-surface/90 leading-relaxed mb-4">
                    {post.gameLog ? <GameLog gameLog={post.gameLog} content={post.content}/> :
                        <Markdown>{post.content}</Markdown>}
                </div>
                {Boolean(post.imageUrl) &&
                    <div
                        className="rounded-lg overflow-hidden border border-surface-variant mb-4 relative aspect-[16/9]">
                        <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            src={post.imageUrl}
                        />
                    </div>
                }
                <div className="flex flex-wrap gap-2 mb-2 uppercase">
                    {post.hashtags.map((tag) => (
                        <span key={tag}
                              className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2.5 py-1 rounded-DEFAULT border border-outline-variant/20 hover:border-secondary/50 transition-colors cursor-pointer">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <div
                className="px-md py-3 border-t border-surface-variant flex items-center gap-6 relative z-10 bg-surface-container-lowest/50 rounded-b-xl">
                <button
                    className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors group">
                      <span className="material-symbols-outlined group-hover:scale-110 transition-transform"
                            data-icon="favorite">favorite</span>
                    <span className="font-label-md text-label-md">{post.likeCount}</span>
                </button>
                <button
                    onClick={() => setIsCommentsVisible(!isCommentsVisible)}
                    className="flex items-center gap-2 text-on-surface-variant hover:text-primary-fixed transition-colors group">
                      <span className="material-symbols-outlined group-hover:scale-110 transition-transform"
                            data-icon="chat_bubble">chat_bubble</span>
                    <span className="font-label-md text-label-md">
                        {post.commentCount>0 ? `${post.commentCount} Comments` : 'Write a comment'}
                    </span>
                </button>
            </div>
            {
                isCommentsVisible && (
                   <Comments post={post}/>
                )
            }
        </article>
    )
}