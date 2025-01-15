import { movieApi } from "@/core/api/movie_api";
import { MoviesDBMoviesResponse } from '../../../infrastructure/interfaces/moviedb.response';
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";



export const nowPlayingAction = async () => {

    try {

        const { data } = await movieApi.get<MoviesDBMoviesResponse>('/now_playing');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies

    } catch (error) {
        console.log(error);
        throw 'Can not get now playing movies';
    }

}