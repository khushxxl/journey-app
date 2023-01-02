import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addJourney } from '../redux/journeySlice'
import { useSelector } from 'react-redux'
import { useToast } from 'react-native-toast-notifications'

const AddJourney = () => {
  const navigation = useNavigation()

  const toast = useToast()

  const journey = useSelector((state) => state.journey)

  const dispatch = useDispatch()
  const [price, setPrice] = useState()
  const [fromDestination, setFromDestination] = useState()
  const [toDestination, setToDestination] = useState()
  const [driverFirstName, setDriverFirstName] = useState()
  const [driverLastName, setDriverLastName] = useState()
  const [driverAge, setDriverAge] = useState()
  const [duration, setDuration] = useState()

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#203354' }}>
        <View>
          <Text style={styles.titleText}>Add Journey</Text>
        </View>

        <View style={styles.inputTextContainer}>
          <Text style={{ color: 'black' }}>from:</Text>
          <TextInput
            placeholder="Enter From Destination"
            style={styles.textInput}
            placeholderTextColor="white"
            onChangeText={setFromDestination}
          />
        </View>
        <View style={[styles.inputTextContainer, { marginBottom: 20 }]}>
          <Text style={{ color: 'black' }}>to:</Text>
          <TextInput
            placeholder="Enter To Destination"
            style={styles.textInput}
            placeholderTextColor="white"
            onChangeText={setToDestination}
          />
        </View>
      </View>

      <View
        style={{
          borderWidth: 1.25,
          marginTop: 10,
          justifyContent: 'center',
          borderColor: 'gray',
          padding: 5,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ textAlign: 'center', marginBottom: 9 }}>
          Driver's Details
        </Text>
        <View style={[styles.box, { marginTop: 0 }]}>
          <Text style={{ color: 'blue', fontSize: 16 }}>
            First Name of Driver
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              keyboardType="name"
              style={{ color: 'blue', fontSize: 17 }}
              placeholder="John"
              onChangeText={setDriverFirstName}
            />
          </View>
        </View>
        <View style={[styles.box, { marginTop: 2 }]}>
          <Text style={{ color: 'blue', fontSize: 16 }}>
            Last Name of Driver
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              keyboardType="name"
              style={{ color: 'blue', fontSize: 17 }}
              placeholder="Doe"
              onChangeText={setDriverLastName}
            />
          </View>
        </View>
        <View style={[styles.box, { marginTop: 2 }]}>
          <Text style={{ color: 'blue', fontSize: 16 }}>Age of the Driver</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              keyboardType="name"
              style={{ color: 'blue', fontSize: 17 }}
              placeholder="30"
              onChangeText={setDriverAge}
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.box}>
          <Text style={{ color: 'blue', fontSize: 16 }}>Enter Price</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'gray', fontSize: 20 }}>£</Text>

            <TextInput
              keyboardType="numeric"
              style={{ color: 'blue', fontSize: 20 }}
              placeholder="0"
              onChangeText={setPrice}
            />
          </View>
        </View>
      </View>

      <View>
        <View style={styles.box}>
          <Text style={{ color: 'blue', fontSize: 16 }}>
            Enter Journey Duration (mintutes)
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              keyboardType="numeric"
              style={{ color: 'blue', fontSize: 16 }}
              placeholder="60 Minutes"
              onChangeText={setDuration}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (
            fromDestination != undefined ||
            (null && toDestination != undefined) ||
            (null && driverAge != undefined) ||
            (null && price != undefined) ||
            (null && driverFirstName != undefined) ||
            (null && driverLastName != undefined) ||
            (null && duration != undefined) ||
            null
          ) {
            dispatch(
              addJourney({
                fromDestination,
                toDestination,
                driverFirstName,
                driverLastName,
                driverAge,
                price,
                duration,
              }),
            )
            toast.show('Journey Added Successfully', {
              placement: 'bottom',
              duration: 2000,
              offset: 50,
              type: 'success',
            })
            navigation.goBack()
          } else {
            toast.show('Complete all the fields', {
              placement: 'bottom',
              duration: 2000,
              offset: 50,
              type: 'warning',
            })
            return
          }

          console.log(journey.journeys)
        }}
        style={{
          backgroundColor: 'orange',
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          padding: 10,
          borderRadius: 20,
          marginTop: 50,
        }}
      >
        <Text style={{ color: 'white', fontWeight: '700' }}>Add Journey</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddJourney

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 70,
  },
  textInput: {
    height: 30,
    flex: 1,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  inputTextContainer: {
    backgroundColor: '#2072B2',

    margin: 20,
    marginBottom: 0,
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center',
    borderRadius: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 0,
  },
})
