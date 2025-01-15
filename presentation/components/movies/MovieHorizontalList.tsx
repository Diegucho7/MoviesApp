import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { useRef, useEffect } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.iterface'
import MoviePoster from './MoviePoster';


interface Props {
    title?: string
    movies: Movie[];
    className?: string;

    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200);
    }, [movies])
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEnReachEnd =
            (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if (!isEnReachEnd) return;

        isLoading.current = true;

        //
        console.log('cargar las siguientes peliculas');
        loadNextPage && loadNextPage();

    };


    return (
        <View className={`${className}`}>
            {
                title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
            }
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} smallPoster />
                )}
                onScroll={onScroll}
                keyExtractor={(item, i) => `${item.id}-${i}`}
            />
        </View>
    )
}

export default MovieHorizontalList