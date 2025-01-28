import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch("/api/shows");
    return await response.json();
};

const Shows = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["posts-route-handler"],
        queryFn: fetchPosts,
    });

    return (
        <div>
            <div>Shows :)</div>
            <p>
                This is the page that shows upcoming shows!! :) users can also
                submit their own shows and people can smile them people should
                eventually be able to sort/filter based on date would also be
                cool if we could store flyers and have an archive of those as
                well
            </p>
        </div>
    );
};

export default Shows;
