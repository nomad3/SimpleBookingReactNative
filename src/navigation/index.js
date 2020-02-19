import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ViewBookings from '../screens/ViewBookings'
import AddBookings from '../screens/AddBookings'

const StackNavigator = createStackNavigator(
  {
    ViewBookings: {
      screen: ViewBookings
    },
    AddBookings: {
      screen: AddBookings
    }
  },
  {
    initialRouteName: 'ViewBookings',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default createAppContainer(StackNavigator)
