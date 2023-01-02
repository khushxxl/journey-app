import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native'

import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import AllJourneys from '../components/AllJourneys'

const HomeScreen = () => {
  const navigation = useNavigation()

  const journey = useSelector((state) => state.journey)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        borderBottomWidth: 2,
        backgroundColor: '#203354',
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
      headerShadowVisible: true,
      headerLeft: () => <></>,
      headerTitle: 'All Journeys',
      headerRight: () => (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('AddJourney')}>
            <Ionicons name="add-circle-outline" size={25} color="white" />
          </TouchableOpacity>
        </>
      ),
    })
  })

  if (journey.journeys.length === 0) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('AddJourney')}
        >
          <Ionicons name="add" size={25} />
          <Text
            style={{ textAlign: 'center', fontSize: 15, letterSpacing: 0.75 }}
          >
            Add Journey
          </Text>
        </TouchableOpacity>
      </View>
    )
  } else return <AllJourneys journeys={journey.journeys} />
}

export default HomeScreen

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
