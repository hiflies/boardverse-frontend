import Post from "../../components/Post";
import CreatePost from "../../components/CreatePost";
import {usePosts} from "../../hooks/usePosts.ts";

export default function HomePage() {
    const {data: posts, isLoading, isError, error} = usePosts();
    return (
        <main
            className="flex-1 w-full px-margin-mobile md:px-margin-desktop py-md md:py-lg flex justify-center">
            <div className="w-full max-w-2xl flex flex-col gap-lg">
                <CreatePost/>
                <div className="flex flex-col gap-lg">
                    {isLoading && (
                        <p className="text-on-surface-variant font-body-md text-body-md">Loading posts...</p>
                    )}
                    {isError && (
                        <p className="text-error font-body-md text-body-md">Failed to load posts: {error.message}</p>
                    )}
                    {posts && posts.length > 0 && (
                        posts.map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        ))
                    )}
                </div>
                {/*<div className="py-lg flex justify-center text-on-surface-variant">*/}
                {/*<span className="material-symbols-outlined animate-spin"*/}
                {/*      data-icon="progress_activity">progress_activity</span>*/}
                {/*</div>*/}
            </div>
        </main>
    );
}