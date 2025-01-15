import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

interface Props {

    id: number;
    poster: string;
    smallPoster?: boolean;
    className?: string

}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
    return (
        <Pressable className={`active:opacity-90 px-2 ${MoviePoster}`}>
            <Image
                source={{ uri: poster }}
                className={`shadow-lg rounded-2xl w-full h-full ${className}`}
                style={{
                    width: smallPoster ? 85 : 150,
                    height: smallPoster ? 130 : 250
                }}
                resizeMode='cover'
            />
        </Pressable>
    )
}

export default MoviePoster