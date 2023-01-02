import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const JourneyDetailScreen = ({ route }) => {
  const navigation = useNavigation()
  const { data } = route.params
  console.log(data)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        borderBottomWidth: 2,
        backgroundColor: '#203354',
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
      headerShadowVisible: true,
      headerLeft: () => (
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        </>
      ),
      headerTitle: 'About Journey',
      headerRight: () => <></>,
    })
  })

  return (
    <View>
      <View style={{ backgroundColor: '#203354' }}>
        <View style={[styles.box1, { marginBottom: 0 }]}>
          <Text style={{ color: 'lightgray' }}>from:</Text>
          <Text style={styles.text1}>{data.fromDestination}</Text>
        </View>
        <View style={[styles.box1, { marginBottom: 2 }]}>
          <Text style={{ color: 'lightgray' }}>to:</Text>
          <Text style={styles.text1}>{data.toDestination}</Text>
        </View>
        <Text
          style={{
            color: 'lightgray',
            marginTop: 10,
            marginLeft: 20,
            marginBottom: 20,
          }}
        >
          Duration : {data.duration} minutes
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          borderWidth: 0.4,
          padding: 10,
          borderColor: 'gray',
          margin: 5,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'black', fontWeight: 'bold' }}>
          Driver's Details
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            <Text style={{ fontWeight: 'normal' }}>First Name</Text> :{' '}
            {data.driverFirstName}
          </Text>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            <Text style={{ fontWeight: 'normal' }}>Last Name</Text> :{' '}
            {data.driverLastName}
          </Text>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            <Text style={{ fontWeight: 'normal' }}>Driver's Age</Text> :{' '}
            {data.driverAge}
          </Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Image source={require('../assets/qrcode.png')} />
        <Text style={{ color: 'black' }}>
          A QR code ticket will be sent to your email
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
            letterSpacing: 0.75,
          }}
        >
          You Pay
        </Text>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>
          £{data.price}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          margin: 20,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 19,
            fontWeight: '800',
            alignItems: 'center',
          }}
        >
          Pay with
        </Text>
        <Image
          style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10 }}
          source={require('../assets/apple.jpg')}
        />
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 19,
            fontWeight: '800',
            alignItems: 'center',
          }}
        >
          pay
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default JourneyDetailScreen

const styles = StyleSheet.create({
  text1: {
    marginLeft: 10,
    fontSize: 19,
    color: 'white',
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  box1: { flexDirection: 'row', alignItems: 'center', margin: 20 },
})
