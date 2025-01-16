import { CompleteMovie, Movie } from "../interfaces/movie.iterface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb.response";


export class MovieMapper {

    static fromTheMovieDBToMovie(movieDB: Result): Movie {

        return {
            id: movieDB.id,
            title: movieDB.title,
            description: movieDB.overview,
            releaseDate: new Date(movieDB.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,
            rating: movieDB.vote_average
        }

    };

    static fromTheMovieDBToCompleteMovie = (movieDB: MovieDBMovieResponse): CompleteMovie => {
        return {
            id: movieDB.id,
            title: movieDB.title,
            description: movieDB.overview,
            releaseDate: new Date(movieDB.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,
            rating: movieDB.vote_average,
            budget: movieDB.budget,
            genres: movieDB.genres.map(genre => genre.name),
            originalTitle: movieDB.original_title,
            productionCompanies: movieDB.production_companies.map(company => company.name),
            duration: movieDB.runtime
        }
    }



}

