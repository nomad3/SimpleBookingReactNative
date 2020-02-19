import remove from 'lodash.remove'

// Action Types

export const ADD_BOOKING = 'ADD_BOOKING'
export const DELETE_BOOKING = 'DELETE_BOOKING'

// Action Creators

let bookingID = 0

export function addbooking(booking) {
  return {
    type: ADD_BOOKING,
    id: bookingID++,
    booking
  }
}

export function deletebooking(id) {
  return {
    type: DELETE_BOOKING,
    payload: id
  }
}

// reducer

const initialState = []

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKING:
      return [
        ...state,
        {
          id: action.id,
          booking: action.booking
        }
      ]

    case DELETE_BOOKING:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}

export default bookingReducer
