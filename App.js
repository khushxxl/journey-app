import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import AddJourney from './screens/AddJourney'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import JourneyDetailScreen from './screens/JourneyDetailScreen'
import { ToastProvider } from 'react-native-toast-notifications'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="AddJourney"
              component={AddJourney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JourneyDetailScreen"
              component={JourneyDetailScreen}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </ToastProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
