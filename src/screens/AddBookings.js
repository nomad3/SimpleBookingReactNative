import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../components/Header'

function AddBooking({ navigation }) {
  const [bookingTitle, setBookingTitle] = useState('')
  const [bookingNoteValue, setBookingNoteValue] = useState('')

  function onSaveBooking() {
    navigation.state.params.addBooking({ bookingTitle, bookingNoteValue })
    navigation.goBack()
  }
  return (
    <>
      <Header titleText='Add a new Booking' />
      <IconButton
        icon='close'
        size={25}
        color='white'
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label='Add Your Name'
          value={bookingTitle}
          mode='outlined'
          onChangeText={setBookingTitle}
          style={styles.title}
        />
        <TextInput
          label='Add Notes Here'
          value={bookingNoteValue}
          onChangeText={setBookingNoteValue}
          mode='flat'
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType='done'
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon='check'
          disabled={setBookingTitle == '' ? true : false}
          onPress={() => onSaveBooking()}
        />
      </View>
    </>
  )
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
