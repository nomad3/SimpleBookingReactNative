import remove from 'lodash.remove'

// Action Types

export const ADD_BOOKING = 'ADD_BOOKING'
export const SELECT_ROOM = 'SELECT_ROOM'
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

// Helper Functions

function applyStartTimer(state) {
	return {
		...state,
		isPlaying: true
	};
}

function applyRestartTimer(state) {
	return {
		...state,
		isPlaying: false,
		elapsedTime: 0,
		timerDuration: TIMER_DURATION
	};
}

function checkBookingDuration(state) {
	if (state.bookingDuration < TIMER_DURATION) {
		return {
			...state,
			elapsedTime: state.elapsedTime + 1
		};
	} else {
		return {
			...state,
			isPlaying: false
		};
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

    case SELECT_ROOM:
      return [
        ...state,
        {
          booking: action.booking
        }
      ]

    default:
      return state
  }
}

export default bookingReducer
