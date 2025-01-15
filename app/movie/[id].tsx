import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const { id } = useLocalSearchParams();



const MovieScreen = () => {
    return (
        <View>
            <Text>MovieScreen</Text>
        </View>
    )
}

export default MovieScreen