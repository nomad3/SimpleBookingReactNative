import { createStore } from 'redux'
import bookingsReducer from './bookingsApp'

const store = createStore(bookingsReducer)

export default store
