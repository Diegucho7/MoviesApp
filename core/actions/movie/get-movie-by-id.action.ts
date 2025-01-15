import { movieApi } from "@/core/api/movie_api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.iterface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";



export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {

    try {

        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

        console.log('Pelicula - HTTP Cargada')
        return MovieMapper.fromTheMovieDBToCompleteMovie(data);

    } catch (error) {
        console.log(error);
        throw 'Can not get now playing movies';
    }

}