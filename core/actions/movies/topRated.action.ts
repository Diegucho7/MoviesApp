import { movieApi } from "@/core/api/movie_api";
import { MoviesDBMoviesResponse } from '../../../infrastructure/interfaces/moviedb.response';
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;

}


export const topRatedMoviesAction = async ({
    page = 1,
    limit = 10 }: Options) => {

    try {

        const { data } = await movieApi.get<MoviesDBMoviesResponse>('/top_rated', {
            params: {
                page: page,
            },
        }

        );

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies

    } catch (error) {
        console.log(error);
        throw 'Can not get now topRated movies';
    }

}