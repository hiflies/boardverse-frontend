import {hashtagRoute} from "../../router.tsx";
import FilteredPosts from "../../components/FilteredPosts";

export default function Hashtag() {
    const params = hashtagRoute.useParams();

    return (
        <main
            className="flex-1 w-full px-margin-mobile md:px-margin-desktop py-md md:py-lg flex justify-center">
            <div className="w-full max-w-2xl flex flex-col gap-lg">
                <h4 className="text-3xl font-bold text-white">
                    <span className="lowercase text-primary">#{params.hashtag}</span> related posts
                </h4>
                <FilteredPosts filter={{hashtag: params.hashtag}}>
                    There is no post for this hashtag.
                </FilteredPosts>
            </div>
        </main>
    );
}
