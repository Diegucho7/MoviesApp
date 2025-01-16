import { View, Text } from 'react-native'
import '../global.css'

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const queryClient = new QueryClient()

const RootLayout = () => {



  nowPlayingAction();

  return (

    <GestureHandlerRootView>



      <QueryClientProvider client={queryClient}>

        <Stack
          screenOptions={{
            headerShown: false
          }
          }
        />

      </QueryClientProvider>
    </GestureHandlerRootView>

  )
}

export default RootLayout