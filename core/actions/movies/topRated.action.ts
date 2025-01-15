import { movieApi } from "@/core/api/movie_api";
import { MoviesDBMoviesResponse } from '../../../infrastructure/interfaces/moviedb-response';
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";



export const topRatedMoviesAction = async () => {

    try {

        const { data } = await movieApi.get<MoviesDBMoviesResponse>('/top_rated');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        console.log(JSON.stringify(movies, null, 2));
        return movies

    } catch (error) {
        console.log(error);
        throw 'Can not get now topRated movies';
    }

}