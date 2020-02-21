import React, { useState } from 'react'
import { View, StyleSheet, Picker, Text } from 'react-native'
import { IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../components/Header'

const DATA_ROOMS = [
  {
    id: '0',
    roomName: 'Select a Room Rype',
    price: 0,
  },
  {
    id: '1',
    roomName: 'Music',
    price: 35,
  },
  {
    id: '2',
    roomName: 'Video',
    price: 50, 
  },
  {
    id: '3',
    roomName: 'Theatre',
    price: 70,
  },
];

var options =["Home","Savings","Car","GirlFriend"];


function AddBooking({ navigation }) {
  const [bookingRoom, setBookingRoom] = useState([])
  const [bookingNoteValue, setBookingNoteValue] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  function onSaveBooking() {
    navigation.state.params.addBooking({ bookingRoom, bookingNoteValue, startDate, endDate })
    navigation.goBack()
  }
  return (
    <>
      <Header titleText="Add a new Booking" />
      <IconButton
        icon="close"
        size={35}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <Picker
          selectedValue={bookingRoom}
          onValueChange={
            bookingRoom => setBookingRoom(bookingRoom)
          }
        >
          {DATA_ROOMS.map((item, index) => {
            return (
              <Picker.Item
                key={index}
                label={`${item.roomName}`}
                value={`${item.roomName}`}
              />
            );
          })}
        </Picker>
        <TextInput
          label="Select Start Date"
          value={startDate}
          mode="outlined"
          onChangeText={setStartDate}
          style={styles.title}
        />
        <TextInput
          label="Select End Date"
          value={endDate}
          mode="outlined"
          onChangeText={setEndDate}
          style={styles.title}
        />
        <TextInput
          label="Add Notes Here"
          value={bookingNoteValue}
          onChangeText={setBookingNoteValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          medium
          icon="check"
          disabled={setBookingRoom == "" ? true : false}
          onPress={() => onSaveBooking()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D291BC',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  iconButton: {
    backgroundColor: '#D291BC',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 24,
  },
  text: {
    height: 300,
    fontSize: 16
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0
  }
})

export default AddBooking
