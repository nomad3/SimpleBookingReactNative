import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { addbooking, deletebooking } from '../redux/bookingsApp'
import Header from '../components/Header'

function ViewBookings({ navigation }) {
  const bookings = useSelector(state => state)
  const dispatch = useDispatch()
  const addBooking = booking => dispatch(addbooking(booking))
  const deleteBooking = id => dispatch(deletebooking(id))

  return (
    <>
      <Header titleText='Simple Booking Platform' />
      <View style={styles.container}>
        {bookings.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any Bookings</Text>
          </View>
        ) : (
          <FlatList
            data={bookings}
            renderItem={({ item }) => (
              <List.Item
                title={item.booking.bookingRoom}
                description={item.booking.startDate}
                descriptionNumberOfLines={3}
                titleStyle={styles.listTitle}
                onPress={() => deleteBooking(item.id)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Add new Booking'
          onPress={() =>
            navigation.navigate('AddBookings', {
              addBooking
            })
          }
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 20
  },
  fab: {
    position: 'absolute',
    margin: 20,
    backgroundColor: '#D291BC',
    right: 0,
    bottom: 10
  },
  listTitle: {
    fontSize: 20
  }
})

export default ViewBookings
