import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const AllJourneys = ({ journeys }) => {
  const navigation = useNavigation()
  return (
    <ScrollView style={{ backgroundColor: '#203354', flex: 1 }}>
      {journeys.map((data, i) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('JourneyDetailScreen', { data })}
            key={i}
            style={{
              backgroundColor: 'white',
              marginTop: 10,
              padding: 10,
              margin: 7,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '50%',
                }}
              >
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.destinationText}>09:45</Text>
                  <Text style={[styles.destinationText, { color: 'gray' }]}>
                    {data.fromDestination}
                  </Text>
                </View>
                <Ionicons name="arrow-forward-outline" size={28} />
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.destinationText}>15:52</Text>
                  <Text style={[styles.destinationText, { color: 'gray' }]}>
                    {data.toDestination}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: '500', fontSize: 18 }}>
                  ￡{data.price}
                </Text>
                <Ionicons name="chevron-forward-outline" size={15} />
              </View>
            </View>

            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={{ color: 'gray', fontWeight: '500' }}>
                Plat 4 (estimated)
              </Text>
              <Text style={{ color: 'gray', fontWeight: '500' }}>
                2 train changes
              </Text>
            </View>

            <View
              style={{ height: 2, backgroundColor: 'lightgray', marginTop: 10 }}
            />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  color: 'gray',
                  marginTop: 10,
                }}
              >
                {data.duration} minutes
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  color: 'gray',
                  marginTop: 10,
                  textDecorationLine: 'underline',
                }}
              >
                Show Details
              </Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

export default AllJourneys

const styles = StyleSheet.create({
  destinationText: { fontSize: 18, fontWeight: 'bold' },
})
