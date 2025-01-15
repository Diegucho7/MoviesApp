import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '../../presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color={'purple'} size={70} />
            </View>
        )

    }

    return (
        <ScrollView>

            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl px-4 mb-2'>Movies App</Text>

                {/* Slideshow */}
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />

                {/* Popular */}
                <MovieHorizontalList
                    className='mb-5'
                    title='Populares'
                    movies={popularQuery.data ?? []}
                />
                <MovieHorizontalList
                    className='mb-5'
                    title='Mejores Calificados'
                    movies={topRatedQuery.data ?? []}
                />
                <MovieHorizontalList
                    className='mb-5'
                    title='Proximamente'
                    movies={upcomingQuery.data ?? []}
                />
            </View>
        </ScrollView>


    )
}

export default HomeScreen