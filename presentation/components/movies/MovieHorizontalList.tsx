import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.iterface'
import MoviePoster from './MoviePoster';


interface Props {
    title?: string
    movies: Movie[];
    className?: string;
}

const MovieHorizontalList = ({ title, movies, className }: Props) => {
    return (
        <View className={`${className}`}>
            {
                title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
            }
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movies}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    )
}

export default MovieHorizontalList