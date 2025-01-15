import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/topRated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query"


export const useMovies = () => {

    //Queries

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24
    });
    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    });

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24

    })
    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top_rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24

    })
    // Top-rater

    // upcoming

    return {
        nowPlayingQuery,
        popularQuery,
        upcomingQuery,
        topRatedQuery
    }


}