import type {Post} from "../../types/Post.ts";
import {useComments} from "../../hooks/usePosts.ts";
import {loginRoute} from "../../router.tsx";
import {useIsAuthenticated} from "../../store/auth.ts";
import {useEffect} from "react";
import CreateComment from "./CreateComment.tsx";
import Comment from "./Comment.tsx";

type CommentsProps = {
    post: Post;
}

export default function Comments({post}: CommentsProps) {
    const isAuthenticated = useIsAuthenticated();
    const {data: comments, isLoading, isError, error, refetch} = useComments(post.id.toString());
    const navigate = loginRoute.useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated && comments!.length === 0) {
            navigate({});
        }
    }, [comments, isAuthenticated, isLoading, navigate]);

    return (
        <div className="relative z-10 border-t border-surface-variant">
            {isAuthenticated && (
                <CreateComment post={post} refetch={refetch}/>
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
                        <Comment key={comment.id}
                                 post={post}
                                 comment={comment}
                                 refetch={refetch}
                        />
                    ))
                )}
            </div>
        </div>
    )
}