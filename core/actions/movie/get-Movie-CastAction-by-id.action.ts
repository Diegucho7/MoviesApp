import { movieApi } from "@/core/api/movie_api";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/movie-db-credits.respnse";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper"


export const getMovieCastAction = async (movieId: number) => {

    try {

        const { data } = await movieApi.get<MovieDBCreditsResponse>(`/${movieId}/credits`);

        console.log('Pelicula - HTTPCargada')
        return data.cast.map(CastMapper.fromMovieDBCastToEntity)

    } catch (error) {
        console.log(error);
        throw 'Can not get now playing movies';
    }

}